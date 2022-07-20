import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { addItems, minusItem, removeItem } from '../../redux/slices/cartSlice';



const ProductCart = ({ id, name, price, imageUrl, count }) => {
   const dispatch = useDispatch();
   const {totalCount} = useSelector(state => state.cart);
   const onPlus = () => {
      dispatch(addItems({id}));
   }

   const onRemove = () => {
      dispatch(removeItem(id));
   }
   const onMinus = () => {
      dispatch(minusItem(id));
   } 
   React.useEffect(() => {
      
   },[totalCount])
 
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
               <div class="quantity">
                  <div class="quantity__button quantity__button_minus _icon-minus"
                     onClick={onMinus}
                  ></div>
                  <div class="quantity__input"><input autocomplete="off" type="text" name="form[]"
                     value={count} /></div>
                  <div class="quantity__button quantity__button_plus _icon-plus"
                     onClick={onPlus}
                  ></div>
               </div>

            </form>
            <div class="products-cart__price products-cart__price-total products-cart__col">{price * count} MDL</div>
         </div>




      </>
   )
}

export default ProductCart