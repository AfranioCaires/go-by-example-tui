import { readdir } from 'node:fs/promises'

export interface LessonData {
  title: string
  description: string
  code: string
}

export interface Topic {
  id: string
  title: string
  description: string
}

function stripGoComments(code: string): string {
  const stripped = code.replace(
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`[^`]*`|\/\*[\s\S]*?\*\/|\/\/.*)/g,
    (match) => {
      if (match.startsWith('//') || match.startsWith('/*')) {
        return ''
      }
      return match
    }
  )

  const lines = stripped.split('\n').map((l) => l.trimEnd())
  const result: string[] = []
  let lastWasEmpty = false

  for (const line of lines) {
    const isEmpty = line.trim() === ''
    if (isEmpty) {
      if (!lastWasEmpty) {
        result.push('')
        lastWasEmpty = true
      }
    }
    if (!isEmpty) {
      result.push(line)
      lastWasEmpty = false
    }
  }

  return result.join('\n').trim()
}

export async function copyToClipboard(text: string): Promise<void> {
  const proc = Bun.spawn(['pbcopy'], {
    stdin: 'pipe',
  })
  proc.stdin.write(text)
  proc.stdin.end()
  await proc.exited
}

export async function loadTopics(): Promise<Topic[]> {
  const entries = await readdir('lessons', { withFileTypes: true })
  const topics: Topic[] = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const dirName = entry.name
      const match = dirName.match(/^(\d+)-(.*)$/)
      if (match) {
        const slugName = match[2] || ''
        const readmeFile = Bun.file(`lessons/${dirName}/${slugName}.md`)
        const text = await readmeFile.text()

        const lines = text.split('\n')
        const titleLine = lines.find((l) => l.startsWith('# '))

        let title = ''
        if (titleLine) {
          const rawTitle = titleLine.replace('# ', '').trim()
          title = rawTitle
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        }
        if (!titleLine) {
          title = slugName
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        }

        let description = ''
        const titleIndex = titleLine ? lines.indexOf(titleLine) : -1
        const contentLines = lines.slice(titleIndex + 1)

        const firstParagraphLines: string[] = []
        for (const line of contentLines) {
          const trimmed = line.trim()
          if (trimmed.startsWith('```')) {
            break
          }
          if (trimmed === '' && firstParagraphLines.length > 0) {
            break
          }
          if (trimmed !== '') {
            firstParagraphLines.push(trimmed)
          }
        }
        description = firstParagraphLines.join(' ')

        topics.push({
          id: dirName,
          title,
          description,
        })
      }
    }
  }

  return topics.sort((a, b) => {
    const aPart = a.id.split('-')[0] || ''
    const bPart = b.id.split('-')[0] || ''
    const aNum = parseInt(aPart, 10) || 0
    const bNum = parseInt(bPart, 10) || 0
    return aNum - bNum
  })
}

export async function loadLesson(slug: string): Promise<LessonData> {
  const match = slug.match(/^(\d+)-(.*)$/)
  let name = slug
  if (match) {
    name = match[2] || slug
  }

  const readmeFile = Bun.file(`lessons/${slug}/${name}.md`)
  const text = await readmeFile.text()

  const lines = text.split('\n')
  const titleLine = lines.find((l) => l.startsWith('# '))
  let title = name
  if (titleLine) {
    const rawTitle = titleLine.replace('# ', '').trim()
    title = rawTitle
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const goFile = Bun.file(`lessons/${slug}/${name}.go`)
  const rawCode = await goFile.text()
  const code = stripGoComments(rawCode)

  const titleEndIndex = titleLine ? text.indexOf(titleLine) + titleLine.length : 0
  const description = text.substring(titleEndIndex).trim()

  const formattedDescription = description
    .split('\n')
    .map((line) => {
      if (line.trim().startsWith('#')) {
        return `\n\n${line.trim()}\n\n`
      }
      return line
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return { title, description: formattedDescription, code }
}

export async function runCode(code: string): Promise<string> {
  const tmpFile = `/tmp/${Date.now()}.go`
  await Bun.write(tmpFile, code)

  try {
    const proc = Bun.spawn(['go', 'run', tmpFile], {
      stdout: 'pipe',
      stderr: 'pipe',
    })

    const [stdout, stderr] = await Promise.all([
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text(),
    ])

    await proc.exited
    return (stdout + stderr).trim()
  } catch {
    return 'Erro: O compilador de Go (go) não foi encontrado no sistema.\nPor favor, instale o Go (https://go.dev) para rodar o código.'
  }
}
