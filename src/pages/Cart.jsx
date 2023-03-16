import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BreadCrumbs from '../components/BreadCrumbs'

import ProductCart from '../components/cart/ProductCart'
const Cart = () => {

   const { dataCart, totalPrice, totalCount } = useSelector(state => state.cart);



   return (
      <div className="cart">
         <BreadCrumbs title="Корзина" />
         <div className="cart__container">
            <div className="cart__row">
               <div className="cart__products products-cart">
                  <div className="products-cart__row products-cart__row_top">
                     <div className="products-cart__items products-cart__items products-cart__row_top-name">
                        Товар
                     </div>
                     <div className="products-cart__price products-cart__col products-cart__row_top-name">Цена</div>
                     <div className="products-cart__cant products-cart__col products-cart__row_top-name">
                        Кол-во
                     </div>
                     <div className="products-cart__price products-cart__col products-cart__row_top-name">Всего</div>
                  </div>

                
                  {
                     dataCart.length <= 0 ? "Nu sunt produse in cos" :
                     dataCart.map((item) =>
                        <ProductCart {...item} key={item.id}/>
                     )                  
                  }



               </div>
               <aside className="cart__total cart-aside">
                  <div className="cart-aside__body">
                     <h3 className="cart-aside__title">Корзина</h3>
                     <div className="cart-aside__row">
                        <div className="cart-aside__name">Товары</div>
                        <span className="cart-aside__price">{totalCount} шт</span>
                     </div>
                     <div className="cart-aside__row">
                        <div className="cart-aside__name">Доставка</div>
                        <span className="cart-aside__price">200 MDL</span>
                     </div>
                     <div className="cart-aside__row">
                        <div className="cart-aside__name cart-aside__name_total">Всего</div>
                        <span className="cart-aside__price cart-aside__price_total">{totalPrice} MDL</span>
                     </div>
                     <button className="cart-aside__btn btn-block">Оплата</button>
                  </div>

               </aside>
            </div>
         </div>
      </div>
   )
}

export default Cart