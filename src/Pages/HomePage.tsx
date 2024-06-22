import About from '../Components/About'
import Experience from '../Components/Experience'
import Footer from '../Components/Footer'
import { Hero } from '../Components/Hero'
import { NavComponent } from '../Components/NavComponent'
import Portfolio from '../Components/Portfolio'
import Prices from '../Components/Prices'
import Service from '../Components/Service'
import Social from '../Components/Social'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Testimonial from '../Components/Testimonial'
import Projects from '../Components/Projects'
import Tools from '../Components/Tools'
const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavComponent />
      <Hero />
      <About />
      <Service />
      <Experience />
      <Projects />
      <Tools />
      <Prices />
      <Portfolio />
      <Testimonial />
      <Social />
      <Footer />
    </>
  )
}

export default HomePage