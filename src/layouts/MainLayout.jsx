import React from 'react'


import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
   return (
      <div className="wrapper">
         <main className="main">
            <Header/>
            <Outlet/>
         </main>
         
      </div>
   )
}

export default MainLayout