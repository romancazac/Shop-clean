import React from 'react'
import { Link } from 'react-router-dom'
import img from '../asset/img/crumbs-bg.png'
const BreadCrumbs = ({title}) => {
   return (
      <div className="top-block" style={{backgroundImage: `url(${img})`}}>
         <div className="top-block__container">
            <div className="top-block__body">
               <h1 className="top-block__title">{title}</h1>
               <ul className="top-panel__breadcrumb breadcrumb breadcrumb_w">
                  <li><Link  to="/" className="breadcrumb__item">Главная</Link></li>
                  <li><a className="breadcrumb__item breadcrumb__item_active">{title}</a></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default BreadCrumbs