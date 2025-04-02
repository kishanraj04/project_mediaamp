import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/configure.js'


const routes = createBrowserRouter([{ 
  path:'/',
  element:<App/>
}])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>
)
