"use client";

import Home from '@/app/Sections/Home'
import About from '@/app/Sections/About'
import Services from '@/app/Sections/Services'
import Values from '@/app/Sections/Values'
import Portfolio from '@/app/Sections/Portfolio'
import Footer from '@/app/Sections/Footer'
import Achievements from '@/app/Sections/Achievements'
import Team from '@/app/Sections/Team'
import Navbar from './UI/Components/Navbar'
import React, { useState, useEffect } from 'react';
import SplashScreen from './UI/Components/SplashScreen'




export default function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);



  return (
  <main className="flex min-h-screen flex-col items-center justify-between lg:px-16 px-4 bg-white">
    {loading ? (
      <SplashScreen />
    ) : (
      <>
        <Navbar/>
        <Home/>
        <About/>
        <Team/>
        <Services/>
        <Values/>
        <Achievements/>
        <Portfolio/>
        <Footer/>
      </>
    )}
  </main>
)

}
