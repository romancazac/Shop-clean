import React from 'react'

export const Content = ({title,text}) => {
   return (
      <>
         <h2 className="section__title">{title}</h2>
         <p className="section__text">
            {text}
         </p>
      </>
   )
}
