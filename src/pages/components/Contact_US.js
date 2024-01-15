import React from 'react'
import List_Items from './List_Items'

const Contact_US = () => {
  return (
    <div className='contact-left-part'>
        <h4>
            Contanct us
        </h4>
        <h1>GET IN TOUCH WITH US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>

        <List_Items heading="Our Location" desc="99 S.t Jomblo Park Pekanbaru 28292. Indonesia" icon="fa-solid fa-house"/>
        <List_Items heading="Phone Number" desc="(+62)81 414 257 9980" icon="fa-solid fa-phone"/>
        <List_Items heading="Email Address" desc="info@yourdomain.com" icon="fa-regular fa-envelope"/>
       
      
    </div>
  )
}

export default Contact_US
