"use client"

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State for overall navbar visibility

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY); // Track previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos; // Check for scrolling down

      // Improved logic for smooth visibility changes:
      const threshold = 30; // Adjust based on desired sensitivity (lower for quicker hide/show)
      const scrollChange = Math.abs(currentScrollPos - prevScrollPos);

      // Hide if scrolling down and scroll change exceeds threshold:
      if (isScrollingDown && scrollChange >= threshold) {
        setIsNavbarVisible(false);
      }

      // Show if scrolling up or near the top (within threshold):
      if (!isScrollingDown || currentScrollPos < threshold) {
        setIsNavbarVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]); // Only re-run effect if prevScrollPos changes

  return (
    <div>
      <nav
        className={`fixed w-full top-0 left-0 right-0 z-50 bg-white transition duration-300 ease-in-out ${
          !isNavbarVisible ? 'opacity-0' : 'opacity-100'
        }`} // Conditional opacity for visibility
      >
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <div>
              <Link to="Home" smooth={true} className='cursor-pointer'>
                <Image src="/APG-LOGO.png" width={70} height={40} alt="Logo" />
              </Link>
              <h4 className='text-black text-xs hover:text-blue-900 ml-6 font-bold '>AGP</h4>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}

              <div className="md:hidden">
                
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose size={30} color="#333" />
                  ) : (
                    <AiOutlineMenu size={30} color="#333" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex py-5 px-5">
                <li className="pb-6 text-lg text-gray-600 py-2 px-6 text-center border-b-2 md:border-b-0 relative group hover:text-blue-800">
                  <Link to="Home" smooth={true} duration={500} offset={-70} onClick={() => setNavbar(!navbar)} className=' cursor-pointer font-semibold'>
                    Home
                  </Link>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 w-16 transition-all opacity-0 group-hover:opacity-100 hover:bg-blue-900 duration-300"></span>
                </li>
                <li className="pb-6 text-lg text-gray-600 py-2 px-6 text-center border-b-2 md:border-b-0 relative group hover:text-blue-800">
                  <Link to="About" smooth={true} duration={500} offset={-70} onClick={() => setNavbar(!navbar)} className=' cursor-pointer font-semibold'>
                    About Us
                  </Link>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 w-16 transition-all opacity-0 group-hover:opacity-100 duration-300"></span>
                </li>
                <li className="pb-6 text-lg text-gray-600 py-2 px-6 text-center border-b-2 md:border-b-0  duration-300 relative group hover:text-blue-800">
                  <Link to="Services" smooth={true} duration={500} offset={-70}  onClick={() => setNavbar(!navbar)} className=' cursor-pointer font-semibold'>
                    Services
                  </Link>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 w-16 transition-all opacity-0 group-hover:opacity-100 duration-300"></span>
                </li>
                <li className="pb-6 text-lg text-gray-600 py-2 px-6 text-center border-b-2 md:border-b-0 relative group hover:text-blue-800 ">
                  <Link to="Projects" smooth={true} duration={500} offset={-90}  onClick={() => setNavbar(!navbar)} className=' cursor-pointer font-semibold'>
                    Projects
                  </Link>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 w-16 transition-all opacity-0 group-hover:opacity-100 duration-300"></span>
                </li>
                <li className="pb-6 text-lg text-gray-600 py-2 px-6 text-center border-b-2 md:border-b-0 relative group hover:text-blue-800 ">
                  <Link to="Contact" smooth={true} duration={500}  offset={-70}  onClick={() => setNavbar(!navbar)} className=' cursor-pointer font-semibold'>
                    Contact
                  </Link>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 w-16 transition-all opacity-0 group-hover:opacity-100 duration-300"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
