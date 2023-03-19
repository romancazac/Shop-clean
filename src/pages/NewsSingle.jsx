import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs';
import { NewsAside } from '../components/news/NewsAside';
import { NewsSingleContent } from '../components/news/NewsSingleContent';
import { Spinner } from '../components/spinner/Spinner';
import { useAppServices } from '../services/appServices';

export const NewsSingle = () => {
   const { getNews, getNew } = useAppServices()
   const { id } = useParams();
   const [newsSingle, setNewsSingle] = useState();
   const [allNews, setAllNews] = useState([]);

   useEffect(() => {
      getNew(id).then((data) => setNewsSingle(data))
      getNews().then((data) => setAllNews(data))
   }, [id])


   if (!newsSingle) {
      return <Spinner />
   }

   return (
      <>
      
         <Helmet>
            <title>Новости - {newsSingle?.title}</title>
            <meta name="description" content="Shop aplication" />
         </Helmet>
         <BreadCrumbs title={newsSingle?.title} />
         <div className="news">
            <div className="news__container">
               <h1 className="single-row__title">{newsSingle?.title}</h1>
               <div className="news__row single-row">
                  <div className="single-row__content">
                     <NewsSingleContent {...newsSingle} />
                  </div>
                  <aside className="single-row__aside aside-news">
                     {allNews.slice(0, 5).map((item) => <NewsAside {...item} />)}
                  </aside>
               </div>

            </div>
         </div>
      </>

   )
}
