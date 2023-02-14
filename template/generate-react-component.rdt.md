# Generate React Component

Generate a React component using instructions.

## Template

### Configuration

````json conversation-template
{
  "id": "rubberduck-react.generate-react-component",
  "engineVersion": 0,
  "label": "Generate React Component",
  "description": "Generate React component using instructions.",
  "header": {
    "title": "Generate React Component",
    "icon": {
      "type": "codicon",
      "value": "wand"
    }
  },
  "chatInterface": "instruction-refinement",
  "variables": [],
  "response": {
    "placeholder": "Generating React component",
    "maxTokens": 2048,
    "stop": ["```"],
    "completionHandler": {
      "type": "update-temporary-editor",
      "botMessage": "Generated React component."
    }
  }
}
````

### Response Prompt

```template-response
## Instructions
Generate a React component for the following specification.
Use React hooks unless told otherwise.
Use TypeScript unless told otherwise.

## React component specification
{{#each messages}}
{{#if (eq author "user")}}
{{content}}
{{/if}}
{{/each}}

## Instructions
Generate a React component for the specification.
Use React hooks unless told otherwise.
Use TypeScript unless told otherwise.

## React component code
\`\`\`

```
