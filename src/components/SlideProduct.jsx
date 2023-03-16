import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import Light from './light/Light';

const SlideProduct = ({ data, vertical="vertical" }) => {

   const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
   const thumbsParams = {
      modules:[FreeMode, Navigation, Thumbs],
      onSwiper:setThumbsSwiper,
      slidesPerView:3,
      freeMode:true,
      direction:vertical,
      watchOverflow: true,
      navigation:true,
      navigation: {
         nextEl: '.nav-slide__dow',
         prevEl: '.nav-slide__up'
       },
   }

   return (
      <div className="product__column product-slide">
         <div className="product-slide__nav nav-slide ">
            <div className="nav-slide__items gallery-thumbs">
               <Swiper {...thumbsParams}>
                  {
                     data?.map((item, i) => <SwiperSlide key={i}>
                        <div className="nav-slide__item ">
                           
                           <img src={item} alt="" />
                        </div>
                     </SwiperSlide>
                     )
                  }
               </Swiper>
            </div>
            <div className="nav-slide__control">
               <div className="nav-slide__up" ></div>
               <div className="nav-slide__dow"></div>
            </div>

         </div>
         <div className="product-slide__left">
            <div className="product-slide__items gallery-top">
               <Swiper 
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode,Thumbs]}>
                  {
                     data?.map((item, i) => <SwiperSlide key={i}>
                        <Light>
                        <a href={item} className="product-slide__item">
                           <img src={item} alt="img" />
                        </a>
                        </Light>
                     </SwiperSlide>
                     )
                  }
               </Swiper>

            </div>
         </div>
      </div >
   )
}

export default SlideProduct