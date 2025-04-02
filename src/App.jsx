import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/HomeComponent/Header.jsx'
import SideBar from './components/HomeComponent/SideBar.jsx'
import { apiCalling } from './api/apiCalling.js'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    (async()=>{
      const options = {
        method: "GET",
        url: "https://api.rawg.io/api/games?key=6d633194af394581991e28eb88ce8c1d",
      };

      const resp = await apiCalling(options)
    })()
  },[])

  return (
    <>
       <Header/>
       <SideBar/>
    </>
  )
}

export default App
