import React from 'react'
import Header from './Header'
import Footer from './Footer'
import GetInTouch from './components/GetInTouch'
import CardContainer from './components/CardContainer'
import Herosection from './components/Herosection'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Herosection></Herosection>
      <GetInTouch></GetInTouch>
      <section class="section">
      <CardContainer/>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
