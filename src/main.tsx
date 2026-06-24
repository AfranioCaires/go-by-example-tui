import path from 'path'

import { createCliRenderer, addDefaultParsers } from '@opentui/core'
import { createRoot } from '@opentui/react'

import { App } from './app'

addDefaultParsers([
  {
    filetype: 'go',
    queries: {
      highlights: [path.resolve('tree-sitter/go-highlights.scm')],
    },
    wasm: path.resolve('tree-sitter/tree-sitter-go.wasm'),
  },
])

const renderer = await createCliRenderer()
const globalAny = globalThis as any
globalAny.renderer = renderer

async function cleanup() {
  await renderer.destroy()
  process.exit(0)
}

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)

createRoot(renderer).render(<App />)
