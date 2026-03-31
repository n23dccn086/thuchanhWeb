import { useState } from 'react';
import { BookOpen, Brain, Trophy, Moon, Sun, Play } from 'lucide-react';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-950 ${darkMode ? 'dark' : ''}`}>
      
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">EngAI Quiz</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Trắc nghiệm tiếng Anh cùng AI</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600">Trắc nghiệm</a>
            <a href="#" className="font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600">AI Giải thích</a>
            
            <button 
              onClick={toggleDarkMode}
              className="p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Ôn trắc nghiệm tiếng Anh<br />
            <span className="text-yellow-300">thông minh với AI</span>
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
            Hàng ngàn câu hỏi chất lượng • Giải thích ngay từ AI • Theo dõi tiến độ dễ dàng
          </p>
          <button className="btn-primary flex items-center gap-3 mx-auto">
            <Play className="w-6 h-6" />
            Bắt đầu ôn tập ngay
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Tính năng nổi bật
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Brain className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h4 className="text-2xl font-semibold mb-3">Trắc nghiệm AI</h4>
              <p className="text-gray-600 dark:text-gray-400">
                AI tự động tạo câu hỏi theo chủ đề bạn muốn học
              </p>
            </div>

            <div className="card text-center">
              <BookOpen className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h4 className="text-2xl font-semibold mb-3">Giải thích chi tiết</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Sai đáp án? AI sẽ giải thích ngữ pháp bằng tiếng Việt dễ hiểu
              </p>
            </div>

            <div className="card text-center">
              <Trophy className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h4 className="text-2xl font-semibold mb-3">Theo dõi tiến độ</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Xem điểm số, chuỗi ngày học và thống kê chi tiết
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Question */}
      <section className="py-20 bg-gray-100 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Thử một câu hỏi mẫu
          </h3>
          
          <div className="card">
            <p className="text-lg font-medium mb-8">
              1. Choose the correct sentence:
            </p>
            <div className="space-y-4">
              <div className="p-5 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-indigo-500 cursor-pointer transition">
                A. She go to school yesterday.
              </div>
              <div className="p-5 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-indigo-500 cursor-pointer transition">
                B. She went to school yesterday.
              </div>
              <div className="p-5 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-indigo-500 cursor-pointer transition">
                C. She going to school yesterday.
              </div>
              <div className="p-5 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-indigo-500 cursor-pointer transition">
                D. She goes to school yesterday.
              </div>
            </div>

            <div className="mt-10 text-center">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-3xl font-medium">
                Xem giải thích từ AI →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-white mb-2">EngAI Quiz</h1>
          <p className="mb-2">Ôn tập trắc nghiệm tiếng Anh tích hợp trí tuệ nhân tạo</p>
          <p className="text-sm">Đồ án cuối kỳ • Nguyễn Lê • 2026</p>
        </div>
      </footer>
    </div>
  );
}