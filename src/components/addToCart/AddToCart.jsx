import React from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from '../../redux/slices/cartSlice'
export const AddToCart = ({added,obj}) => {

   const dispatch = useDispatch();
   const onAddItem = () => {
      dispatch(addItems(obj))
   }
   return (
      <button className={  `product-shop__add btn-block ${added && '_added'}`}
         onClick={onAddItem}>
         <span>В корзину</span>
      </button>
   )
}
