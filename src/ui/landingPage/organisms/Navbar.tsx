import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "ui/commonpage/atoms/Logo";
import Login from "../atoms/Login";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
      setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
      setMenuOpen(prevmenuOpen=>!prevmenuOpen);
  };

  return (
    
    <nav className={`fixed index w-full z-50 text-white duration-300 ${scrolled ? "bg-black text-white shadow-2xl" : "bg-transparent"}`}>
        {menuOpen && (
          <div className={`md:hidden h-screen bg-[#000000f1]  text-white p-4 relative`}>
            <ul className="flex flex-col gap-4 text-center justify-center h-full">
              <li><a href="#">Demos</a></li>
              <li><a href="#">Support</a></li>
            </ul>
            <Login/>
            <div className="absolute top-0 right-0 p-10" onClick={toggleMenu}>
            <X/>
            </div>
          </div>
        )}
        <div className="flex w-full justify-between max-w-7xl mx-auto px-4">
          <Logo />

          <div className="hidden md:flex gap-10 justify-center items-center">
            <ul className="hidden md:flex gap-10 justify-center items-center">

            <li className="tracking-wider font-extrabold"><a href="#">Demos</a></li>
            <li className="tracking-wider"><a href="#">Support</a></li>
            </ul>
            
          <Login/>
          </div>

          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
      
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
