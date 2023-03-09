import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import LightGallery from 'lightgallery/react';
import Light from '../components/light/Light';
import { AboutRow } from '../components/about/AboutRow';
import about from "../asset/img/about/01.png";
import about2 from "../asset/img/about/02.png";
import posterVideo from "../asset/img/products/video.png"
import { Parteners } from '../components/about/Parteners';

const About = () => {
    return (
        <>
            <BreadCrumbs title="О нас" />
            <section className="section about">
                <div className="about__container">
                    <AboutRow
                        title="О нас"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
                    ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
                    eligendi reprehenderit harum dolore alias aliquid est!"
                        img={about}
                    />
                    <AboutRow
                        title="О нас"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
                    ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
                    eligendi reprehenderit harum dolore alias aliquid est!"
                        img={about2}
                    />
                    <AboutRow
                        title={false}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id sed
                    ducimus officia reiciendis laboriosam distinctio beatae quaerat vero molestias. Nisi ut unde
                    eligendi reprehenderit harum dolore alias aliquid est!"
                        img={about2}
                    />

                </div>
            </section>
            <section className="section parteners">
                <div className="about__wrapper">
                    <div className="about__container">
                        <h2 className="section__title">Партнеры</h2>
                    </div>
                    <div className="about__bg">
                        <div className="about__container">
                            <Parteners/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="about-video">
                <div className="about-video__container">
                    <Light classN="about-video__video video-box">
                        <a className="video-box__video-ibg" data-src="https://www.youtube.com/watch?v=p9rgHcO26hg"
                            data-poster={posterVideo}>
                            <img src={posterVideo} />

                        </a>
                    </Light>

                </div>
            </div>
        </>
    );
};

export default About;