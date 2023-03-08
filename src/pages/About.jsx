import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import LightGallery from 'lightgallery/react';
import Light from '../components/light/Light';

const About = () => {
    return (
        <>
        <BreadCrumbs title="О нас"/>
        <section className="section about">
        <div className="about__container">
            <div className="about__row">
                <div className="about__column">
                    <h2 className="section__title">О нас</h2>
                    <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
                        ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
                        eligendi reprehenderit harum dolore alias aliquid est! </p>
                    <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
                        ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
                        eligendi reprehenderit harum dolore alias aliquid est! </p>
                    <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
                        ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
                        eligendi reprehenderit harum dolore alias aliquid est! </p>
                </div>
                <div className="about__column about__img-ibg_contain">
                    <img src="../img/about/01.png" alt=""/>

                </div>
            </div>
            <div className="about__row">
                <div className="about__column">

                    <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
                        ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
                        eligendi reprehenderit harum dolore alias aliquid est! </p>
                    <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
                        ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
                        eligendi reprehenderit harum dolore alias aliquid est! </p>
                    <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
                        ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
                        eligendi reprehenderit harum dolore alias aliquid est! </p>
                </div>
                <div className="about__column about__img-ibg_contain">
                    <img src="../img/about/02.png" alt=""/>

                </div>
            </div>


        </div>
        </section>
        <section className="section parteners">
            <div className="about__wrapper">
                <div className="about__container">
                    <h2 className="section__title">Партнеры</h2>
                </div>
                <div className="about__bg">
                    <div className="about__container">
                        <div className="parteners__logos">
                            <div className="parteners__body swiper-wrapper">
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l1.png" alt=""/>
                                </div>
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l2.png" alt=""/>
                                </div>
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l3.png" alt=""/>
                                </div>
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l4.png" alt=""/>
                                </div>
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l5.png" alt=""/>
                                </div>
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l6.png" alt=""/>
                                </div>
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l1.png" alt=""/>
                                </div>
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l2.png" alt=""/>
                                </div>
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l3.png" alt=""/>
                                </div>
                                <div className="parteners__logo-ibg_contain swiper-slide">
                                    <img src="../img/about/l4.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
        <div className="about-video">
            <div className="about-video__container">
                <Light classN="about-video__video video-box">
                    <a className="video-box__video-ibg" data-src="https://www.youtube.com/watch?v=p9rgHcO26hg"
                        data-poster="../img/products/video.png">
                        <img src="../img/products/video.png"/>

                    </a>
                </Light>

            </div>
        </div>
    </>
    );
};

export default About;