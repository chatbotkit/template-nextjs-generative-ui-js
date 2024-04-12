'use client'

import { useContext } from 'react'

import { ConversationContext } from '@chatbotkit/react'

export default function Component01({ param01, param02 }) {
  const { request } = useContext(ConversationContext)

  function callFunction01(event) {
    request('function01', {})
  }

  return (
    <div className="flex flex-row gap-2">
      <div className="font-mono">
        {JSON.stringify({ param01, param02 }, null, 2)}
      </div>
      <button onClick={() => callFunction01()}>click me</button>
    </div>
  )
}
