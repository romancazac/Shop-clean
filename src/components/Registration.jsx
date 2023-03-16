
import { Field, Form, Formik,ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {fetchRegistration} from '../redux/slices/userSlice';


const Registration = () => {
   const dispatch = useDispatch();
   const push = useNavigate()

   const handleRegister = async (values) => {
      dispatch(fetchRegistration(values));
      push('/shop')
   };

   const registerScheme = Yup.object().shape({
      username:Yup.string().min('3', 'Min 3 caracter').required('Required'),
      email:Yup.string().email('Invalid email').required('Required'),
      phone:Yup.number().min('9', 'Min 9 caracter').required('Required'),
      password:Yup.string().min('9', 'Min 9 caracter').required('Required').matches( )
      
   })


   return (
      <div className="registration">
         <div className="registratios__container">
            <div className="form-contacts__container">
               <div className="form-contacts__body">
                  <Formik
                     initialValues={{
                        username:'',
                        email:'',
                        phone:'',
                        password:''
                     }}
                     validationSchema={registerScheme}
                     onSubmit={handleRegister}
                  >
                     <Form className="form__form contact-form">

                        <h3 className="contact-form__name">РЕГИСТРАЦИЯ</h3>
                        <h4 className="contact-form__subname">ФИЗИЧЕСКОЕ ЛИЦО</h4>
                        <div className="contact-form__row">
                           <div className="contact-form__column">
                              <div className="contact-form__line">
                                 <Field
                                    className="contact-form__input"
                                    type="text"
                                    name="username"
                                    placeholder="Имя"

                                 />
                                 <ErrorMessage className='contact-form__input' component="span" name="name" />
                              </div>
                              <div className="contact-form__line">
                                 <Field className="contact-form__input" 
                                 type="text" 
                                 name="email" 
                                 placeholder="Эл. Почта"
                                   />
                                   <ErrorMessage className='contact-form__input' component="span" name="email" />
                              </div>
                           </div>
                           <div className="contact-form__column">
                              <div className="contact-form__line">
                                 <Field
                                    className="contact-form__input"
                                    type="text"
                                    name="phone"
                                    placeholder="Телефон"
                                 />
                                 <ErrorMessage className='contact-form__input' component="span" name="phone" />
                              </div>
                              <div className="contact-form__line">
                                 <Field
                                 className="contact-form__input" 
                                 type="password" 
                                 name="password" 
                                 placeholder="Пароль"
                                   />
                                   <ErrorMessage className='contact-form__input' component="span" name="password" />
                              </div>


                           </div>
                        </div>
                        <button className="contact-form__btn btn-block "
                           type='submit'
                        >Зарегистрироваться</button>
                     </Form>
                  </Formik>
               </div>

            </div>

         </div>
      </div>
   )
}

export default Registration