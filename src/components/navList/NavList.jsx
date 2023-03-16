import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavList = () => {
   return (
      <div className="header__nav nav">
      <nav className="nav__menu">
         <div className="nav__nav-close">
            <button className="nav__nav-close-btn">
               <span></span>
            </button>
         </div>
         <ul className="nav__list">
            <li><NavLink to="/" className="nav__link ">Главная</NavLink></li>
            <li><NavLink to="/about" className="nav__link">О нас</NavLink></li>
            <li><NavLink to="/shop" className="nav__link">Магазин</NavLink></li>
            <li><NavLink to="/services" className="nav__link">Услуги</NavLink></li>
            <li><NavLink to="/news" className="nav__link">Новости</NavLink></li>
            <li><NavLink to="/contacts" className="nav__link">Контакты</NavLink></li>
         </ul>
      </nav>
      <button className="nav__burger icon-menu">
         <span></span>
      </button>
   </div>
   )
}
