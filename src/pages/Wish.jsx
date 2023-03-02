import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeInWish } from '../redux/slices/wishSlice'
import Product from '../components/Product'
import BreadCrumbs from '../components/BreadCrumbs'

export const Wish = () => {

   const { items } = useSelector(state => state.wish)
   const dispatch = useDispatch()
   return (
      <>
         <BreadCrumbs title="Список моих желаний"/>
         <div class="wish">
            <div class="wish__container">
               <div class="wish__items block-products block-products_wish">
                  {
                     items?.map((item) =>
                        <Product {...item} wish={true} />

                     )
                  }
                  {/* 
                  <div class="block-products__column">
                     <article class="product-shop__items">
                        <button class="products-cart__delete block-products__delete"
                           onClick={() => dispatch(removeInWish(item.id))}>
                           Удалить
                        </button>
                        <a href="#">
                           <img src={item.imageUrl} alt={item.name} class="product-shop__img" />
                        </a>
                        <h4 class="product-shop__cat">{item.category}
                        </h4>
                        <a href="#">
                           <h3 class="product-shop__name">{item.name}
                           </h3>
                        </a>
                        <span class="product-shop__price">{item.price} MDL</span>
                        <button class="product-shop__add btn-block _added"><span>В корзину</span></button>
                     </article>
                  </div> */}
               </div>

            </div>
         </div>
      </>
   )
}
