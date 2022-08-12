import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const LogIn = ({popUp, onClose, handleSing}) => {
   const [email, setMail] = useState('');
   const [password, setPass] = useState('');


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
                              value={email}
                              onChange={(e) => setMail(e.target.value)}
                              required/>
                        </div>
                        <div className="contact-form__line">
                           <input className="contact-form__input" type="password" name="name" 
                           placeholder="Пароль"
                           value={password} 
                           onChange={(e) => setPass(e.target.value) }
                           required/>
                              <a href="#" className="contact-form__link">Забыли Пароль?</a>
                        </div>

                        <button type='submit' className="contact-form__btn btn-block " 
                           onClick={() => handleSing(email, password) }
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