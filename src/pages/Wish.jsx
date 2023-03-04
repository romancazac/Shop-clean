import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeInWish } from '../redux/slices/wishSlice'
import Product from '../components/Product'
import BreadCrumbs from '../components/BreadCrumbs'
import { useRef } from 'react'

export const Wish = () => {
   const isMountedRef = useRef(false)
   const { items } = useSelector(state => state.wish)
   const dispatch = useDispatch();

   useEffect(() => {
      if (isMountedRef.current) {
         const json = JSON.stringify(items);
         localStorage.setItem("wish", json)
      }

      isMountedRef.current = true
   }, [items])
   return (
      <>
         <BreadCrumbs title="Список моих желаний" />
         <div className="wish">
            <div className="wish__container">
               <div className="wish__items block-products block-products_wish">
                  {
                     items?.map((item) =>
                        <Product {...item} wish={true} />

                     )
                  }
                  {/* 
                  <div className="block-products__column">
                     <article className="product-shop__items">
                        <button className="products-cart__delete block-products__delete"
                           onClick={() => dispatch(removeInWish(item.id))}>
                           Удалить
                        </button>
                        <a href="#">
                           <img src={item.imageUrl} alt={item.name} className="product-shop__img" />
                        </a>
                        <h4 className="product-shop__cat">{item.category}
                        </h4>
                        <a href="#">
                           <h3 className="product-shop__name">{item.name}
                           </h3>
                        </a>
                        <span className="product-shop__price">{item.price} MDL</span>
                        <button className="product-shop__add btn-block _added"><span>В корзину</span></button>
                     </article>
                  </div> */}
               </div>

            </div>
         </div>
      </>
   )
}
