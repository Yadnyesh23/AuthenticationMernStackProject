import { Routes , Route  } from 'react-router-dom'
import './App.css'
import toast, { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import RegisterUser from './pages/Register'
import LoginUser from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterUser/>}/>
      <Route path='/login' element={<LoginUser/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
