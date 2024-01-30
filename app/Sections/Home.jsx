"use client";

import Navbar from "../UI/Components/Navbar";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-scroll';


export default function Home() {
    return (
        <section id="Home">
            <div className="relative mx-auto rounded-lg">
                <div className="relative w-full">
                    <Image
                        src="/home3.jpg"
                        alt="Description of the image"
                        width={1980}
                        height={1080}
                        className="rounded-lg  lg:h-[900px] lg:w-[1600px] mt-28 lg:mt-0"

                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div className="absolute lg:left-[25%] left-[35%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center text-3xl">
                    <div className="text-left">
                        <div className="">
                            <h3 className="text-white lg:text-xl mb-2 font-semibold text-xs">Expert Project Management</h3>
                        </div>

                        <div className=" items-center">
                            <h1 className="lg:text-7xl mb-4 font-bold text-lg">DREAM, PLAN</h1>
                            <h1 className="lg:text-7xl font-bold text-lg">AND BUILD</h1>
                        </div>
                        <Link to="About" smooth={true}>
                        <button className="bg-blue-950 text-white lg:px-16 lg:py-4 px-1 py-1 font-semibold cursor-pointer lg:text-lg lg:mt-20  hover:bg-blue-800 duration-300 text-xs rounded-md">Learn More</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 text-white flex bg-blue-950 lg:py-6 lg:px-12 lg:space-x-6 space-x-2 px-2 py-1 rounded-md ">
                    <div className="flex items-center lg:px-2">
                        <div className="bg-white bg-opacity-20 rounded-full lg:p-2 lg:mr-2 lg:text-md p-1 ">
                            <FaPhone className="text-white text-sm lg:text-xl" />
                        </div>
                        <p className="lg:text-lg font-bold text-white px-2 text-xs">(+20) 1123726666</p>
                    </div>
                    <div className="flex items-center lg:px-2">
                        <div className="bg-white bg-opacity-20 rounded-full lg:p-2 lg:mr-2 lg:text-md p-1 mr-1  ">
                            <MdLocationOn className="text-white text-sm lg:text-xl" />
                        </div>
                        <p className="lg:text-lg font-bold text-white text-xs ">Kuwait - Egypt</p>
                    </div>
                </div>

            </div>
        </section>

    );
}
