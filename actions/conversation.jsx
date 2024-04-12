'use server'

import Component01 from '@/components/functions/Component01'

import { streamComplete } from '@chatbotkit/react/actions/complete'
import { ChatBotKit } from '@chatbotkit/sdk'

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

export async function complete({ messages }) {
  return streamComplete({
    client: cbk.conversation,

    // The backstory is the heart of the conversation. It provides the context
    // and rules for the conversational AI agent to follow. In this example, the
    // backstory is a simple appointment booking system for a virtual assistant.

    backstory: `ADD BACKSTORY HERE`,

    // We allow configuration of the model to be used for the conversation by
    // setting the CHATBOTKIT_MODEL environment variable. The default model is
    // GPT-3.5 Turbo.

    model: process.env.CHATBOTKIT_MODEL || 'gpt-3.5-turbo',

    // Pass the messages to the conversation.

    messages,

    // Pass a list of functions that the AI agent can call to interact with.

    functions: [
      {
        name: 'function01',
        description: 'Description of function01',
        parameters: {},
        handler: async () => {
          return {
            result: {
              status: 'success',
              data: {},
            },
          }
        },
      },

      {
        name: 'function02',
        description: 'Description of function02',
        parameters: {
          type: 'object',
          properties: {
            param1: {
              type: 'string',
            },
            param2: {
              type: 'number',
            },
          },
          required: ['param1'],
        },
        handler: async ({ param1, param2 }, { controllers }) => {
          controllers.continuation.abort()

          return {
            children: <Component01 param1={param1} param2={param2} />, // MAGIC
            result: {
              status: 'waiting for user input',
            },
          }
        },
      },
    ],
  })
}
