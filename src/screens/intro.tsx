import { TextAttributes } from '@opentui/core'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { theme } from '../util/theme'

export function IntroScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/menu'), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <box
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor={theme.background}
    >
      <box flexDirection="column" alignItems="center" gap={1}>
        <ascii-font font="tiny" text="Go By Example" />
        <text fg={theme.textMuted} attributes={TextAttributes.DIM}>
          A hands-on introduction to Go.
        </text>
      </box>
    </box>
  )
}
