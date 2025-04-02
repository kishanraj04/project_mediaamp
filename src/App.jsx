import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/HomeComponent/Header.jsx'
import SideBar from './components/HomeComponent/SideBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header/>
       <SideBar/>
    </>
  )
}

export default App
