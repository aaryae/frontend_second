import Navbar from '@ui/landingPage/organisms/Navbar'
import Footer from '@ui/user/organisms/Footer'
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
