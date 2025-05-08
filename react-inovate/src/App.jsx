import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Banner from './components/Navbar/Banner/banner'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
    </>
  )
}

export default App
