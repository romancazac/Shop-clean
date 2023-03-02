import { calcTotalCount, calcTotalPrice } from "./calcToatalPrice";

export const getCartFromLs = () => {
   const data = localStorage.getItem('cart');
   const items = data ? JSON.parse(data) : [];
   const totalPrice  = calcTotalPrice(items);
   const totalCount  = calcTotalCount(items)

      return {
         items,
         totalPrice,
         totalCount
      }
   
 
}