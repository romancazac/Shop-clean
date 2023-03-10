import React, { useState,useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,NavLink, useNavigate, useParams} from 'react-router-dom'

import { setCategoryId } from '../redux/slices/filterSlice';

import cart from '../asset/img/cart.svg';
import wish from '../asset/img/wish.svg';
import compare from '../asset/img/group.svg';
import profile from '../asset/img/profile.svg';
import LogIn from './LogIn';


import { selectIsAuth } from '../redux/slices/userSlice';
import SearchProduct from './searchProduct/SearchProduct';
import { useLs } from '../hooks/saveInLocaleStorage.hook';
import { setPopup } from '../redux/slices/popupSlice';



function Header({onSearch}) {
   const isAuth = useSelector(selectIsAuth)
   const params = useParams();
   const push = useNavigate();
   const dispatch = useDispatch();


   const {saveData, isMounted} = useLs()
   const { totalPrice, totalCount,dataCart } = useSelector(state => state.cart)
   const { countWish, items} = useSelector(state => state.wish)
   const { countCompare, dataCompare} = useSelector(state => state.compare)
   const { categories} = useSelector(state => state.categories)


   const onCategoryIndex = useCallback((id) => {
      dispatch(setCategoryId(id))
   });

   useEffect(() => {

      if (isAuth) {
         dispatch(setPopup(""))
         push('/profile')
      }
   }, [isAuth]);



   useEffect(() => {

    saveData(items, "wish")  
   isMounted.current= true
   },[items])
   useEffect(() => {

      saveData(dataCart, "cart")  
     isMounted.current= true
     },[dataCart])
   useEffect(() => {
      saveData(dataCompare, "compare")  
      isMounted.current= true

   },[dataCompare])

   return (
      <header className="header">
         <div className="header__top header-top">
            <div className="header-top__container">
               <ul className="header-top__contacts contacts">
                  <li className="contacts__li"><a href="mailto:info@ecurat.md" className="contacts__item contacts__item_mail-w">info@ecurat.md</a></li>
                  <li className="contacts__li"><a href="tel:+37368684449" className="contacts__item contacts__item_tel-w">+(373) 68 68 44 49</a></li>
               </ul>
            </div>

         </div>
         <div className="header__container">
            <div className="header__body">
               <a href="index.html" className="header__logo"><img src="../img/logo.png" alt="" /></a>
               <div className="header__search search" data-da="header__bottom-m,0,767">
                  <SearchProduct onSearch={onSearch}/>
               </div>
               <div className="header__action action">
                  {
                     isAuth ?
                        <Link to="/profile" className="action__item" >
                           <img src={profile} alt="profile" />
                        </Link>
                        :
                        <button className="action__item" onClick={() => dispatch(setPopup("user"))}>
                           <img src={profile} alt="profile" />

                        </button>
                  }
             
                  <LogIn />
                  <div className="action__dynamic" data-da="nav__nav-close,0,767">
                     <Link to="/compare" className="action__item">
                        <img src={compare} alt="compare" />
                        <span className="action__count">{countCompare}</span>
                     </Link>
                     <Link to="/wish" className="action__item">
                        <img src={wish} alt="wish" />
                        <span className="action__count">{countWish}</span>
                     </Link>
                  </div>

                  <Link to="/cart" className="action__item">
                     <div className="action__items">
                        <img src={cart} alt="cart" />
                        <span className="action__count">{totalCount}</span>
                     </div>
                     <span className="action__total">{totalPrice} MDL</span>
                  </Link>
               </div>

            </div>
         </div>
         <div className="header__bottom">
            <div className="header__container header__bottom-m">
               <div className="header__body header-bottom">
                  <div className="header-bottom__category category-header" data-da="nav__menu,1,767" data-spollers="767,max" >
                     <button className="category-header__btn" data-spoller><span>Категории</span></button>
                     <ul className="category-header__cat" data-spollers="992,max" data-one-spoller>


                        {
                           categories.map((item) =>
                              <li className="category-header__li" key={item.id}>
                                 <a href="#" className="category-header__item">{item.name}</a>
                                 <button className="category-header__btn-arr" data-spoller ></button>
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
                  <div className="header__nav nav">
                     <nav className="nav__menu">
                        <div className="nav__nav-close">
                           <button className="nav__nav-close-btn">
                              <span></span>
                           </button>
                        </div>
                        <ul className="nav__list">
                           <li><NavLink to="/" className="nav__link ">Главная</NavLink></li>
                           <li><NavLink to="/about" className="nav__link">О нас</NavLink></li>
                           <li><NavLink to="/shop" className="nav__link">Магазин</NavLink></li>
                           <li><NavLink to="/services" className="nav__link">Услуги</NavLink></li>
                           <li><a href="news.html" className="nav__link">Новости</a></li>
                           <li><a href="contacts.html" className="nav__link">Контакты</a></li>
                        </ul>
                     </nav>
                     <button className="nav__burger icon-menu">
                        <span></span>
                     </button>
                  </div>
                  <div className="header__lg">
                     <select >
                        <option value="RO">RO </option>
                        <option value="RU">RU </option>
                        <option value="EN">EN </option>
                     </select>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header