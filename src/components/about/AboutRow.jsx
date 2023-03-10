import React from 'react'

export const AboutRow = ({ title, text, img }) => {
   return (
      <div className="about__row">
         <div className="about__column">
            {title && <h2 className="section__title">{title}</h2>}

            <p className="section__text">{text}</p>

         </div>
         <div className="about__column about__img-ibg_contain">
            <img src={img} alt="about" />

         </div>
      </div>
   )
}
