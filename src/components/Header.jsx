import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom'
import { categories } from '../db'
import { setCategoryId } from '../redux/slices/filterSlice';

import cart from '../asset/img/cart.svg';
import wish from '../asset/img/wish.svg';
import compare from '../asset/img/group.svg';
import profile from '../asset/img/profile.svg';
import LogIn from './LogIn';


import { fetchSingIn, selectIsAuth } from '../redux/slices/userSlice';
// import { fetchUserData } from '../redux/slices/authSlice';






function Header() {
   const isAuth = useSelector(selectIsAuth)
   const params = useParams();
   const push = useNavigate();
   const dispatch = useDispatch();

   const { totalPrice, totalCount } = useSelector(state => state.cart)

   const [popUp, setPopUp] = React.useState(false);


   const handleSing = async (email, password) => {

      const  data  = await dispatch(
         fetchSingIn({
            email,
            password
         })

      )
      
      if(!data.payload){
         return alert('Не удалось авторизоватся!')
      }
      if('accessToken' in data.payload){
         window.localStorage.setItem('token', data.payload.accessToken)
      }
        
         console.log(data.payload)
     



   }


   const onCategoryIndex = React.useCallback((id) => {
      dispatch(setCategoryId(id))
   });

   const openPopUp = () => {
      setPopUp(true)
   }
   const onClose = () => {
      setPopUp(false)
   }
   React.useEffect(() => {
      setPopUp(false)


   }, [params]);

   React.useEffect(() => {

      if (isAuth) {
         setPopUp(false)
         push('/profile')
      }
   }, [isAuth]);


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
                  <form action="#" className="search__form">
                     <input placeholder="Введите название товара" type="search" className="search__inp" />
                     <select name="#" id="#" className="search__cat">
                        <option value="Все категории">Все категории</option>
                        <option value="cat1">cat 1</option>
                        <option value="cat2">cat 2</option>
                        <option value="cat3">cat 3</option>
                     </select>
                     <button type="submit" className="search__btn"></button>
                  </form>
               </div>
               <div className="header__action action">
                  {
                     isAuth ?
                        <Link to="/profile" className="action__item" >
                           <img src={profile} alt="" />
                        </Link>
                        :
                        <button className="action__item" onClick={openPopUp}>
                           <img src={profile} alt="" />

                        </button>
                  }

                  <LogIn popUp={popUp} onClose={onClose} handleSing={handleSing} />
                  <div className="action__dynamic" data-da="nav__nav-close,0,767">
                     <a href="compare.html" className="action__item">
                        <img src={compare} alt="" />
                        <span className="action__count">3</span>
                     </a>
                     <a href="wish.html" className="action__item">
                        <img src={wish} alt="" />
                        <span className="action__count">1</span>
                     </a>
                  </div>

                  <Link to="/cart" className="action__item">
                     <div className="action__items">
                        <img src={cart} alt="" />
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
                                             onClick={() => onCategoryIndex(item.id)}
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
                           <li><Link to="/" className="nav__link _active">Главная</Link></li>
                           <li><a href="about.html" className="nav__link">О нас</a></li>
                           <li><Link to="/shop" className="nav__link">Магазин</Link></li>
                           <li><a href="services.html" className="nav__link">Услуги</a></li>
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