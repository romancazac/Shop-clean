import React from 'react';
import { CalculatorServices } from '../components/services/CalculatorServices';
import { Content } from '../components/services/Content';
import { GallerySlide } from '../components/services/GallerySlide';

const Services = () => {
    return (
        <>
        <div className="top-block" style={{backgroundImage: `url('img/services/bg-crumbs.png')`}} data-spollers="767,max" data-one-spoller>
				<div className="top-block__container">
					<div className="top-block__body">
						<h1 className="top-block__title">Моющие средства</h1>
						<h2 className="top-block__subtitle" data-spoller>Услуги</h2>
						<div className="top-block__items">
							<a href="#" className="top-block__item">
								<img src="../img/services/01.svg" alt="" className="top-block__icon"/>
								<span>Мойка ковров</span>
							</a>
							<a href="services-laundry.html" className="top-block__item">
								<img src="../img/services/02.svg" alt="" className="top-block__icon"/>
								<span>Прачечная</span>

							</a>
							<a href="#" className="top-block__item">
								<img src="../img/services/03.svg" alt="" className="top-block__icon"/>
								<span>Мойка фасадов и террас</span>


							</a>
							<a href="#" className="top-block__item">
								<img src="../img/services/04.svg" alt="" className="top-block__icon"/>
								<span>Чистка мебели</span>

							</a>
							<a href="#" className="top-block__item">
								<img src="../img/services/05.svg" alt="" className="top-block__icon"/>
								<span>Другие услуги</span>



							</a>
							<a href="#" className="top-block__item">
								<img src="../img/services/04.svg" alt="" className="top-block__icon"/>
								<span>Чистка мебели</span>

							</a>

						</div>
					</div>
				</div>
			</div>
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
								formId={"services1"}
							/>
						</div>
						<GallerySlide/>
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
								formId={"services2"}
							/>
						</div>
						<GallerySlide/>
					</div>

				</div>
			</section>
            
        </>
    );
};

export default Services;