import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingIn } from '../redux/slices/userSlice';

import Popup from './popup/Popup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

const LogIn = () => {

   const dispatch = useDispatch();
   const { error, token } = useSelector((state) => state.auth);
   const SignupSchema = Yup.object().shape({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
   });
   const handleSubmit = (values) => {
      dispatch(fetchSingIn(values));
   };

   useEffect(() => {
      if (token) {
         window.localStorage.setItem('token', token);

      }
   }, [token])

   return (
      <Popup id={"user"}>
         <Formik
            initialValues={{
               username: 'Roman2333',
               password: '123456789',

            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
         >

            <Form className="form__form contact-form">

               <div className="contact-form__row">
                  <div className="contact-form__column contact-form__column_user">
                     <h3 className="contact-form__name">Вход</h3>
                     <div className="contact-form__line">
                        <Field
                           className="contact-form__input"
                           type="text"
                           name="username"
                           placeholder="Эл. Почта" />
                        <ErrorMessage className='contact-form__input' component="span" name="username" />
                        
                     </div>
                     <div className="contact-form__line">
                        <Field className="contact-form__input" type="password" name="password"
                           placeholder="Пароль"
                        />
                        <ErrorMessage className='contact-form__input' component="span" name="password" />

                        <a href="#" className="contact-form__link">Забыли Пароль?</a>

                     </div>

                     {error && <div className="aside__title">No pass or log correc</div>}
                     <button className="contact-form__btn btn-block " type='submit'>Вход</button>
                  </div>
                  <div className="contact-form__column">
                     <h3 className="contact-form__name">Регистрация</h3>
                     <div className="contact-form__line">
                        <Link to="/registration" className="contact-form__btn btn-block btn-block_reg">ФИЗИЧЕСКОЕ ЛИЦО</Link>
                     </div>
                     <div className="contact-form__line contact-form__line_text">или</div>
                     <div className="contact-form__line">
                        <button disabled href="registration-company.html" className="contact-form__btn btn-block btn-block_reg">КОМПАНИЯ</button>
                     </div>
                  </div>
               </div>

            </Form>
         </Formik>
      </Popup>
   )
}

export default LogIn