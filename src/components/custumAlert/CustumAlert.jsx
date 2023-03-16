import React,{useEffect,useState,useRef} from 'react'
import './custumAlert.scss'
export const CustumAlert = ({ message}) => {

      return (
         <div
            className="alert"

         >
            <p className='alert__text'>{message}</p>
         </div>
      )
   
}
