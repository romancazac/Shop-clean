import React from 'react'
import { useDispatch } from 'react-redux'
import { addInWish } from '../../redux/slices/wishSlice'
export const AddToWishBtn = ({obj,added}) => {
   const dispatch = useDispatch()
   
   const onAddWish = () => {
      dispatch(addInWish(obj))
   
   }
  return (
   <button className={`action-product__item action-product__item_wish ${added && "_active"}`} onClick={onAddWish}></button>
  )
}
