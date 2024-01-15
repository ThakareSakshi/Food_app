import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import List from "./components/Data.json"
import Quotes from './components/Quotes';

const Quotes_page = () => {
  
      return (
    <div >
      <Header></Header>
      <section class="section">
           {
            List.map((data)=>{
              return <Quotes {...data}></Quotes>
            })
           }
      </section>
      <Footer></Footer>
    </div>
  );
  
}

export default Quotes_page
