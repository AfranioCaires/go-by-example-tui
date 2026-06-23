import { RGBA } from '@opentui/core'

export const theme = {
  background: RGBA.fromHex('#0a0a0a'),
  backgroundPanel: RGBA.fromHex('#141414'),
  backgroundElement: RGBA.fromHex('#1e1e1e'),

  text: RGBA.fromHex('#eeeeee'),
  textMuted: RGBA.fromHex('#808080'),

  border: RGBA.fromHex('#484848'),
  borderSubtle: RGBA.fromHex('#3c3c3c'),

  primary: RGBA.fromHex('#fab283'),
  success: RGBA.fromHex('#7fd88f'),
  error: RGBA.fromHex('#e06c75'),
  warning: RGBA.fromHex('#f5a742'),
  info: RGBA.fromHex('#56b6c2'),

  syntaxKeyword: RGBA.fromHex('#9d7cd8'),
  syntaxString: RGBA.fromHex('#7fd88f'),
  syntaxNumber: RGBA.fromHex('#f5a742'),
  syntaxComment: RGBA.fromHex('#808080'),
  syntaxFunction: RGBA.fromHex('#fab283'),
  syntaxType: RGBA.fromHex('#e5c07b'),
  syntaxOperator: RGBA.fromHex('#56b6c2'),
  syntaxVariable: RGBA.fromHex('#e06c75'),
} as const
