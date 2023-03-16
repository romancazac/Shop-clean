import React from 'react'
import loader from '../../asset/img/mai-products.png'
export const Preloader = () => {
   return (
      <div className="preloader">
         <img src={loader} alt="preloader"/>
            <span>Загрузка...</span>
      </div>
   )
}
