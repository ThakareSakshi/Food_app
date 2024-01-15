import logo from './logo.svg';
import './App.css';
import Quotes_page from './pages/Quotes_page';
import Home from './pages/Home';
import Restaurants_page from './pages/Restaurants_page';
import Contact from './pages/Contact';
import {  createBrowserRouter,
  RouterProvider } from "react-router-dom";
  import Header from './pages/Header';

  const router = createBrowserRouter([
    {
      path: "/",
      
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"Quote",
          element:<Quotes_page/>
        },
        {
          path:"Resturants",
          element:<Restaurants_page/>
        },
        {
          path:"contact",
          element:<Contact/>
          
        },
        {
        path:"food",
        element:<div><Header/></div>

        }
      ]
      
    },
    // {
    //   path: "Quote",
      
    //   children:[
    //     {
    //       path:"Quote",
    //       element:<Quotes_page/>
    //     },
    //     {
    //       path:"home",
    //       element:<Home/>
    //     },
    //     {
    //       path:"Resturants",
    //       element:<Restaurants_page/>
    //     },
    //     {
    //       path:"contact",
    //       element:<Contact/>
          
    //     }
    //   ]
      
    // },
    // {
    //   path: "/Contact",
      
    //   children:[
    //     {
    //       path:"home",
    //       element:<Home/>
    //     },
    //     {
    //       path:"Quote",
    //       element:<Quotes_page/>
    //     },
    //     {
    //       path:"Resturants",
    //       element:<Restaurants_page/>
    //     },
    //     {
    //       path:"food",
    //       element:<Contact/>
          
    //     }
    //   ]
      
    // },
    // {
    //   path: "/Food",
      
    //   children:[
    //     {
    //       path:"/Food",
    //       element:<div></div>
    //     },
    //     {
    //       path:"Quote",
    //       element:<Quotes_page/>
    //     },
    //     {
    //       path:"Resturants",
    //       element:<Restaurants_page/>
    //     },
    //     {
    //       path:"contact",
    //       element:<Contact/>
          
    //     }
    //   ]
      
    // },
    // {
    //   path: "/Resturants",
      
    //   children:[
    //     {
    //       path:"home",
    //       element:<Home/>
    //     },
    //     {
    //       path:"Quote",
    //       element:<Quotes_page/>
    //     },
    //     {
    //       path:"Resturants",
    //       element:<Restaurants_page/>
    //     },
    //     {
    //       path:"contact",
    //       element:<Contact/>
          
    //     }
    //   ]
      
    // },
    
  ]);

function App() {

 
  return (
    <div className="App">
       <RouterProvider router={router}/>
      {/* <Quotes_page/> */}
      {/* <Home/> */}
      {/* <Restaurants_page/> */}

     {/* <Contact/> */}
    </div>
  );
}

export default App;
