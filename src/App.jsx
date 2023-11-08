import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'
import CreateProfile from './pages/createProfile/CreateProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}
      <CreateProfile/>
        
    </>
  )
}

export default App
