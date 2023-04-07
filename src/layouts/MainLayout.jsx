import React, { useState } from 'react'
import { useEffect } from 'react'


import { Outlet, useLocation} from 'react-router-dom'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { HeaderHome } from '../components/headerHome/HeaderHome'

const MainLayout = ({ onSearch}) => {
   const location = useLocation();
   const [open, setOpen] = useState(false);
   const onBurger = () => {
      setOpen(!open)
   }
   useEffect(() => {
      setOpen(false)
   },[location])
   return (
      <div className={`wrapper ${open ? "menu-open" : ''}`}>
         {location.pathname === '/' ?
         <HeaderHome onBurger={onBurger}/> :
         <Header  onBurger={onBurger} onSearch={onSearch}/>
      }     
         <main className="main">
            <Outlet/>           
         </main>
         <Footer/>
      </div>
   )
}

export default MainLayout