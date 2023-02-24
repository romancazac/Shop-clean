import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess,loginFailure} from '../redux/slices/userSlice';
const LogIn = ({popUp, onClose, handleSing}) => {
   
   const dispatch = useDispatch();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const {loading,error,token} = useSelector((state) => state.auth);
   
 
   const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(loginStart());
     fetch('http://localhost:3001/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ username, password })
     })
       .then((res) => res.json())
       .then((data) => {
         dispatch(loginSuccess(data));
        
       })
       .catch((error) => {
         dispatch(loginFailure(error.message));
       });
   };
 

useEffect(() => {
   if(token){
      window.localStorage.setItem('token',token);
      
   }
},[token])
   return (
      <div id="user"  className={popUp ? "popup popup_show" : "popup"}>
         <div className="popup__wrapper">
            <div className="popup__content">
               <button data-close type="button" className="popup__close" onClick={onClose}></button>
               <div className="form__form contact-form">

                  <div className="contact-form__row">
                     <div className="contact-form__column contact-form__column_user">
                        <h3 className="contact-form__name">Вход</h3>
                        <div className="contact-form__line">
                           <input className="contact-form__input" type="text" name="tem" 
                              placeholder="Эл. Почта"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required/>
                        </div>
                        <div className="contact-form__line">
                           <input className="contact-form__input" type="password" name="name" 
                           placeholder="Пароль"
                           value={password} 
                           onChange={(e) => setPassword(e.target.value) }
                           required/>
                              <a href="#" className="contact-form__link">Забыли Пароль?</a>
                        </div>

                        <button  className="contact-form__btn btn-block " 
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
            </div>
         </div>
      </div>
   )
}

export default LogIn