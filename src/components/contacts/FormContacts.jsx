import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { useAppServices } from '../../services/appServices';

export const FormContacts = () => {
   const { postMessageContacts, error, succes, loading } = useAppServices();
   console.log(Formik)
   return (
      <>
         <Formik
            initialValues={
               {
                  name: 't',
                  subname: '',
                  email: '',
                  number: '',
                  text: '',

               }}
            validationSchema={Yup.object({
               name: Yup.string().min(3, 'Min 3 simbol').required('Camp Obligatoriu!'),
               subname: Yup.string().min(3, 'Min 3 simbol').required('Camp Obligatoriu!'),
               email: Yup.string().email('Invalid email').required('Camp Obligatoriu!'),
               number: Yup.number().min(9, 'Min 9 simbol').integer().required('Camp Obligatoriu!')
            })}
            onSubmit={(values) => {
               postMessageContacts(JSON.stringify(values))
            }}
         >
            <Form className="form__form contact-form">

               <h3 className="contact-form__name">Остались вопросы?</h3>
               <h4 className="contact-form__subname">Уточните заполнив контактную форму.</h4>
               <div className="contact-form__row">
                  <div className="contact-form__column">
                     <div className="contact-form__line">
                        <Field className="contact-form__input"
                           type="text"
                           name="name"
                           placeholder="Имя" />
                        <ErrorMessage className='contact-form__input' component="span" name="name" />
                     </div>
                     <div className="contact-form__line">
                        <Field
                           className="contact-form__input"
                           type="text"
                           name="subname"
                           placeholder="Фамилия"
                        />
                        <ErrorMessage className='contact-form__input' component="span" name="subname" />
                     </div>

                     <div className="contact-form__line">
                        <Field
                           className="contact-form__input"
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
                           name="number"
                           placeholder="Телефон"
                        />
                        <ErrorMessage className='contact-form__input' component="span" name="number" />
                     </div>
                     <div className="contact-form__line">
                        <Field className="contact-form__input contact-form__input_text"
                           as="textarea"
                           name="text"
                           placeholder="Сообщение" />
                     </div>
                  </div>

               </div>
               {error && <div className="contact-form__line">{error}</div>}
               {loading && " Se expediaza"}
               {succes && " Expediat"}
               <button className="contact-form__btn btn-block" type='submit'>Отправить</button>
            </Form>
         </Formik>
      </>
   )
}
