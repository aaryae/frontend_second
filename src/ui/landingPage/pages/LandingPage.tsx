import Navbar from '@ui/landingPage/organisms/Navbar'
import UserCard from '@ui/user/organisms/AboutUs'
import Footer from '@ui/user/organisms/Footer'
import Hero from '@ui/user/organisms/Hero'

const Userpage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UserCard />
      <Footer />
    </>
  )
}

export default Userpage
