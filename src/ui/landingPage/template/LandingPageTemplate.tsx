import { Outlet } from 'react-router-dom'
import Footer from '../organisms/Footer'
import Navbar from '../organisms/Navbar'

const LandingPageTemplate = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default LandingPageTemplate
