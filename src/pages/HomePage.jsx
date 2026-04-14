import { Play, Brain, BookOpen, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
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
          <Link to="/quiz" className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-10 rounded-3xl transition transform hover:scale-105">
            <Play className="w-6 h-6" />
            Bắt đầu ôn tập ngay
          </Link>
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
    </>
  )
}