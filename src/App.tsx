import HomePage from './Pages/HomePage'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <>
      {/* Vercel SpeedInsights */}
      <SpeedInsights />
      <HomePage />
      {/* End Of Vercel SpeedInsights */}
      {/* <Navbar />
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
      <Footer /> */}
    </>
  )
}

export default App
