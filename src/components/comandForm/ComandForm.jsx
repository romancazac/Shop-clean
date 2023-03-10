import React from 'react';
import { useAppServices } from '../../services/appServices';
import Popup from '../popup/Popup';

const ComandForm = ({area,id}) => {
    const {postComands} = useAppServices()
    const handleForm = (e) => {
        e.preventDefault();
        const dataForm = {
            area:area,
            name:e.target[0].value,
            phone:e.target[1].value,

        }
        postComands(JSON.stringify(dataForm))
        
    }
    return (
        <Popup id={id} >

				
				<form  className="form__form contact-form" onSubmit={handleForm}>
					<h3 className="contact-form__name">Отправить заявку</h3>
					<div className="contact-form__row">
						<div className="contact-form__column-popup">
							<div className="contact-form__line">
								<input className="contact-form__input" type="text" name="name" placeholder="Имя" required/>
							</div>
							<div className="contact-form__line">
								<input className="contact-form__input" type="text" name="number" placeholder="Номер телефона" required/>
							</div>
						</div>

					</div>
					<button type='submit' className="contact-form__btn btn-block ">Заказать</button>
				</form>

        </Popup>
    );
};

export default ComandForm;