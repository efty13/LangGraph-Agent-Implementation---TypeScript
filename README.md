# LangGraph TypeScript Greeting Agent

A simple LangGraph agent implementation that accepts a user's name and returns a greeting message. This agent does not use any LLM - it's a pure state transformation example.

## Overview

This project implements a single-node LangGraph agent with the following structure:
- **START** → `greeting_node` → **END**
- Accepts a `name` string as input state
- Returns a `greeting` string containing the input name

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.25.0 or compatible)

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Build the project:
```bash
pnpm run build
```

## Running

Run the agent:
```bash
pnpm start
```

Or run directly with ts-node:
```bash
pnpm start
```

## Project Structure

```
langgraph-ts-greeting/
├── src/
│   ├── index.ts          # Main agent implementation
│   └── index.test.ts     # Unit tests
├── dist/                 # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
├── vitest.config.ts      # Test configuration
├── .gitignore
├── README.md
└── dev-history.md        # Development process documentation
```

## How It Works

1. **State Schema**: Defines `name` (input) and `greeting` (output) fields
2. **Greeting Node**: Takes the name from state and generates a greeting message
3. **Graph Structure**: Simple linear flow from START through greeting node to END

## Example Usage

The agent can be invoked with a state object:
```typescript
const result = await app.invoke({ name: "Alice", greeting: "" });
// Returns: { name: "Alice", greeting: "Hello, Alice! Welcome!" }
```

## Testing

Run tests:
```bash
pnpm test
```

## License

ISC

