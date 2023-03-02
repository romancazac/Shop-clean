import React from 'react'
import { addItems, minusItem} from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux'
export const Quantity = ({id,count}) => {

   const dispatch = useDispatch();

   const onPlus = () => {
      dispatch(addItems({id}));
   }
   const onMinus = () => {
      dispatch(minusItem(id));
   } 

   return (
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
   )
}
