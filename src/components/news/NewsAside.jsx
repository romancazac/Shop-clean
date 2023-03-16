

import { Link } from "react-router-dom"

export const NewsAside = ({images,title,date,id}) => {


   return (

               <div className="aside-news__row news">
                  <div className="news__body">

                     <div className="news__img-ibg"><img src={images[0]} alt="" /></div>
                     <div className="news__content">
                        <Link to={`/news/${id}`}>
                           <h4 className="news__title">{title}</h4>
                        </Link>
                        <span className="news__link">{date}</span>
                     </div>
                  </div>
               </div>
            )

   
}
