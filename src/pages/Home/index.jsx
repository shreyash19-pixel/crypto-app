import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'

const Home = () => {
  return (
    <div style = {{margin : "0 auto",height: "100%", maxWidth : "1400px"}}>
      <Nav />
      <Hero />
    </div>
  )
}

export default Home