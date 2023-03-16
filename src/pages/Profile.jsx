
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout  } from '../redux/slices/userSlice';
const Profile = () => {
   const dispatch = useDispatch();
   const push = useNavigate();
   const {user} = useSelector(state => state.auth);

   const onOut = () => {
      dispatch(logout());
      window.localStorage.removeItem('token');
      push('/')
   }
   return (
      <section className="section profile">
         <div className="about__container">
            <div className="about__row">
               <div className="about__column">
                  <h2 className="section__title">ЗДРАВСТВУЙТЕ, {user?.username}</h2>
                  <h3 className="section__subtitle">ФИЗИЧЕСКОЕ ЛИЦО</h3>
                  <p className="section__text">{user?.email}</p>
                  <p className="section__text">{user?.phone}</p>
                  <ul className="profile__links">
                     <li><a href="edit-profile.html" className="profile__edit btn-block">РЕДАКТИРОВАТЬ ПРОФИЛЬ</a></li>
                     <li><button onClick={onOut} className="section__link news__link">Выйти из профиля</button></li>
                  </ul>
               </div>
               <div className="about__column">
                  <ul className="profile__links">
                     <li><a href="#" className="section__link news__link">История заказов</a></li>
                     <li><a href="#" className="section__link news__link">ИЗБРАННОЕ</a></li>
                  </ul>


               </div>
            </div>


         </div>
      </section>

   )
}

export default Profile