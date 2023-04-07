import {useCallback, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategoryId } from '../../redux/slices/filterSlice';

export const HeaderCategories = () => {
   const dispatch = useDispatch();
   const { categories} = useSelector(state => state.categories)
   const [openS, setOpenS] = useState(false)

   const onCategoryIndex = useCallback((id) => {
      dispatch(setCategoryId(id))
   });
   const onSpoller = () => {
      setOpenS(!openS)
   }

   return (
      <div className="header-bottom__category category-header" data-da="nav__menu,1,767" data-spollers="767,max" >
         <button className="category-header__btn" data-spoller><span>Категории</span></button>
         <ul className="category-header__cat" data-spollers="992,max" data-one-spoller>
            {
               categories.map((item) =>
                  <li className="category-header__li" key={item.id}>
                     <a href="#" className="category-header__item">{item.name}</a>
                     <button className={`category-header__btn-arr ${openS == item.id ? "_spoller-active" : ''}`} onClick={ onSpoller}></button>
                     <div className="category-header__subcat">
                        {
                           item.subcategory.map((item) =>
                              <Link to="/shop"
                                 className="category-header__item"
                                 key={item.id}
                                 onClick={() => onCategoryIndex(item.name)}
                              >{item.name}</Link>
                           )
                        }
                     </div>
                  </li>

               )
            }
         </ul>
      </div>
   )
}
