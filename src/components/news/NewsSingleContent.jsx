import React from 'react'

export const NewsSingleContent = ({images,title,text}) => {
   return (
      <>

         <div className="single-row__img-ibg">
            <img src={images[0]} alt={title} />

         </div>
         <div className="single-row__text">
            <p className="single-row__p">
               {text}
            </p>

            <div className="single-row__images single-images">
               {
                  images.slice(1, 3).map((image) =>
                     <div className="single-images__column">
                        <div className="single-images__column-ibg">
                           <img src={image} alt={title} />
                        </div>
                     </div>
                  )
               }
            </div>

         </div>
      </>
   )
}
