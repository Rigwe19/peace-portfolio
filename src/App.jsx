import Navbar from './Components/Navbar';
import Video from './Components/Video';
import Header from './Components/Header';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Plan from './Components/Plan';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css'

function App() {

  return (
    <>
      {/* Vercel SpeedInsights */}
      <SpeedInsights />
      {/* End Of Vercel SpeedInsights */}
      <Navbar />
      <Video />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Plan />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App
