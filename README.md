# Angular patterns.

This is meant to be a knowlege base for the patterns that keep popping up in Angular projects.

## How to use this repo:

The project wiki documents the patterns and the problems they address, linking to the code with examples. Running the project with `npm run start` will show a menu with the implemented examples for the patterns.

## New Angular project configuration:

### Angular CLI:

Set your default flags for the CLI early, this will save you a lot of time.

```json
  "@schematics/angular:component": {
    "inlineTemplate": false,
    "changeDetection": "OnPush",
    "style": "none",
    "skipTests": true // don't skip tests.
  }
  // if you use a shared module, set it's path
  "@schematics/angular:service": {
    "path": "shared/services"
  },
  "@schematics/angular:pipe": {
    "path": "shared/pipes",
    "module": "pipes",
    "export": true
  }
```

### ESLint:

```
ng add @angular-eslint/schematics
```

in the `settings.json` file:

```json
  "eslint.options": {
    "extensions": [".ts", ".html"]
  },

  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "html"]
```

### Prettier:

Format on save pretty much does not work on html unless you do a full file formatting on save. which is a git nightmare.

**Setup**:

```
npm install -D prettier prettier-plugin-tailwindcss
```

Basic config:
in .vscode/settings.json

```json
{
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSaveMode": "file"
  }
}
```

in .prettierrc.json, pretty much default settings with the pluggin and a larger print width., bracketSameLine false is better for vim users.

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "semi": true,
  "experimentalTernaries": false,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "quoteProps": "as-needed",
  "trailingComma": "all",
  "singleAttributePerLine": false,
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": false,
  "proseWrap": "preserve",
  "insertPragma": false,
  "printWidth": 120,
  "requirePragma": false,
  "tabWidth": 2,
  "useTabs": false,
  "embeddedLanguageFormatting": "auto"
}
```

in tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
```

## Tailwind:

Just turn on prettier and typography, should be enough.

## UI libraries:

- Angular Material: `ng add @angular/material`
- Daisy UI `npm i -D daisyui@latest`

in tailwind.config.js

```json
  plugins: [
    require('daisyui'),
  ]
```

The material CDK is very powerful and enriches Daisy Ui with a lot of functionality if you need it
you don't need anything else for most projects.
