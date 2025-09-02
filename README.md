# 🔐 SecureVault CLI

**Zero-knowledge password manager with advanced security and trust-driven design**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Try%20Now-brightgreen)](https://securevault-cli.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/e-ogugua/securevault-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Live Demo

**🌐 [Try SecureVault CLI](https://securevault-cli.vercel.app)**

*Your master password never leaves your device. All encryption happens client-side.*

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
## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, Lucide Icons
- **Encryption**: Web Crypto API, AES-256-GCM
- **Storage**: IndexedDB with encryption layer
- **Build Tool**: Vite with Hot Module Replacement
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/e-ogugua/securevault-cli.git
   cd securevault-cli
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
securevault-cli/
├── src/
│   ├── components/     # UI components
│   ├── lib/           # Crypto utilities and core logic
│   ├── hooks/         # Custom React hooks
│   ├── types/         # TypeScript definitions
│   ├── stores/        # State management
│   └── App.tsx        # Main application
├── public/            # Static assets
└── package.json       # Dependencies
```

## 🔒 Security Architecture

### Zero-Knowledge Design
- **Client-Side Encryption**: All encryption/decryption happens in your browser
- **Master Password**: Never transmitted or stored on servers
- **Key Derivation**: PBKDF2 with 100,000+ iterations
- **Encryption**: AES-256-GCM with authenticated encryption

### Security Features
- **Password Generator**: Cryptographically secure random passwords
- **Strength Analysis**: Real-time password security scoring
- **Breach Detection**: Check passwords against known breaches (optional)
- **Auto-Lock**: Automatic vault locking after inactivity

## 🎯 Key Features

### Vault Management
- **Multiple Entry Types**: Passwords, secure notes, credit cards, identities
- **Advanced Search**: Find entries quickly with fuzzy search
- **Categories & Tags**: Organize entries with custom categories
- **Bulk Operations**: Import/export and batch editing

### Security Dashboard
- **Security Score**: Overall vault security assessment
- **Weak Passwords**: Identify and update vulnerable passwords
- **Duplicate Detection**: Find and consolidate duplicate entries
- **Breach Monitoring**: Optional breach detection service

### User Experience
- **Dark/Light Mode**: Automatic theme switching with system preference
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Keyboard Shortcuts**: Power user shortcuts for common actions
- **Offline Support**: Full functionality without internet connection

## 🔐 Privacy & Trust

- **No Telemetry**: Zero data collection or tracking
- **Open Source**: Full transparency with public code
- **Local Storage**: All data stays on your device
- **No Registration**: Use immediately without accounts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Emmanuel Ogugua**
- Portfolio: [emmanuel.dev](https://securevault-cli.vercel.app)
- GitHub: [@e-ogugua](https://github.com/e-ogugua)
- LinkedIn: [Emmanuel Ogugua](https://linkedin.com/in/emmanuelogugua)
- Twitter: [@emmachuka](https://www.x.com/emmachuka)

## ⚠️ Security Notice

While SecureVault CLI implements industry-standard security practices, no software is 100% secure. Always:
- Use a strong, unique master password
- Keep your browser updated
- Regularly backup your vault
- Review security settings periodically
