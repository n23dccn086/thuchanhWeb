import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import QuizPage from './pages/QuizPage'
import AIExplainPage from './pages/AIExplainPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/ai-explain" element={<AIExplainPage />} />
      </Routes>
    </Layout>
  )
}

export default App