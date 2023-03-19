import React from 'react';
import { CalculatorServices } from '../components/services/CalculatorServices';
import { Content } from '../components/services/Content';
import { GallerySlide } from '../components/services/GallerySlide';
import ComandForm from '../components/comandForm/ComandForm';
import BreadCrumbs from '../components/BreadCrumbs'
import { useState } from 'react';
import { Helmet } from 'react-helmet';
const Services = () => {
	const [formData, setFormData] = useState({})

	const onFormData = (obj) => {
		setFormData(obj)
	}

	return (
		<>
		
			<Helmet>
				<title>Услуги</title>
				<meta name="description" content="Shop aplication" />
			</Helmet>
			<BreadCrumbs title="Услуги" />
			<section className="section services">
				<div className="about__container ">
					<div className="about__row services__item">
						<div className="about__column">
							<Content
								title="Мойка ковров"
								text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
								ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
								eligendi reprehenderit harum dolore alias aliquid est!
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non? Et saepe odio quam
								cupiditate laboriosam debitis veritatis sequi pariatur quae. Corrupti, consequatur omnis saepe
								fuga inventore quod expedita labore."
							/>
							<CalculatorServices
								title='Рассчитайте стоимость, указав длину и ширину, или сразу площадь:'
								price={30}
								onFormData={onFormData}
							/>
						</div>
						<GallerySlide />
					</div>
					<div className="about__row services__item">
						<div className="about__column">
							<Content
								title="Чистка ковролина"
								text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
								ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
								eligendi reprehenderit harum dolore alias aliquid est!
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non? Et saepe odio quam
								cupiditate laboriosam debitis veritatis sequi pariatur quae. Corrupti, consequatur omnis saepe
								fuga inventore quod expedita labore."
							/>
							<CalculatorServices
								title='Рассчитайте стоимость, указав длину и ширину, или сразу площадь:'
								price={50}
								onFormData={onFormData}
							/>
						</div>
						<GallerySlide />
					</div>

				</div>
			</section>
			<ComandForm formData={formData} id={"services1"} />
		</>
	);
};

export default Services;