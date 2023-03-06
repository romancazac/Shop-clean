import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from '../components/Product'
import BreadCrumbs from '../components/BreadCrumbs'
import { useRef } from 'react'

export const Wish = () => {

   const { items } = useSelector(state => state.wish)



   return (
      <>
         <BreadCrumbs title="Список моих желаний" />
         <div className="wish shop">
            <div className="wish__container">
               <div className="wish__items block-products block-products_wish">
                  {
                     items?.map((item) =>
                        <div className='block-products__column'>
                            <Product {...item} wish={true} />
                        </div>
                     )
                  }
                  
               </div>

            </div>
         </div>
      </>
   )
}
