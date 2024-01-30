import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-blue-950 w-full bg-gray-50 rounded-lg" id='Contact'>
      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4">



        {/* Contact Section */}
        <div className="flex flex-col space-y-3 lg:m-auto lg:order-1 order-2 lg:space-x-2 ml-4 lg:ml-0 ">
          <h2 className='font-semibold md:text-3xl text-left text-2xl lg:ml-2 '>Contact Us</h2>
          <a href="mailto:mostafa_ahmed7151@yahoo.com" className="flex items-center  hover:text-blue-800 duration-300 ">
            <AiOutlineMail className="w-12 h-12" />
            <span className="text-sm md:text-lg ml-2">mostafa_ahmed7151@yahoo.com</span>
          </a>
          <a href="tel:+201123726666" className="flex items-center space-x-2 hover:text-blue-800 duration-300">
            <AiOutlinePhone className="w-12 h-12" />
            <span className="text-md md:text-lg">+201123726666</span>
          </a>
          <a href="https://wa.me/+201123726666" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-800 duration-300">
            <FaWhatsapp className="w-12 h-12" />
            <span className="text-md md:text-lg">Send us a message on WhatsApp</span>
          </a>
        </div>

        {/* Logo and Company Name */}
        <div className="flex flex-col items-center justify-center lg:order-2 order-1 lg:m-auto">
          <h2 className="text-3xl text-center font-bold py-5 lg:mt-5 lg:py-1 ">AGP</h2>
          <img src="/APG-LOGO.png" alt="Logo" className="w-36 h-36 lg:mt-16" />
        </div>

        {/* Map and Location Text */}
        <div className="lg:order-3 order-3 h-auto w-full lg:m-auto lg:p-6 p-3 lg:ml-20 lg:mt-10">
        <h2 className='font-semibold md:text-3xl text-cemter text-2xl lg:py-2 '>Our Location</h2>

          <Link href="https://www.google.com/maps/search/30%C2%B000'47.3%22N+31%C2%B030'07.6%22E?sa=X&ved=2ahUKEwic9quZgIKDAxWI_7sIHbxHCdkQ8gF6BAgkEAA" target="_blank" rel="noopener noreferrer" >
            <Image
              src="/location.png"
              width={1980}
              height={1080}
              className=' object-cover h-full w-full hover:opacity-50 duration-500 border-solid border-2 rounded-md border-gray-300 hover:border-blue-900'
            />
          </Link>
        </div>
      </div>

      {/* Rights */}
      <div className="text-center py-8 lg:py-4 lg:m-auto">
        <p className="text-sm sm:text-base md:text-lg">© {year} APG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
