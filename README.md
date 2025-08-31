# SecureVault CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg)](https://vitejs.dev/)

A secure, trust-driven password and secrets manager with both CLI and web dashboard interfaces. Built with modern security practices and a focus on user trust and data protection.

## ✨ Key Features

### 🔐 **Advanced Security**
- AES-256 encryption for all stored data
- Zero-knowledge architecture - your master password never leaves your device
- Secure password generation with customizable complexity
- Password strength analysis and security scoring

### 🛡️ **Trust-Driven Design**
- Minimal, professional UI with muted blues and greys
- Clear security indicators and trust signals
- Transparent security practices and open source code
- No telemetry or data collection

### 📊 **Security Intelligence**
- Real-time security score calculation
- Weak password detection and alerts
- Duplicate password identification
- Password breach monitoring (optional)

### 🌙 **Modern User Experience**
- Beautiful dark/light mode with system preference detection
- Responsive design optimized for desktop and mobile
- Smooth animations and micro-interactions
- Intuitive vault organization and search

### 🔧 **Powerful Management**
- Multiple entry types: logins, secure notes, credit cards, identities
- Advanced search and filtering capabilities
- Bulk operations and data export/import
- Secure sharing and team collaboration (roadmap)
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
