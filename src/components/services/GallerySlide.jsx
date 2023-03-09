import React from 'react'

export const GallerySlide = () => {
   return (
      <div className="about__column product-slide product-slide-services">
         <div className="product-slide__items gallery-top-services">
            <div className="swiper-wrapper" data-gallery>
               <a href="../img/services/s1.png"
                  className="product-slide__item product-slide__item-ibg swiper-slide">
                  <img src="../img/services/s1.png" alt="" />
               </a>
               <a href="../img/services/s2.png"
                  className="product-slide__item product-slide__item-ibg swiper-slide">
                  <img src="../img/services/s2.png" alt="" />
               </a>
               <a href="../img/services/s3.png"
                  className="product-slide__item product-slide__item-ibg swiper-slide">
                  <img src="../img/services/s3.png" alt="" />
               </a>
               <a href="../img/services/s1.png"
                  className="product-slide__item product-slide__item-ibg swiper-slide">
                  <img src="../img/services/s1.png" alt="" />
               </a>
            </div>

            <button className="product-slide-services__btn product-slide-services_l"></button>
            <button className="product-slide-services__btn product-slide-services_r"></button>
         </div>
         <div className="product-slide__nav nav-slide nav-slide-products">
            <div className="nav-slide__items gallery-thumbs-services">
               <div className="swiper-wrapper" data-gallery>
                  <a href="../img/services/s1.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
                     <img src="../img/services/s1.png" alt="" />
                  </a>
                  <a href="../img/services/s1.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
                     <img src="../img/services/s2.png" alt="" />
                  </a>
                  <a href="../img/services/s3.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
                     <img src="../img/services/s3.png" alt="" />
                  </a>
                  <a href="../img/services/s1.png" className="nav-slide__item nav-slide__item-ibg swiper-slide">
                     <img src="../img/services/s1.png" alt="" />
                  </a>
               </div>

            </div>

         </div>
      </div>
   )
}
