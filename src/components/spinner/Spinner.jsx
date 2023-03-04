import React from 'react'
import  gif from '../../asset/img/spener.gif';


export const Spinner = () => {
  return (
    <div className='spinner'>
        <img src={gif} alt="spinner" className="spinner__gif" /> 
    </div>
  )
}
