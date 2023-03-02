export const calcTotalCount = (items) => {
   return items.reduce((count, obj) => {
      return obj.count + count
   }, 0);
}

export const calcTotalPrice = (items) => {
   return items.reduce((sum, obj) => {

      return obj.price * obj.count + sum;

   }, 0);
}

