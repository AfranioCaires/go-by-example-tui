import { TextAttributes } from '@opentui/core'

import { theme } from '../util/theme'

interface FooterProps {
  keybinds?: Array<{ key: string; label: string }>
}

export function Footer({ keybinds = [] }: FooterProps) {
  return (
    <box
      width="100%"
      paddingLeft={1}
      paddingRight={1}
      paddingBottom={1}
      flexDirection="row"
      justifyContent="space-between"
    >
      <box flexDirection="row" gap={2}>
        {keybinds.map((item) => (
          <box key={item.key} flexDirection="row" gap={1}>
            <text fg={theme.text}>{item.key}</text>
            <text fg={theme.textMuted}>{item.label}</text>
          </box>
        ))}
      </box>

      <box flexDirection="row">
        <text fg={theme.textMuted}>go-by-</text>
        <text fg={theme.text} attributes={TextAttributes.BOLD}>
          example
        </text>
      </box>
    </box>
  )
}
