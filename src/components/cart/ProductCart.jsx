import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import {  removeItem } from '../../redux/slices/cartSlice';
import { Quantity } from '../quantity/Quantity';



const ProductCart = ({ id, name, price, imageUrl, count }) => {
   const dispatch = useDispatch();


   const onRemove = () => {
      dispatch(removeItem(id));
   }

 
   return (
      <>

         <div class="products-cart__row ">
            <button class="products-cart__delete" onClick={onRemove}>
            </button>
            <div class="products-cart__items ">
               <a href="#" class="products-cart__img">
                  <img src={imageUrl} alt="" />
               </a>
               <Link to={`/shop/${id}`} class="products-cart__name">{name}</Link>
            </div>
            <div class="products-cart__price products-cart__col">{price} MDL</div>
            <form class="products-cart__cant  products-cart__col">
               <Quantity id={id} count={count}/>

            </form>
            <div class="products-cart__price products-cart__price-total products-cart__col">{price * count} MDL</div>
         </div>




      </>
   )
}

export default ProductCart