import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import SignupPage from './Components/SignupPage'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import AllRoutes from './Components/Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllRoutes/>
    </>
  )
}

export default App
