import React from 'react';

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
							<h2 className="section__title">Мойка ковров</h2>
							<p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
								ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
								eligendi reprehenderit harum dolore alias aliquid est!
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non? Et saepe odio quam
								cupiditate laboriosam debitis veritatis sequi pariatur quae. Corrupti, consequatur omnis saepe
								fuga inventore quod expedita labore.
							</p>
							<div className="service-item">
								<div className="service-item_price">
									Цена: <span><span>30</span> MDL/m²</span>
								</div>
								<div className="service-item_data ">
									<form method="post" className="service-item__form">
										<h4 className="service-item__title">Рассчитайте стоимость, указав длину и ширину, или сразу площадь:</h4>
										<div className="service-item__row">										
											<div className="fields-two service-calc-field ">										
												<div className="input-par">
													<input type="text" name="length" placeholder="Длина"/>
													<span>m</span>
												</div>
												<span className="service-item__icon">x</span>
												<div className="input-par">
													<input type="text" name="width" placeholder="Ширина"/>
													<span>m</span>
												</div>
											</div>
											<div className="fields-devider">или</div>
											<div className="field-one service-calc-field">
												<div className="input-par">
													<input type="text" name="area" placeholder="Площадь"/>
													<span>m²</span>
												</div>
											</div>
										</div>

										<div className="service-item_result">
											Стоимость: <span>от <span>  -  </span> MDL</span>
										</div>
									</form>

									<button className="btn-block" type="button" data-popup="#comand-services">
										Заказать услугу</button>
								</div>
							</div>
						</div>
						<div className="about__column product-slide product-slide-services">
							<div className="product-slide__items gallery-top-services">
								<div className="swiper-wrapper" data-gallery>
									<a href="../img/services/s1.png"
										className="product-slide__item product-slide__item-ibg swiper-slide">
										<img src="../img/services/s1.png" alt=""/>
									</a>
									<a href="../img/services/s2.png"
										className="product-slide__item product-slide__item-ibg swiper-slide">
										<img src="../img/services/s2.png" alt=""/>
									</a>
									<a href="../img/services/s3.png"
										className="product-slide__item product-slide__item-ibg swiper-slide">
										<img src="../img/services/s3.png" alt=""/>
									</a>
									<a href="../img/services/s1.png"
										className="product-slide__item product-slide__item-ibg swiper-slide">
										<img src="../img/services/s1.png" alt=""/>
									</a>
								</div>

								<button className="product-slide-services__btn product-slide-services_l"></button>
								<button className="product-slide-services__btn product-slide-services_r"></button>
							</div>
							<div className="product-slide__nav nav-slide nav-slide-products">
								<div className="nav-slide__items gallery-thumbs-services">
									<div className="swiper-wrapper" data-gallery>
										<a href="../img/services/s1.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
											<img src="../img/services/s1.png" alt=""/>
										</a>
										<a href="../img/services/s1.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
											<img src="../img/services/s2.png" alt=""/>
										</a>
										<a href="../img/services/s3.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
											<img src="../img/services/s3.png" alt=""/>
										</a>
										<a href="../img/services/s1.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
											<img src="../img/services/s1.png" alt=""/>
										</a>
									</div>

								</div>

							</div>



						</div>
					</div>
					<div className="about__row services__item">
						<div className="about__column">
							<h2 className="section__title">Чистка ковролина</h2>
							<p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
								ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
								eligendi reprehenderit harum dolore alias aliquid est!
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non? Et saepe odio quam
								cupiditate laboriosam debitis veritatis sequi pariatur quae. Corrupti, consequatur omnis saepe
								fuga inventore quod expedita labore.
							</p>
							<div className="service-item">
								<div className="service-item_price">
									Цена: <span><span>30</span> MDL/m²</span>
								</div>
								<div className="service-item_data ">
									<form method="post" className="service-item__form">
										<h4 className="service-item__title">Рассчитайте стоимость, указав длину и ширину, или сразу площадь:</h4>
										<div className="service-item__row">										
											<div className="fields-two service-calc-field ">										
												<div className="input-par">
													<input type="text" name="length" placeholder="Длина"/>
													<span>m</span>
												</div>
												<span className="service-item__icon">x</span>
												<div className="input-par">
													<input type="text" name="width" placeholder="Ширина"/>
													<span>m</span>
												</div>
											</div>
											<div className="fields-devider">или</div>
											<div className="field-one service-calc-field">
												<div className="input-par">
													<input type="text" name="area" placeholder="Площадь"/>
													<span>m²</span>
												</div>
											</div>
										</div>

										<div className="service-item_result">
											Стоимость: <span>от <span> - </span> MDL</span>
										</div>
									</form>

									<button  className="btn-block" type="button" 
										  data-popup="#comand-services">
										Заказать услугу</button>
								</div>
							</div>
						</div>
						<div className="about__column product-slide product-slide-services">
							<div className="product-slide__items gallery-top-services">
								<div className="swiper-wrapper" data-gallery>
									<a href="../img/services/s1.png"
										className="product-slide__item product-slide__item-ibg swiper-slide">
										<img src="../img/services/s1.png" alt=""/>
									</a>
									<a href="../img/services/s2.png"
										className="product-slide__item product-slide__item-ibg swiper-slide">
										<img src="../img/services/s2.png" alt=""/>
									</a>
									<a href="../img/services/s3.png"
										className="product-slide__item product-slide__item-ibg swiper-slide">
										<img src="../img/services/s3.png" alt=""/>
									</a>
									<a href="../img/services/s1.png"
										className="product-slide__item product-slide__item-ibg swiper-slide">
										<img src="../img/services/s1.png" alt=""/>
									</a>
								</div>

								<button className="product-slide-services__btn product-slide-services_l"></button>
								<button className="product-slide-services__btn product-slide-services_r"></button>
							</div>
							<div className="product-slide__nav nav-slide nav-slide-products">
								<div className="nav-slide__items gallery-thumbs-services">
									<div className="swiper-wrapper" data-gallery>
										<a href="../img/services/s1.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
											<img src="../img/services/s1.png" alt=""/>
										</a>
										<a href="../img/services/s1.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
											<img src="../img/services/s2.png" alt=""/>
										</a>
										<a href="../img/services/s3.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
											<img src="../img/services/s3.png" alt=""/>
										</a>
										<a href="../img/services/s1.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
											<img src="../img/services/s1.png" alt=""/>
										</a>
									</div>

								</div>

							</div>



						</div>
					</div>

				</div>
			</section>
            
        </>
    );
};

export default Services;