import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeInWish } from '../../redux/slices/wishSlice'
import Product from '../Product'

export const Wish = () => {

   const { items } = useSelector(state => state.wish)
   const dispatch = useDispatch()
   return (
      <>
         <div class="top-block" style={{backgroundImage: `url('../img/crumbs-bg.png')`}}>
            <div class="top-block__container">
               <div class="top-block__body">
                  <h1 class="top-block__title">Список моих желаний</h1>
                  <ul class="top-panel__breadcrumb breadcrumb breadcrumb_w">
                     <li><a href="shop.html" class="breadcrumb__item">Главная</a></li>
                     <li><a class="breadcrumb__item breadcrumb__item_active">Список моих желаний</a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="wish">
            <div class="wish__container">
               <div class="wish__items block-products block-products_wish">
                  {
                     items?.map((item) =>
                        <Product {...item} wish={true}/>

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
