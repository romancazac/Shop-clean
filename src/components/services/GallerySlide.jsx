import React from 'react'
import SlideProduct from '../SlideProduct'
import img1 from '../../asset/img/services/s1.png'
import img2 from '../../asset/img/services/s2.png'
import img3 from '../../asset/img/services/s3.png'
export const GallerySlide = () => {

   const images= [img1,img2,img3]
   return (
      <div className="about__column product-slide product-slide-services">
         <SlideProduct data={images} />
      </div>
   )
}
