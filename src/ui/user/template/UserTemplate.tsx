import Footer from '@ui/landingPage/organisms/Footer'
import Navbar from '@ui/landingPage/organisms/Navbar'
import { Outlet } from 'react-router-dom'

const UserTemplate = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserTemplate
