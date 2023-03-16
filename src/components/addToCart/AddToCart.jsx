import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from '../../redux/slices/cartSlice'
import { CustumAlert } from '../custumAlert/CustumAlert';
export const AddToCart = ({ added, obj }) => {

   const dispatch = useDispatch();
   const [show, setShow] = useState(false);
   const onAddItem = () => {
      dispatch(addItems(obj))
      setShow(true);
   }

   useEffect (() => {
     const timer =  setTimeout(() => {
         setShow(false);
      },1000)
      return () => {
         clearTimeout(timer);

       };
   },[show])


   return (
      <>
         <button className={`product-shop__add btn-block ${added && '_added'}`}
            onClick={onAddItem}>
            <span>В корзину</span>

         </button>
         {show ?
            <CustumAlert message={`Produs  ${obj.name} adaugat!`}  timeout={2000} /> : ""
         }
      </>

   )
}
