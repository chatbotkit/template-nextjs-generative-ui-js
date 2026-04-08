# Generative UI Template for Next.js / ChatBotKit / JS

A template to help you quickly start your next Generative UI project using Next.js, ChatBotKit, and JavaScript.

> **Note:** This template is deliberately bare-bones. It provides the minimal structure and wiring needed to get a working app, intentionally leaving styling, layout, and architectural choices open so you can build on top without fighting existing opinions.

## Why ChatBotKit?

Building an AI application with dynamic UI typically means sourcing models, a conversation layer, background processing, storage, a tested abilities catalogue, authentication, security, monitoring, and more from separate systems. The cost adds up fast - not just in money, but in engineering time.

ChatBotKit brings all of this into one platform. This template gets you started with a generative UI app that connects to a single API for conversation handling and agent capabilities.

## Technology Stack

- **ChatBotKit SDK**: For building the chatbot logic and handling conversation flow.
- **React**: For UI components that interact with the user, such as forms for capturing appointment details and slot selection.
- **Next.js**: The application environment.

## Setup

### Automated Setup

```bash
npx create-cbk-app
```

Follow the prompts and configure environment variables (see below).

### Manual Setup

```bash
# Clone the repository
git clone <repo-url>
cd template-nextjs-generative-ui-js

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your values (see Environment Variables below)

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to get started.

## Environment Variables

| Variable                | Required | Description                                                                      |
| ----------------------- | -------- | -------------------------------------------------------------------------------- |
| `CHATBOTKIT_API_SECRET` | Yes      | ChatBotKit API token from [chatbotkit.com/tokens](https://chatbotkit.com/tokens) |
| `CHATBOTKIT_MODEL`      | No       | Model to use for conversation (default: `gpt-5.4-mini`)                          |

### Setting Up ChatBotKit

1. Sign up or log in at [chatbotkit.com](https://chatbotkit.com)
2. Go to [chatbotkit.com/tokens](https://chatbotkit.com/tokens) and create an API token
3. Copy the API token to `CHATBOTKIT_API_SECRET` in your `.env` file

No pre-configured bot is needed. The agent backstory and functions are defined inline in `actions/conversation.jsx`. Customize the backstory and add your own generative UI function components in `components/functions/`.

## Project Structure

```
├── actions/
│   └── conversation.jsx      # Server action with streaming + function definitions
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout
│   └── page.js               # Home page with chat UI
├── components/
│   ├── ChatArea.jsx          # Main chat area component
│   └── functions/            # Generative UI function components
│       ├── index.js          # Function component registry
│       └── Component01.jsx   # Example function component
└── package.json
```

## Learn More

- [ChatBotKit Documentation](https://chatbotkit.com/docs)
- [ChatBotKit SDK](https://github.com/chatbotkit/node-sdk)
- [Next.js Documentation](https://nextjs.org/docs)

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com).

## License

MIT - see [LICENSE](./LICENSE)
