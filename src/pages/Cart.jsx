import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BreadCrumbs from '../components/BreadCrumbs'

import ProductCart from '../components/cart/ProductCart'
const Cart = () => {
   const dispatch = useDispatch();
   const { items, totalPrice, totalCount } = useSelector(state => state.cart);
   console.log(items)
const isMounted = useRef(false);

useEffect(() => {
   if(isMounted.current){
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json)
   }
isMounted.current= true
},[items])

   return (
      <div class="cart">
         <BreadCrumbs title="Корзина" />
         <div class="cart__container">
            <div class="cart__row">
               <div class="cart__products products-cart">
                  <div class="products-cart__row products-cart__row_top">
                     <div class="products-cart__items products-cart__items products-cart__row_top-name">
                        Товар
                     </div>
                     <div class="products-cart__price products-cart__col products-cart__row_top-name">Цена</div>
                     <div class="products-cart__cant products-cart__col products-cart__row_top-name">
                        Кол-во
                     </div>
                     <div class="products-cart__price products-cart__col products-cart__row_top-name">Всего</div>
                  </div>

                
                  {
                     items.map((item) =>
                     console.log(item)
                        // <ProductCart {...item} key={item.id}/>
                     )
                     
                     
                  }



               </div>
               <aside class="cart__total cart-aside">
                  <div class="cart-aside__body">
                     <h3 class="cart-aside__title">Корзина</h3>
                     <div class="cart-aside__row">
                        <div class="cart-aside__name">Товары</div>
                        <span class="cart-aside__price">{totalCount} шт</span>
                     </div>
                     <div class="cart-aside__row">
                        <div class="cart-aside__name">Доставка</div>
                        <span class="cart-aside__price">200 MDL</span>
                     </div>
                     <div class="cart-aside__row">
                        <div class="cart-aside__name cart-aside__name_total">Всего</div>
                        <span class="cart-aside__price cart-aside__price_total">{totalPrice} MDL</span>
                     </div>
                     <button class="cart-aside__btn btn-block">Оплата</button>
                  </div>

               </aside>
            </div>
         </div>
      </div>
   )
}

export default Cart