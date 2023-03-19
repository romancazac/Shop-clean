import React from 'react'
import { Link } from 'react-router-dom'
import bgOrange from "../asset/img/bg-orange.png"
import bgBlue from "../asset/img/bg-blue.png"
import mainS from "../asset/img/main-services.png"
import mainP from "../asset/img/mai-products.png"
import { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

export const Home = () => {

   const [loaded, setLoaded] = useState(false)
   useEffect(() => {
      setLoaded(true)
   }, [])
   return (
      <>
         <Helmet>            
            <title>Главная</title>
            <meta name="description" content="Shop aplication" />
         </Helmet>   
         <section className={`main-section ${loaded ? "loaded" : ''}`}>
            <div className="main-section__bg main-section__bg_l">
               <img src={bgOrange} alt="orange" />
            </div>
            <div className="main-section__bg main-section__bg_r">
               <img src={bgBlue} alt="blue" />
            </div>
            <div className="main-section__row">
               <div className="main-section__content">
                  <h2 className="main-section__title">Услуги</h2>
                  <Link to="/services" className="main-section__link btn-block btn-block_w">Смотреть каталог</Link>
               </div>
               <div className="main-section__img-ibg">
                  <img src={mainS} alt="" />
               </div>

            </div>
            <div className="main-section__row">
               <div className="main-section__content">
                  <h2 className="main-section__title">Товары</h2>
                  <Link to="/shop" className="main-section__link btn-block btn-block_w">Смотреть каталог</Link>
               </div>
               <div className="main-section__img-ibg">
                  <img src={mainP} alt="" />
               </div>

            </div>
         </section>
      </>
   )
}
