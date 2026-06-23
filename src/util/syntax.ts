import { SyntaxStyle } from '@opentui/core'

import { theme } from './theme'

export const syntaxStyle = SyntaxStyle.fromStyles({
  keyword: { fg: theme.syntaxKeyword, italic: true },
  string: { fg: theme.syntaxString },
  number: { fg: theme.syntaxNumber },
  comment: { fg: theme.syntaxComment, italic: true },
  type: { fg: theme.syntaxType },
  operator: { fg: theme.syntaxOperator },

  'markup.heading': { fg: theme.primary, bold: true },
  'markup.heading.1': { fg: theme.primary, bold: true },
  'markup.heading.2': { fg: theme.primary, bold: true },
  'markup.heading.3': { fg: theme.primary, bold: true },
  'markup.list': { fg: theme.success },
  'markup.raw': { fg: theme.syntaxString },

  default: { fg: theme.text },
})
