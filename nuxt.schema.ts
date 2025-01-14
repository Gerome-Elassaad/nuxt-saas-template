export default defineNuxtSchema({
  appConfig: {
    ui: {
      primary: {
        title: 'Primary Color',
        description: 'Primary color for the UI components',
        type: 'string',
        default: 'indigo',
        required: ['sky', 'blue', 'indigo', 'violet', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal']
      },
      gray: {
        title: 'Gray Color',
        description: 'Gray color palette for the UI',
        type: 'string',
        default: 'zinc',
        required: ['slate', 'gray', 'zinc', 'neutral', 'stone']
      },
      colors: {
        title: 'Color System',
        description: 'Color configuration for light and dark modes',
        type: 'object',
        properties: {
          primary: {
            type: 'object',
            properties: {
              50: { type: 'string' },
              100: { type: 'string' },
              200: { type: 'string' },
              300: { type: 'string' },
              400: { type: 'string' },
              500: { type: 'string' },
              600: { type: 'string' },
              700: { type: 'string' },
              800: { type: 'string' },
              900: { type: 'string' }
            }
          },
          gray: {
            type: 'object',
            properties: {
              50: { type: 'string' },
              100: { type: 'string' },
              200: { type: 'string' },
              300: { type: 'string' },
              400: { type: 'string' },
              500: { type: 'string' },
              600: { type: 'string' },
              700: { type: 'string' },
              800: { type: 'string' },
              900: { type: 'string' }
            }
          }
        }
      }
    }
  }
})