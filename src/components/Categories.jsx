import React from 'react'
import { useSelector } from 'react-redux';

const Categories = ({ id, item, name, onCategoryIndex }) => {
 
   const {categoryId} = useSelector(state => state.filter)
   const [spoller, setSpoller] = React.useState(false);

   const onOpenSpoller = () => {
      setSpoller(!spoller)

   }


   return (
      <div className="aside-category__row">

         <button className={spoller ? "aside-category__btn aside-category__btn_cat _spoller-active" : "aside-category__btn aside-category__btn_cat"} onClick={item.subcategory && onOpenSpoller}>{name}</button>
         {spoller &&
            <ul className="aside-category__list">
               {
                  item.subcategory.map((item, index) =>
                     <li className="aside-category__li" key={item.id} onClick={() => onCategoryIndex(item.id)}>
                        <button 
                        className={categoryId === item.id ? 'aside-category__btn _active' : 'aside-category__btn'}
                        >{item.name}</button></li>
                  )

               }

            </ul>
         }

      </div>
   )
}

export default Categories