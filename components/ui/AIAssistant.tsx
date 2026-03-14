'use client'

import { Bubble } from '@typebot.io/react'

export default function AIAssistant() {
  return (
    <Bubble
      typebot="my-typebot-5ufoil4"
      apiHost="https://typebot.io"
      theme={{
        button: {
          backgroundColor: '#6F3F48',
          iconColor: '#E2B0B3',
          size: 'large',
        },
        previewMessage: {
          backgroundColor: '#1A1617',
          textColor: '#E2B0B3',
          closeButtonBackgroundColor: '#6F3F48',
          closeButtonIconColor: '#E2B0B3',
        },
        chatWindow: {
          backgroundColor: '#121212',
        },
      }}
    />
  )
}
