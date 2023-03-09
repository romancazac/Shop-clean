import React, { useEffect } from 'react'
import { useState } from 'react'

export const CalculatorServices = ({ title, price }) => {
   const [lenght, setLenght] = useState(0);
   const [width, setWidth] = useState(0);
   const [area, setArea] = useState(0);
   useEffect(() => {
      setArea(lenght * width)
   }, [lenght, width])
   return (
      <div className="service-item">
         <div className="service-item_price">
            Цена: <span><span>{price}</span> MDL/m²</span>
         </div>
         <div className="service-item_data ">
            <form className="service-item__form">
               <h4 className="service-item__title">{title}</h4>
               <div className="service-item__row">
                  <div className="fields-two service-calc-field ">
                     <div className="input-par">
                        <input type="text"
                           name="length"
                           placeholder="Длина"
                           onChange={(e) => setLenght(e.target.value)}
                        />
                        <span>m</span>
                     </div>
                     <span className="service-item__icon">x</span>
                     <div className="input-par">
                        <input type="text" name="width" placeholder="Ширина"
                           onChange={(e) => setWidth(e.target.value)}
                        />
                        <span>m</span>
                     </div>
                  </div>
                  <div className="fields-devider">или</div>
                  <div className="field-one service-calc-field">
                     <div className="input-par">
                        <input type="text" name="area"
                           placeholder={area || "Площадь" }
                           onChange={(e) => setArea(e.target.value)}
                        />
                        <span>m²</span>
                     </div>
                  </div>
               </div>

               <div className="service-item_result">
                  Стоимость: <span>от <span>  {(price * area) || 0}  </span> MDL</span>
               </div>
            </form>

            <button className="btn-block" type="button" data-popup="#comand-services">
               Заказать услугу</button>
         </div>
      </div>
   )
}
