import Hero from '@ui/user/organisms/Hero'
import Login from '@ui/user/pages/Login'
import UserTemplate from '@ui/user/template/UserTemplate'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<UserTemplate/>}>
        <Route path='/' element={<Hero/>}/>
        <Route path='/login' element={<Login/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
