import React from 'react'
import logo from "../../asset/img/logo.png"
export const HeaderHome = () => {
   return (
      <header className="header header-main">
         <div className="header__container">
            <div className="header__body ">
               <a href="#l" className="header__logo"><img src={logo} alt="logo"/></a>
                  
               <ul className="header__socials socials">
                  <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                  <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a></li>
                  <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a></li>
                  <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a></li>
               </ul>
               <div className="header__lg">
                  <select >
                     <option value="RO">RO </option>
                     <option value="RU">RU </option>
                     <option value="EN">EN </option>
                  </select>
               </div>
            </div>
         </div>
      </header>
   )
}
