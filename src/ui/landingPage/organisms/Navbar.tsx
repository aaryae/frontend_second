import { navbar } from '@data/localization/landingPage/navbar';
import Logo from '@ui/commonPage/atoms/Logo';
import Flags from '@ui/commonPage/organisms/Flags';
import LoginButton from '@ui/user/atoms/LoginButton';
import RegisterButton from '@ui/user/atoms/RegisterButton';
import useLang from 'hooks/useLang';
import usetoggle from 'hooks/useToggle';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, toggleMenuOpen] = usetoggle(false);
  const {lang}=useLang()

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed index w-full z-50 text-black duration-300 ${
          scrolled ? 'bg-[black] text-white shadow-2xl' : 'bg-transparent'
        }`}
      >
        {menuOpen && (
          <div className={`md:hidden h-screen bg-[#000000f1] text-white p-4 relative`}>
            <ul className='flex flex-col gap-4 text-center justify-center h-full'>
              <li>
                <Link to='/'>{navbar.home[lang]}</Link>
              </li>
              <li>
                <a href='support'>{navbar.support[lang]}</a>
              </li>
            </ul>
            <div className='mt-4'>
              <LoginButton />
            </div>
            <div className='absolute top-0 right-0 p-10' onClick={toggleMenuOpen}>
              <X />
            </div>
          </div>
        )}
        <div className={`flex w-full justify-between max-w-7xl mx-auto px-4 ${scrolled ? 'text-white' : 'text-black'}`}>
          <Logo color={`${scrolled ? 'text-white' : 'text-black'}`} />

          <div className='hidden md:flex gap-10 justify-center items-center'>
            <ul className='hidden md:flex gap-10 justify-center items-center'>
              <li className='tracking-wider font-extrabold'>
                <Link to='/'>{navbar.home[lang]}</Link>
              </li>
              <li className='tracking-wider'>
                <Link to='/support'>{navbar.support[lang]}</Link>
              </li>
            </ul>
            <div className='flex gap-1 '>
              <LoginButton />
              /
              <RegisterButton />
            </div>
            <Flags />
          </div>

          <div className='flex md:hidden items-center'>
            <button onClick={toggleMenuOpen} className='focus:outline-none'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
