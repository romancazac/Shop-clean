import { ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import { useAppServices } from '../../services/appServices';
import Popup from '../popup/Popup';
import { Spinner } from '../spinner/Spinner';

const ComandForm = ({ id, formData }) => {
    const { postComands, error,loading,succes } = useAppServices();


console.log(loading)
    return (
        <Popup id={id} >
            <Formik
                initialValues={{
                    name: '',
                    phone: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().min(3, 'Min 3 simbol').required('Camp Obligatoriu!'),
                    phone: Yup.number().min(9, 'Min 9 simbol').integer().required('Camp Obligatoriu!')
                })}
                onSubmit={async (values) => {
                    await postComands(JSON.stringify({ ...values, ...formData }));
                    values.name = '';
                    values.phone = '';  
                }
                } >
              {({ errors }) => (
                <Form className="form__form contact-form" errors={errors}>
                    <h3 className="contact-form__name">Отправить заявку</h3>
                    <div className="contact-form__row">
                        <div className="contact-form__column-popup">
                            <div className="contact-form__line">
                                <Field
                                    className={`contact-form__input ${errors && errors.name ? "red" : ''}`}
                                    type="text"
                                    name="name"
                                    placeholder="Имя"
                                />
                                <ErrorMessage className='contact-form__input' component="span" name="name" />
                            </div>
                            <div className="contact-form__line">
                                <Field
                                    className={`contact-form__input ${errors && errors.phone ? "red" : ''}`}
                                    type="text"
                                    name="phone"
                                    placeholder="Номер телефона"
                                />
                                <ErrorMessage className='contact-form__input' component="span" name="phone" />

                            </div>
                            {error && <div className="contact-form__line">{error}</div>}
                            {loading && " Se expediaza" }
                            {succes && " Expediat"}
                            
                        </div>
                    </div>
                    <button type="submit" className="contact-form__btn btn-block ">Заказать</button>
                </Form>

            )}

            </Formik>
        </Popup>
    );
};

export default ComandForm;