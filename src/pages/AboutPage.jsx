import { Users, Lightbulb, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Về <span className="text-indigo-600">EngAI Quiz</span>
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16">
          Nền tảng ôn trắc nghiệm tiếng Anh với sự hỗ trợ của trí tuệ nhân tạo, giúp bạn học hiệu quả hơn mỗi ngày.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sứ mệnh</h3>
            <p className="text-gray-600 dark:text-gray-400">Giúp người học tiếng Anh tiếp cận phương pháp luyện tập thông minh, cá nhân hóa và miễn phí.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Công nghệ AI</h3>
            <p className="text-gray-600 dark:text-gray-400">Sử dụng mô hình ngôn ngữ lớn để giải thích câu hỏi, gợi ý và sinh đề thi phù hợp trình độ.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Đội ngũ</h3>
            <p className="text-gray-600 dark:text-gray-400">Được phát triển bởi nhóm sinh viên đam mê công nghệ và giáo dục.</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Đồ án cuối kỳ</h2>
          <p className="text-gray-600 dark:text-gray-300">Môn học: Phát triển ứng dụng Web hiện đại</p>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">Phiên bản 1.0 — 2026</p>
        </div>
      </div>
    </div>
  )
}