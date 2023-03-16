import React from 'react'


import { Outlet, useLocation} from 'react-router-dom'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { HeaderHome } from '../components/headerHome/HeaderHome'

const MainLayout = ({ onSearch}) => {
   const location = useLocation();
   return (
      <div className="wrapper">
         {location.pathname === '/' ?
         <HeaderHome/> :
         <Header  onSearch={onSearch}/>
      }     
         <main className="main">
            <Outlet/>           
         </main>
         <Footer/>
      </div>
   )
}

export default MainLayout