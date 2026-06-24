import { TextAttributes } from '@opentui/core'
import { useKeyboard } from '@opentui/react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Footer } from '../components/footer'
import { Pane } from '../components/pane'
import { theme } from '../util/theme'
import { loadTopics, type Topic } from '../lib/go'

export function MenuScreen() {
  const navigate = useNavigate()
  const [topics, setTopics] = useState<Topic[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    loadTopics().then(setTopics)
  }, [])

  useKeyboard((key) => {
    if (topics.length === 0) {
      return
    }
    if (key.name === 'up') {
      setSelectedIndex((i) => Math.max(0, i - 1))
      return
    }
    if (key.name === 'down') {
      setSelectedIndex((i) => Math.min(topics.length - 1, i + 1))
      return
    }
    if (key.name === 'return') {
      const topic = topics[selectedIndex]
      if (topic) {
        navigate(`/lesson/${topic.id}`)
      }
      return
    }
    if (key.name === 'q') {
      async function run() {
        const globalAny = globalThis as any
        const r = globalAny.renderer
        if (r) {
          await r.destroy()
        }
        process.exit(0)
      }
      void run()
    }
  })

  if (topics.length === 0) {
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

  return (
    <box flexDirection="column" flexGrow={1} backgroundColor={theme.background}>
      <box flexGrow={1} padding={1}>
        <Pane title="Tópicos" count={topics.length} active width="100%" flexGrow={1}>
          <box flexDirection="column" flexGrow={1} justifyContent="space-between">
            <box flexDirection="column" width="100%">
              {topics.map((topic, index) => {
                const isSelected = index === selectedIndex
                return (
                  <box
                    key={topic.id}
                    backgroundColor={isSelected ? theme.border : undefined}
                    flexDirection="row"
                    gap={2}
                    paddingLeft={1}
                    paddingRight={1}
                  >
                    <text
                      fg={theme.success}
                      flexShrink={0}
                      attributes={isSelected ? TextAttributes.BOLD : undefined}
                    >
                      ●
                    </text>
                    <text
                      fg={isSelected ? theme.text : theme.textMuted}
                      attributes={isSelected ? TextAttributes.BOLD : undefined}
                      flexShrink={1}
                      flexGrow={1}
                      wrapMode="none"
                    >
                      {topic.title}
                    </text>
                  </box>
                )
              })}
            </box>

            <box
              border={['top']}
              borderColor={theme.borderSubtle}
              paddingTop={1}
              paddingLeft={1}
              paddingRight={1}
              flexDirection="column"
            >
              <text fg={theme.primary} attributes={TextAttributes.BOLD} marginBottom={0}>
                Descrição:
              </text>
              <text fg={theme.text}>{topics[selectedIndex]?.description}</text>
            </box>
          </box>
        </Pane>
      </box>

      <Footer
        keybinds={[
          { key: '↑↓', label: 'navegar' },
          { key: 'enter', label: 'abrir' },
          { key: 'q', label: 'sair' },
        ]}
      />
    </box>
  )
}
