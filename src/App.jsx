import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/HomeComponent/Header.jsx'
import SideBar from './components/HomeComponent/SideBar.jsx'
import { apiCalling } from './api/apiCalling.js'
import { useDispatch } from 'react-redux'
import { setAllGames, setTotalGames } from './store/gameData.js'
import { Outlet } from 'react-router'
import '../src/components/style/app.css'
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from './context/AppContext.jsx'
function App() {
  const [count, setCount] = useState(0)
  const {authToken} = useContext(AppContext)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(authToken)
      {
        toast.success("login success")
      }
  },[])
  
  useEffect(()=>{
    
    (async()=>{
      const options = {
        method: "GET",
        url: "https://api.rawg.io/api/games?key=6d633194af394581991e28eb88ce8c1d",
      };

      const resp = await apiCalling(options)
      console.log(resp);
      dispatch(setTotalGames({totalGames:resp?.data?.count}))
      dispatch(setAllGames({data:resp?.data?.results}))
    })()
  },[])

  return (
    <> <ToastContainer />
       <Header/>
       
       <div className='home-div'>
       <SideBar/>
       <Outlet/>
       </div>
    </>
  )
}

export default App
