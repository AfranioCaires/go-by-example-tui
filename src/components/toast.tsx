import { TextAttributes } from '@opentui/core'
import React, { createContext, useContext, useState, useEffect } from 'react'

import { theme } from '../util/theme'

interface ToastOptions {
  title?: string
  message: string
  variant: 'info' | 'success' | 'warning' | 'error'
  duration?: number
}

interface ToastContextType {
  show: (options: ToastOptions) => void
  currentToast: ToastOptions | null
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [currentToast, setCurrentToast] = useState<ToastOptions | null>(null)

  useEffect(() => {
    if (!currentToast) return
    const duration = currentToast.duration || 3000
    const timer = setTimeout(() => {
      setCurrentToast(null)
    }, duration)
    return () => clearTimeout(timer)
  }, [currentToast])

  function show(options: ToastOptions) {
    setCurrentToast(options)
  }

  return (
    <ToastContext.Provider value={{ show, currentToast }}>
      {children}
      {currentToast && <Toast toast={currentToast} />}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

function Toast({ toast }: { toast: ToastOptions }) {
  let variantColor = theme.border
  if (toast.variant === 'success') variantColor = theme.success
  if (toast.variant === 'error') variantColor = theme.error
  if (toast.variant === 'warning') variantColor = theme.warning
  if (toast.variant === 'info') variantColor = theme.info

  return (
    <box
      position="absolute"
      top={2}
      right={2}
      paddingLeft={2}
      paddingRight={2}
      paddingTop={1}
      paddingBottom={1}
      backgroundColor={theme.backgroundElement}
      borderColor={variantColor}
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
      flexDirection="column"
    >
      {toast.title && (
        <text attributes={TextAttributes.BOLD} marginBottom={1} fg={theme.text}>
          {toast.title}
        </text>
      )}
      <text fg={theme.text} wrapMode="word">
        {toast.message}
      </text>
    </box>
  )
}
