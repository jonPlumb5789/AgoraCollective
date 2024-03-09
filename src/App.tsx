import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar/NavBar'
import SignIn from './components/SignIn/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
      <div>
<SignIn />
      </div>

    </>
  )
}

export default App
