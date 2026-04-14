import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BookOpen, Moon, Sun } from 'lucide-react'

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved === 'true' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center flex-wrap gap-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">EngAI Quiz</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Trắc nghiệm tiếng Anh cùng AI</p>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <NavLink to="/quiz" className={({ isActive }) => 
              `font-medium ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600'}`
            }>Trắc nghiệm</NavLink>
            
            <NavLink to="/ai-explain" className={({ isActive }) => 
              `font-medium ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600'}`
            }>AI Giải thích</NavLink>
            
            <NavLink to="/about-us" className={({ isActive }) => 
              `font-medium ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600'}`
            }>Giới thiệu</NavLink>
            
            <button 
              onClick={toggleDarkMode}
              className="p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-2xl">
              <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">NL</div>
              <span className="font-medium text-sm hidden sm:block">Nguyễn Lê</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-2">EngAI Quiz</h2>
          <p className="mb-2">Ôn tập trắc nghiệm tiếng Anh tích hợp trí tuệ nhân tạo</p>
          <p className="text-sm">Đồ án cuối kỳ • Nguyễn Lê • 2026</p>
        </div>
      </footer>
    </div>
  )
}