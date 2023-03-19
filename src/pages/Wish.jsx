import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from '../components/Product'
import BreadCrumbs from '../components/BreadCrumbs'
import { Helmet } from 'react-helmet'


export const Wish = () => {

   const { items } = useSelector(state => state.wish)



   return (
      <>
         <Helmet>
            <title>Список моих желаний</title>
            <meta name="description" content="Shop aplication" />
         </Helmet>
         <BreadCrumbs title="Список моих желаний" />
         <div className="wish shop">
            <div className="wish__container">
               <div className="wish__items block-products block-products_wish">
                  {items.length <= 0 ? "Nu aveti nici un produs adaugat in lista wish!" :
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
