import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import MarketUpdate from '../../views/MarketUpdate'
import About from '../../views/About'
import Discord from '../../views/Discord'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div style = {{margin : "0 auto",height: "100%", maxWidth : "1400px"}}>
      <Nav />
      <Hero />
      <MarketUpdate />
      <About />
      <Discord />
      <Footer />
    </div>
  )
}

export default Home