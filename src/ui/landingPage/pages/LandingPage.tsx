import Navbar from "ui/landingPage/organisms/Navbar";
import UserCard from "../../user/organisms/AboutUs";
import Footer from "../../user/organisms/Footer";
import Hero from "../../user/organisms/Hero";

const Userpage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UserCard />
      <Footer />
    </>
  );
};

export default Userpage;
