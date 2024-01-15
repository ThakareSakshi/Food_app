import React from 'react'
import Header from './Header'
import Contact_US from './components/Contact_US'
import Contanct_form from './components/Contanct_form'

const Contact = () => {
  return (
    <div>
      <Header/>
      <section className='contact-us-section'>
       <Contact_US/>
       <Contanct_form/>
      </section>
      
    </div>
  )
}

export default Contact
