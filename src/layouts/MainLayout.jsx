import React from 'react'


import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import Header from '../components/Header'

const MainLayout = ({ onSearch}) => {
   return (
      <div className="wrapper">
         <Header  onSearch={onSearch}/>
         <main className="main">
            <Outlet/>           
         </main>
         <Footer/>
      </div>
   )
}

export default MainLayout