import React from 'react'
import { Link } from 'react-router-dom'
export const NewsCart = ({id,title,text,date,images}) => {


   return (
      <div className="news__column">
         <div className="news__body">
            <div className="news__date">
               <span>{date.slice(0,1)}</span>
               {date.slice(2,5)}
            </div>
            <div className="news__img-ibg"><img src={images[0]} alt={title} /></div>
            <div className="news__content">
               <h4 className="news__title">{title}</h4>
               <p className="news__text">
                  {text.slice(0,140)}...
               </p>
               <Link to={`/news/${id}`} className="news__link">Читать далее</Link>
            </div>
         </div>
      </div>
   )
}
