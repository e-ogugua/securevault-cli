import { useState, useEffect } from 'react'
import { Shield, Lock, Key, Eye, EyeOff, Plus, Search, Settings, Moon, Sun, Copy, Edit, Trash2, Download, Upload, Terminal, Database, Fingerprint } from 'lucide-react'
import { motion } from 'framer-motion'

interface VaultEntry {
  id: string
  title: string
  username: string
  password: string
  url?: string
  notes?: string
  category: 'login' | 'secure-note' | 'credit-card' | 'identity'
  strength: 'weak' | 'fair' | 'good' | 'strong'
  lastModified: string
  favorite: boolean
}

interface SecurityMetrics {
  totalEntries: number
  weakPasswords: number
  duplicatePasswords: number
  securityScore: number
}

const mockVaultEntries: VaultEntry[] = [
  {
    id: '1',
    title: 'GitHub',
    username: 'emmachuka@gmail.com',
    password: 'SecurePass123!@#',
    url: 'https://github.com',
    category: 'login',
    strength: 'strong',
    lastModified: '2024-01-15',
    favorite: true,
    notes: 'Primary development account'
  },
  {
    id: '2',
    title: 'AWS Console',
    username: 'admin@company.com',
    password: 'AWSSecure456$%^',
    url: 'https://aws.amazon.com',
    category: 'login',
    strength: 'strong',
    lastModified: '2024-01-14',
    favorite: true,
    notes: 'Production environment access'
  },
  {
    id: '3',
    title: 'Database Credentials',
    username: 'db_admin',
    password: 'dbPass789',
    category: 'secure-note',
    strength: 'fair',
    lastModified: '2024-01-10',
    favorite: false,
    notes: 'MongoDB production cluster'
  },
  {
    id: '4',
    title: 'API Keys',
    username: 'service_account',
    password: 'sk-1234567890abcdef',
    category: 'secure-note',
    strength: 'good',
    lastModified: '2024-01-12',
    favorite: false,
    notes: 'OpenAI API key for production'
  }
]

const mockSecurityMetrics: SecurityMetrics = {
  totalEntries: 47,
  weakPasswords: 3,
  duplicatePasswords: 2,
  securityScore: 87
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showPasswords, setShowPasswords] = useState<{[key: string]: boolean}>({})
  const [isLocked, setIsLocked] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const filteredEntries = mockVaultEntries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.username.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const togglePasswordVisibility = (id: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'weak': return 'text-security-critical bg-security-critical/10'
      case 'fair': return 'text-security-low bg-security-low/10'
      case 'good': return 'text-security-medium bg-security-medium/10'
      case 'strong': return 'text-security-high bg-security-high/10'
      default: return 'text-vault-500 bg-vault-100'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'login': return <Key className="h-4 w-4" />
      case 'secure-note': return <Database className="h-4 w-4" />
      case 'credit-card': return <Shield className="h-4 w-4" />
      case 'identity': return <Fingerprint className="h-4 w-4" />
      default: return <Lock className="h-4 w-4" />
    }
  }

  if (isLocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-vault-50 to-vault-100 dark:from-vault-900 dark:to-vault-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="vault-card p-8 max-w-md w-full text-center"
        >
          <div className="mb-6">
            <div className="w-20 h-20 bg-secure-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-secure-glow">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-vault-900 dark:text-white mb-2">SecureVault CLI</h1>
            <p className="text-vault-600 dark:text-vault-300">Enter your master password to unlock your vault</p>
          </div>
          
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Master Password"
              className="w-full px-4 py-3 rounded-lg secure-input focus:outline-none focus:ring-2"
            />
            <button
              onClick={() => setIsLocked(false)}
              className="w-full bg-secure-500 hover:bg-secure-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Unlock Vault
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-vault-50 to-vault-100 dark:from-vault-900 dark:to-vault-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-vault-800/80 backdrop-blur-sm border-b border-vault-200 dark:border-vault-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secure-500 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-vault-900 dark:text-white">SecureVault CLI</h1>
                <p className="text-xs text-vault-500 dark:text-vault-400">Password & Secrets Manager</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-vault-600 dark:text-vault-300 hover:text-secure-500 transition-colors">
                <Terminal className="h-5 w-5" />
              </button>
              <button className="p-2 text-vault-600 dark:text-vault-300 hover:text-secure-500 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-vault-600 dark:text-vault-300 hover:text-secure-500 transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsLocked(true)}
                className="p-2 text-vault-600 dark:text-vault-300 hover:text-security-critical transition-colors"
              >
                <Lock className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Security Overview */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Security Score */}
              <div className="vault-card p-6">
                <h3 className="text-lg font-semibold text-vault-900 dark:text-white mb-4">Security Score</h3>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-vault-200 dark:text-vault-700"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-security-high"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray={`${mockSecurityMetrics.securityScore}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-vault-900 dark:text-white">{mockSecurityMetrics.securityScore}</span>
                    </div>
                  </div>
                  <p className="text-sm text-vault-600 dark:text-vault-300">Excellent Security</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="vault-card p-6">
                <h3 className="text-lg font-semibold text-vault-900 dark:text-white mb-4">Vault Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-vault-600 dark:text-vault-300">Total Entries</span>
                    <span className="font-semibold text-vault-900 dark:text-white">{mockSecurityMetrics.totalEntries}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-vault-600 dark:text-vault-300">Weak Passwords</span>
                    <span className="font-semibold text-security-critical">{mockSecurityMetrics.weakPasswords}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-vault-600 dark:text-vault-300">Duplicates</span>
                    <span className="font-semibold text-security-medium">{mockSecurityMetrics.duplicatePasswords}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="vault-card p-6">
                <h3 className="text-lg font-semibold text-vault-900 dark:text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-secure-50 dark:bg-secure-900/20 text-secure-700 dark:text-secure-300 hover:bg-secure-100 dark:hover:bg-secure-900/30 transition-colors">
                    <Plus className="h-4 w-4" />
                    <span className="text-sm font-medium">Add Entry</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-vault-50 dark:bg-vault-700 text-vault-700 dark:text-vault-300 hover:bg-vault-100 dark:hover:bg-vault-600 transition-colors">
                    <Download className="h-4 w-4" />
                    <span className="text-sm font-medium">Export Vault</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-vault-50 dark:bg-vault-700 text-vault-700 dark:text-vault-300 hover:bg-vault-100 dark:hover:bg-vault-600 transition-colors">
                    <Upload className="h-4 w-4" />
                    <span className="text-sm font-medium">Import Data</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="vault-card p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-vault-400" />
                    <input
                      type="text"
                      placeholder="Search vault entries..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg secure-input focus:outline-none focus:ring-2"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 rounded-lg secure-input focus:outline-none focus:ring-2"
                  >
                    <option value="all">All Categories</option>
                    <option value="login">Logins</option>
                    <option value="secure-note">Secure Notes</option>
                    <option value="credit-card">Credit Cards</option>
                    <option value="identity">Identities</option>
                  </select>
                </div>
              </div>

              {/* Vault Entries */}
              <div className="space-y-4">
                {filteredEntries.map((entry) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="vault-card p-6 hover:shadow-secure transition-all duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="p-3 rounded-lg bg-secure-50 dark:bg-secure-900/20 text-secure-600 dark:text-secure-400">
                          {getCategoryIcon(entry.category)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-vault-900 dark:text-white truncate">
                              {entry.title}
                            </h3>
                            <span className={`security-badge ${getStrengthColor(entry.strength)}`}>
                              {entry.strength}
                            </span>
                            {entry.favorite && (
                              <div className="w-2 h-2 bg-security-medium rounded-full" />
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-vault-500 dark:text-vault-400 w-20">Username:</span>
                              <span className="text-sm font-mono text-vault-700 dark:text-vault-300">{entry.username}</span>
                              <button className="p-1 text-vault-400 hover:text-secure-500 transition-colors">
                                <Copy className="h-3 w-3" />
                              </button>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-vault-500 dark:text-vault-400 w-20">Password:</span>
                              <span className="text-sm font-mono text-vault-700 dark:text-vault-300">
                                {showPasswords[entry.id] ? entry.password : '••••••••••••'}
                              </span>
                              <button
                                onClick={() => togglePasswordVisibility(entry.id)}
                                className="p-1 text-vault-400 hover:text-secure-500 transition-colors"
                              >
                                {showPasswords[entry.id] ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                              </button>
                              <button className="p-1 text-vault-400 hover:text-secure-500 transition-colors">
                                <Copy className="h-3 w-3" />
                              </button>
                            </div>
                            
                            {entry.url && (
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-vault-500 dark:text-vault-400 w-20">URL:</span>
                                <a
                                  href={entry.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-secure-600 dark:text-secure-400 hover:underline truncate"
                                >
                                  {entry.url}
                                </a>
                              </div>
                            )}
                            
                            {entry.notes && (
                              <div className="flex items-start space-x-2">
                                <span className="text-sm text-vault-500 dark:text-vault-400 w-20">Notes:</span>
                                <span className="text-sm text-vault-600 dark:text-vault-400">{entry.notes}</span>
                              </div>
                            )}
                            
                            <div className="flex items-center space-x-2 pt-2">
                              <span className="text-xs text-vault-400">Last modified: {entry.lastModified}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <button className="p-2 text-vault-400 hover:text-secure-500 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-vault-400 hover:text-security-critical transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
