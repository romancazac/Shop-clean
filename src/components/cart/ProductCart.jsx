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

         <div className="products-cart__row ">
            <button className="products-cart__delete" onClick={onRemove}>
            </button>
            <div className="products-cart__items ">
               <a href="#" className="products-cart__img">
                  <img src={imageUrl} alt="" />
               </a>
               <Link to={`/shop/${id}`} className="products-cart__name">{name}</Link>
            </div>
            <div className="products-cart__price products-cart__col">{price} MDL</div>
            <form className="products-cart__cant  products-cart__col">
               <Quantity id={id} count={count}/>

            </form>
            <div className="products-cart__price products-cart__price-total products-cart__col">{price * count} MDL</div>
         </div>




      </>
   )
}

export default ProductCart