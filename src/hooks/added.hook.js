

export const useAdded = () => {
 

   const onFind = (items, id) => {
        const findItem = items.some((obj) => obj.id === id);
    return findItem
    
   } 
  
   return {onFind}
}