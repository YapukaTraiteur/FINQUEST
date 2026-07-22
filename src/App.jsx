import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ModuleDetail from './pages/ModuleDetail.jsx'
import Lesson from './pages/Lesson.jsx'
import Results from './pages/Results.jsx'
import Division from './pages/Division.jsx'
import Account from './pages/Account.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module/:moduleId" element={<ModuleDetail />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        <Route path="/results/:lessonId" element={<Results />} />
        <Route path="/division" element={<Division />} />
        <Route path="/compte" element={<Account />} />
      </Routes>
    </div>
  )
}
