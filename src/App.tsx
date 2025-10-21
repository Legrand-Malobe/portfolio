import './App.scss'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './views/landingpage/LandingPage'

function App() {

  return (
    <section>
      <div className="container">
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </div>
    </section>
  )
}

export default App
