import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import logo1 from "../../asset/img/about/l1.png"
import logo2 from "../../asset/img/about/l2.png"
import logo3 from "../../asset/img/about/l3.png"
import logo4 from "../../asset/img/about/l4.png"
import logo5 from "../../asset/img/about/l5.png"
export const Parteners = () => {
   const parteners = [logo1,logo2,logo3,logo4,logo5,]
   return (
      <div className="parteners__logos">
       
            <Swiper
          
               className="parteners__body swiper-wrapper"
               slidesPerView={5}
               autoplay={true}
               loop={true}
            >
               {
                  parteners.map((logo,i) => 
                  <SwiperSlide className="parteners__logo-ibg_contain swiper-slide" key={i}>
                     <img src={logo} alt="logo" />
                  </SwiperSlide>
                  )

               }
               

               </Swiper>
        
      </div>
   )
}
