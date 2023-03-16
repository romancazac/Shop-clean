import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { NewsCart } from '../components/news/NewsCart'
import { useAppServices } from '../services/appServices'

export const News = () => {
   const [news, setNews] = useState([]);
   const {getNews} = useAppServices()
   useEffect(() => {
      getNews().then((data) => setNews(data) )
   }, [])
  
   return (

      <>
         <BreadCrumbs title="Новость" />
         <div className="news">
            <div className="news__container">
               <div className="news__row">
                  {news?.map((item) => <NewsCart {...item} key={item.id}/>)}
               </div>
               {/* @@include('html/_pagging.htm',{ }) */}
            </div>
         </div>
      </>
   )
}
