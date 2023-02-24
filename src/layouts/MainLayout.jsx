import React from 'react'


import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = ({ onSearch}) => {
   return (
      <div className="wrapper">
         <main className="main">
            <Header  onSearch={onSearch}/>
            <Outlet/>
         </main>
         
      </div>
   )
}

export default MainLayout