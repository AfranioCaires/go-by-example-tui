import { TextAttributes } from '@opentui/core'
import { useKeyboard } from '@opentui/react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

import { Footer } from '../components/footer'
import { Pane } from '../components/pane'
import { useToast } from '../components/toast'
import {
  loadLesson,
  runCode,
  copyToClipboard,
  loadTopics,
  type LessonData,
  type Topic,
} from '../lib/go'
import { syntaxStyle } from '../util/syntax'
import { theme } from '../util/theme'

export function LessonScreen() {
  const { topicId } = useParams<{ topicId: string }>()
  const navigate = useNavigate()
  const toast = useToast()
  const [lesson, setLesson] = useState<LessonData | null>(null)
  const [output, setOutput] = useState<string | null>(null)
  const [running, setRunning] = useState(false)
  const [topics, setTopics] = useState<Topic[]>([])

  useEffect(() => {
    loadTopics().then(setTopics)
  }, [])

  useEffect(() => {
    if (!topicId) return
    setLesson(null)
    setOutput(null)
    loadLesson(topicId).then(setLesson)
  }, [topicId])

  const currentIndex = topics.findIndex((t) => t.id === topicId)
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null
  const nextTopic =
    currentIndex !== -1 && currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null

  useKeyboard((key) => {
    if (key.name === 'escape' || key.name === 'q') {
      navigate('/menu')
      return
    }
    if (key.name === 'c' && lesson) {
      void copyToClipboard(lesson.code).then(() => {
        toast.show({
          variant: 'success',
          message: 'Código copiado!',
          duration: 2000,
        })
      })
      return
    }
    if (key.name === 'r' && lesson && !running) {
      setRunning(true)
      setOutput(null)
      runCode(lesson.code)
        .then((result) => {
          setOutput(result)
          setRunning(false)
        })
        .catch(() => {
          setOutput('Erro inesperado ao rodar o código.')
          setRunning(false)
        })
      return
    }
    if (key.name === 'left' || key.name === 'p') {
      if (prevTopic) {
        navigate(`/lesson/${prevTopic.id}`)
      }
      return
    }
    if (key.name === 'right' || key.name === 'n') {
      if (nextTopic) {
        navigate(`/lesson/${nextTopic.id}`)
      }
      return
    }
  })

  if (!lesson) {
    return (
      <box
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor={theme.background}
      >
        <text fg={theme.textMuted}>Carregando...</text>
      </box>
    )
  }

  const showOutput = output !== null || running

  return (
    <box flexDirection="column" flexGrow={1} backgroundColor={theme.background}>
      <box flexDirection="row" flexGrow={1} padding={1} gap={1}>
        <Pane
          title={lesson.title}
          width="30%"
          borderColor={theme.border}
          backgroundColor={theme.backgroundPanel}
        >
          <scrollbox
            flexGrow={1}
            focused={false}
            style={{
              rootOptions: { backgroundColor: theme.backgroundPanel },
              wrapperOptions: { backgroundColor: theme.backgroundPanel },
              viewportOptions: { backgroundColor: theme.backgroundPanel },
              contentOptions: { backgroundColor: theme.backgroundPanel },
              scrollbarOptions: {
                trackOptions: {
                  foregroundColor: theme.border,
                  backgroundColor: theme.backgroundPanel,
                },
              },
            }}
          >
            <box paddingLeft={1} paddingRight={1} paddingBottom={1} flexDirection="column" gap={1}>
              {lesson.description.split(/(```bash[\s\S]*?```)/g).map((part, index) => {
                if (part.startsWith('```bash')) {
                  const bashCode = part.replace(/^```bash\n/, '').replace(/\n```$/, '')
                  return (
                    <box
                      key={index}
                      flexDirection="column"
                      border={['all']}
                      borderColor={theme.borderSubtle}
                      backgroundColor={theme.backgroundElement}
                      width="100%"
                      paddingTop={0}
                      paddingBottom={0}
                      paddingLeft={0}
                      paddingRight={0}
                      marginTop={1}
                      marginBottom={1}
                    >
                      <box
                        backgroundColor={theme.border}
                        flexDirection="row"
                        paddingLeft={1}
                        paddingRight={1}
                        height={1}
                      >
                        <text fg={theme.primary} attributes={TextAttributes.BOLD}>
                          &gt; Terminal
                        </text>
                      </box>
                      <box padding={1} flexDirection="column">
                        {bashCode.split('\n').map((line, idx) => {
                          if (line.startsWith('$ ')) {
                            return (
                              <box key={idx} flexDirection="row">
                                <text fg={theme.success} attributes={TextAttributes.BOLD}>
                                  ${' '}
                                </text>
                                <text fg={theme.text}>{line.slice(2)}</text>
                              </box>
                            )
                          }
                          return (
                            <text key={idx} fg={theme.textMuted}>
                              {line}
                            </text>
                          )
                        })}
                      </box>
                    </box>
                  )
                }
                return <markdown key={index} content={part} syntaxStyle={syntaxStyle} />
              })}
            </box>
          </scrollbox>
        </Pane>

        <box width="70%" flexDirection="column" flexGrow={1} gap={1}>
          <Pane
            title="Código"
            borderColor={theme.border}
            backgroundColor={theme.backgroundElement}
            flexGrow={1}
          >
            <scrollbox
              flexGrow={1}
              focused={true}
              style={{
                rootOptions: { backgroundColor: theme.backgroundElement },
                wrapperOptions: { backgroundColor: theme.backgroundElement },
                viewportOptions: { backgroundColor: theme.backgroundElement },
                contentOptions: { backgroundColor: theme.backgroundElement },
                scrollbarOptions: {
                  trackOptions: {
                    foregroundColor: theme.border,
                    backgroundColor: theme.backgroundElement,
                  },
                },
              }}
            >
              <box flexGrow={1} paddingLeft={1} paddingRight={1}>
                <line-number fg={theme.textMuted} paddingRight={1}>
                  <code content={lesson.code} filetype="go" syntaxStyle={syntaxStyle} />
                </line-number>
              </box>
            </scrollbox>
          </Pane>

          {showOutput && (
            <Pane
              title="Output"
              borderColor={theme.success}
              backgroundColor={theme.backgroundElement}
              height="30%"
            >
              <scrollbox
                flexGrow={1}
                focused={false}
                style={{
                  rootOptions: { backgroundColor: theme.backgroundElement },
                  wrapperOptions: { backgroundColor: theme.backgroundElement },
                  viewportOptions: { backgroundColor: theme.backgroundElement },
                  contentOptions: { backgroundColor: theme.backgroundElement },
                  scrollbarOptions: {
                    trackOptions: {
                      foregroundColor: theme.border,
                      backgroundColor: theme.backgroundElement,
                    },
                  },
                }}
              >
                <box paddingLeft={1} paddingRight={1} paddingBottom={1}>
                  {running ? (
                    <text fg={theme.textMuted}>Executando...</text>
                  ) : (
                    <text fg={theme.success}>{output}</text>
                  )}
                </box>
              </scrollbox>
            </Pane>
          )}
        </box>
      </box>

      <Footer
        keybinds={[
          { key: '←/→', label: 'ant/próx' },
          { key: 'c', label: 'copiar' },
          { key: 'r', label: 'executar' },
          { key: 'esc', label: 'voltar' },
        ]}
      />
    </box>
  )
}
