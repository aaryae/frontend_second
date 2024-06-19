import Hero from '@ui/landingPage/organisms/Hero'
import LandingPageTemplate from '@ui/landingPage/template/LandingPageTemplate'
import Login from '@ui/user/pages/Login'
import Register from '@ui/user/pages/Register'
import Support from '@ui/user/pages/Support'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
function App() {

    const router = createBrowserRouter([{
      path:'/',
      element:<LandingPageTemplate/>,
      children:[
        {index:true, element:<Hero/>},
        {path:'/support', element:<Support/>},
        {path:'/login', element:<Login/>},
        {path:'/register', element:<Register/>}
      ]

  

    }])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
