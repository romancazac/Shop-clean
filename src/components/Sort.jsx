import React from "react";

export default function Sort({onSortProp }) {
   const sortItems = [
      {'name':'популярности','sortProperty':'rating'}, 
      {'name' : 'по цене','sortProperty':'price'},
      {'name':'по алфавиту','sortProperty':'name'}];
 
   
   return (
      <>

         <span className="top-panel__name">Сортировка:</span>
         <select name="#" id="#" className="sort__select"    onChange={(e) => onSortProp(e.target.value)}>
         {
            sortItems.map((item, i) =>
               <option 
               value={item.sortProperty} 
               key={i}
             
               >{item.name}</option>
            )
         }
         </select>
      </>
   );
}