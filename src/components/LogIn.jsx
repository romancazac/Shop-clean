import React from 'react'

const LogIn = ({popUp, onClose}) => {
   return (
      <div id="user"  className={popUp ? "popup popup_show" : "popup"}>
         <div className="popup__wrapper">
            <div className="popup__content">
               <button data-close type="button" className="popup__close" onClick={onClose}></button>
               <form action="#" className="form__form contact-form">

                  <div className="contact-form__row">
                     <div className="contact-form__column contact-form__column_user">
                        <h3 className="contact-form__name">Вход</h3>
                        <div className="contact-form__line">
                           <input className="contact-form__input" type="text" name="tem" placeholder="Эл. Почта"
                              required/>
                        </div>
                        <div className="contact-form__line">
                           <input className="contact-form__input" type="password" name="name" placeholder="Пароль" required/>
                              <a href="#" className="contact-form__link">Забыли Пароль?</a>
                        </div>

                        <button className="contact-form__btn btn-block ">Вход</button>
                     </div>
                     <div className="contact-form__column">
                        <h3 className="contact-form__name">Регистрация</h3>
                        <div className="contact-form__line">
                           <a href="registration-user.html" className="contact-form__btn btn-block btn-block_reg">ФИЗИЧЕСКОЕ ЛИЦО</a>
                        </div>
                        <div className="contact-form__line contact-form__line_text">или</div>
                        <div className="contact-form__line">
                           <a href="registration-company.html" className="contact-form__btn btn-block btn-block_reg">КОМПАНИЯ</a>
                        </div>
                     </div>
                  </div>

               </form>
            </div>
         </div>
      </div>
   )
}

export default LogIn