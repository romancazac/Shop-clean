import React from 'react'
import { addItems, minusItem} from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux'
export const Quantity = ({id,count=0}) => {

   const dispatch = useDispatch();

   const onPlus = () => {
      dispatch(addItems({id}));
   }
   const onMinus = () => {
      dispatch(minusItem(id));
   } 

   return (
      <div className="quantity">
         <div className="quantity__button quantity__button_minus _icon-minus"
            onClick={onMinus}
         ></div>
         <div className="quantity__input"><input autocomplete="off" type="text" name="form[]"
            value={count} /></div>
         <div className="quantity__button quantity__button_plus _icon-plus"
            onClick={onPlus}
         ></div>
      </div>
   )
}
