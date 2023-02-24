import React, { useState } from 'react'

import { useDispatch,useSelector } from 'react-redux';
import { registerStart,registerSuccess,registerFailure } from '../redux/slices/userSlice';

const Registration = () => {
   const dispatch = useDispatch();
   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
 
   const handleRegister = (e) => {
      e.preventDefault();
      dispatch(registerStart());
      fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(registerSuccess(data));
        })
        .catch((error) => {dispatch(registerFailure(error.message));

     
    });
  };

 
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
                                 value={username}
                                 onChange={(e) => setUsername(e.target.value)}
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