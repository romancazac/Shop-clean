import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingIn, selectIsAuth } from '../redux/slices/userSlice';

import Popup from './popup/Popup';
const LogIn = ({ popUp, onClose, setPopUp }) => {

   const dispatch = useDispatch();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const { loading, error, token } = useSelector((state) => state.auth);
   const isAuth = useSelector(selectIsAuth)

   const push = useNavigate();

   const handleSubmit = (e) => {
      
      e.preventDefault();
      dispatch(fetchSingIn({ username, password }));
      
   };


   useEffect(() => {
      if (token) {
         window.localStorage.setItem('token', token);

      }
   }, [token])

   return (
         <Popup id={"user"}>
               
               <div className="form__form contact-form">

                  <div className="contact-form__row">
                     <div className="contact-form__column contact-form__column_user">
                        <h3 className="contact-form__name">Вход</h3>
                        <div className="contact-form__line">
                           <input className="contact-form__input" type="text" name="tem"
                              placeholder="Эл. Почта"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required />
                        </div>
                        <div className="contact-form__line">
                           <input className="contact-form__input" type="password" name="name"
                              placeholder="Пароль"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required />
                              
                           <a href="#" className="contact-form__link">Забыли Пароль?</a>
                          
                        </div>
                        
                        {error&&<div className="aside__title">No pass or log correc</div> }
                        <button className="contact-form__btn btn-block "
                           onClick={handleSubmit} 
                        >Вход</button>
                       
                     </div>
                     <div className="contact-form__column">
                        <h3 className="contact-form__name">Регистрация</h3>
                        <div className="contact-form__line">
                           <Link to="/registration" className="contact-form__btn btn-block btn-block_reg">ФИЗИЧЕСКОЕ ЛИЦО</Link>
                        </div>
                        <div className="contact-form__line contact-form__line_text">или</div>
                        <div className="contact-form__line">
                           <a href="registration-company.html" className="contact-form__btn btn-block btn-block_reg">КОМПАНИЯ</a>
                        </div>
                     </div>
                  </div>

               </div>
               </Popup>
   )
}

export default LogIn