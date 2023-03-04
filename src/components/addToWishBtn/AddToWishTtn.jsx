import React from 'react'
import { useDispatch } from 'react-redux'
import { addInWish } from '../../redux/slices/wishSlice'
export const AddToWishTtn = ({obj,addedWish}) => {
   const dispatch = useDispatch()
   
   const onAddWish = () => {
      dispatch(addInWish(obj))
      // setAddedWish(true)
   }
  return (
   <button className={`action-product__item action-product__item_wish ${addedWish && "_active"}`} onClick={onAddWish}></button>
  )
}
