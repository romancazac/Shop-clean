import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { fetchUser, setUser } from '../redux/slices/userSlice';

const Registration = () => {
   const dispatch = useDispatch();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   const handleRegister = () => {
         dispatch(
            fetchUser({     
               email,
               password
            })
         )
      
   
  }

 
   return (
      <div className="registration">
         <div className="registratios__container">
            <div className="form-contacts__container">
               <div className="form-contacts__body">
                  <div className="form__form contact-form">

                     <h3 className="contact-form__name">РЕГИСТРАЦИЯ</h3>
                     <h4 className="contact-form__subname">ФИЗИЧЕСКОЕ ЛИЦО</h4>
                     <div className="contact-form__row">
                        <div className="contact-form__column">
                           <div className="contact-form__line">
                              {/* <input className="contact-form__input" type="text" name="name" placeholder="Имя" required
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                              /> */}
                           </div>
                           <div className="contact-form__line">
                              <input className="contact-form__input" type="text" name="tem" placeholder="Эл. Почта"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 required />
                           </div>
                        </div>
                        <div className="contact-form__column">
                           <div className="contact-form__line">
                              {/* <input className="contact-form__input" type="text" name="number" placeholder="Телефон"
                                 value={phone}
                                 onChange={(e) => setPhone(e.target.value)}
                                 required /> */}
                           </div>
                           <div className="contact-form__line">
                              <input className="contact-form__input" type="password" name="number" placeholder="Пароль"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                 required />
                           </div>


                        </div>
                     </div>
                     <button  className="contact-form__btn btn-block "
                     onClick={handleRegister}
                     >Зарегистрироваться</button>
                  </div>
               </div>

            </div>

         </div>
      </div>
   )
}

export default Registration