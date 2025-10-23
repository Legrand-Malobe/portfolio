import './App.scss'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './views/LandingPage'

function App() {

  return (
    <section className='main-container'>
      <div className="main-content">
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </div>
    </section>
  )
}

export default App
