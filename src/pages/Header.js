import React from 'react'
import Button from './components/Buttons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header class="header">
        <div class="header-logo"><img src="https://flowbite.com/docs/images/logo.svg" alt="logo"/><span class="header-logo-name">GeekFood</span></div>
        <div class="header-links">
            <ul>
                <li style={{color:"rgb(37,99,235)"}}><Link to="/">Home</Link></li>
                <li><Link to="/Quote">Quote</Link></li>
                <li><Link to="/Resturants">Resturants</Link></li>
                <li><Link to="/Food">Foods</Link></li>
                <li><Link to="/Contact">Contact</Link></li>

            </ul>
        </div>
       
       <div>  <Button bgColor="rgb(37,99,235)" color="white" title="Get Started"></Button><i class="fa-solid fa-bars menu"></i></div>

    </header>
  )
}

export default Header
