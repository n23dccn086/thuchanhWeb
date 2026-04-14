import { Sparkles, MessageSquare, Zap } from 'lucide-react'

export default function AIExplainPage() {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full text-indigo-700 dark:text-indigo-300 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Tính năng thông minh</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI Giải thích <span className="text-indigo-600">chi tiết</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Khi bạn trả lời sai hoặc cần hiểu rõ hơn về câu hỏi, AI sẽ giải thích cặn kẽ bằng tiếng Việt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <MessageSquare className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Giải thích ngữ pháp</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI phân tích cấu trúc câu, chỉ ra lỗi sai và cung cấp quy tắc ngữ pháp dễ hiểu.
            </p>
          </div>
          <div className="card">
            <Zap className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Gợi ý học tập</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dựa trên kết quả làm bài, AI đề xuất chủ đề cần ôn luyện thêm và tài liệu tham khảo.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-4">Ví dụ minh hoạ</h3>
          <div className="italic text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <p className="mb-2"><strong>Câu hỏi:</strong> "She ___ to school every day."</p>
            <p className="mb-2"><strong>Lựa chọn sai của bạn:</strong> go</p>
            <p><strong>🤖 AI giải thích:</strong> "Chủ ngữ 'She' là ngôi thứ ba số ít, động từ 'go' cần thêm 'es' thành 'goes' ở thì hiện tại đơn. Đáp án đúng là 'goes'."</p>
          </div>
        </div>
      </div>
    </div>
  )
}