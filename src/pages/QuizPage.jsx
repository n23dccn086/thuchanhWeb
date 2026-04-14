import { useState } from 'react'

const sampleQuestion = {
  id: 1,
  text: "Chọn câu đúng:",
  options: [
    "A. She go to school yesterday.",
    "B. She went to school yesterday.",
    "C. She going to school yesterday.",
    "D. She goes to school yesterday."
  ],
  correct: 1,
  explanation: "Câu này diễn tả hành động đã xảy ra trong quá khứ (yesterday) nên động từ chia ở thì quá khứ đơn: 'went'. Đáp án đúng là B."
}

export default function QuizPage() {
  const [selected, setSelected] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleSelect = (index) => {
    setSelected(index)
    setShowExplanation(false)
  }

  const handleCheck = () => {
    if (selected === null) {
      alert("Vui lòng chọn một đáp án trước.")
      return
    }
    setShowExplanation(true)
  }

  const isCorrect = selected === sampleQuestion.correct

  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          📝 Luyện tập trắc nghiệm
        </h1>

        <div className="card">
          <p className="text-lg font-medium mb-8">{sampleQuestion.text}</p>
          <div className="space-y-4">
            {sampleQuestion.options.map((opt, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-5 border-2 rounded-2xl cursor-pointer transition ${
                  selected === idx
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-indigo-500'
                }`}
              >
                {opt}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={handleCheck}
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-3xl font-medium transition"
            >
              Xem giải thích từ AI →
            </button>
          </div>

          {showExplanation && (
            <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl border-l-4 border-indigo-500">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                🤖 Giải thích từ AI
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{sampleQuestion.explanation}</p>
              <p className={`font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? '✅ Chính xác! Bạn đã trả lời đúng.' : '❌ Chưa đúng. Hãy xem giải thích và thử câu khác.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}