import { calcTotalCount, calcTotalPrice } from "./calcToatalPrice";

export const getCartFromLs = () => {
   const data = localStorage.getItem('cart');
   const dataCart = data ? JSON.parse(data) : [];
   const totalPrice  = calcTotalPrice(dataCart);
   const totalCount  = calcTotalCount(dataCart)

      return {
         dataCart,
         totalPrice,
         totalCount
      }
   
 
}