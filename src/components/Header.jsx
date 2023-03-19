import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate} from 'react-router-dom'

import cart from '../asset/img/cart.svg';
import wish from '../asset/img/wish.svg';
import compare from '../asset/img/group.svg';
import profile from '../asset/img/profile.svg';
import LogIn from './LogIn';


import { selectIsAuth } from '../redux/slices/userSlice';
import SearchProduct from './searchProduct/SearchProduct';
import { useLs } from '../hooks/saveInLocaleStorage.hook';
import { setPopup } from '../redux/slices/popupSlice';
import { NavList } from './navList/NavList';
import logo from "../asset/img/logo.png"
import { HeaderCategories } from './headerCategories/HeaderCategories';


function Header({onSearch,onBurger}) {
   const isAuth = useSelector(selectIsAuth)
   const push = useNavigate();
   const dispatch = useDispatch();


   const {saveData, isMounted} = useLs()
   const { totalPrice, totalCount,dataCart } = useSelector(state => state.cart)
   const { countWish, items} = useSelector(state => state.wish)
   const { countCompare, dataCompare} = useSelector(state => state.compare)
  
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
               <Link to="/" className="header__logo"><img src={logo} alt="logo" /></Link>
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
                   <HeaderCategories/>  
                   <NavList onBurger={onBurger}/>     
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