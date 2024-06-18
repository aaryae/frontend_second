import { Outlet } from "react-router-dom"
import Navbar from "ui/landingPage/organisms/Navbar"
import Footer from "../organisms/Footer"

const UserTemplate = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserTemplate