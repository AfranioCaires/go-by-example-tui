import { TextAttributes } from '@opentui/core'
import { RGBA } from '@opentui/core'
import type { ReactNode } from 'react'

import { theme } from '../util/theme'

interface PaneProps {
  title: string
  shortcut?: string
  count?: number
  subtitle?: ReactNode
  children?: ReactNode
  active?: boolean
  width?: any
  height?: any
  flexGrow?: number
  borderColor?: RGBA
  backgroundColor?: RGBA
}

export function Pane({
  title,
  shortcut,
  count,
  subtitle,
  children,
  active = true,
  width,
  height,
  flexGrow,
  borderColor,
  backgroundColor,
}: PaneProps) {
  const finalBorderColor = borderColor || (active ? theme.border : theme.backgroundPanel)
  const finalBg = backgroundColor || theme.backgroundPanel

  return (
    <box
      border={['left']}
      customBorderChars={{
        topLeft: '',
        bottomLeft: '',
        vertical: '┃',
        topRight: '',
        bottomRight: '',
        horizontal: ' ',
        bottomT: '',
        topT: '',
        cross: '',
        leftT: '',
        rightT: '',
      }}
      borderColor={finalBorderColor}
      width={width}
      height={height}
      flexGrow={flexGrow}
      flexDirection="column"
    >
      <box
        backgroundColor={finalBg}
        width="100%"
        height="100%"
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={1}
        paddingRight={1}
        flexDirection="column"
        flexGrow={1}
      >
        <box flexDirection="row" alignItems="center" justifyContent="space-between" width="100%">
          <box flexDirection="row" gap={1} marginBottom={children ? 1 : 0} marginLeft={1}>
            {shortcut && <text fg={theme.textMuted}>[{shortcut}]</text>}
            <text fg={theme.text} attributes={TextAttributes.BOLD}>
              {title}
            </text>
          </box>

          {count !== undefined && (
            <text fg={theme.textMuted} marginRight={1}>
              {count}
            </text>
          )}

          {subtitle && <box marginRight={1}>{subtitle}</box>}
        </box>

        {children && (
          <box flexDirection="column" flexGrow={1} width="100%">
            {children}
          </box>
        )}
      </box>
    </box>
  )
}
