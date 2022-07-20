
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { addItems, setIsAdded} from '../redux/slices/cartSlice'

const Product = ({id,name,imageUrl,price}) => {
   const dispatch = useDispatch();
   const {isAdded} = useSelector(state => state.cart);

   const [added, setAdded] = React.useState(false)
   const onAddItem = () => {
     const item = {
        id,
        name,
        imageUrl:imageUrl[0],
        price
     }
     dispatch(addItems(item))
     setAdded(true)
   }

   return (
      <div className="product-shop__column">
         
         <article className="product-shop__items">
            <Link to={`/shop/${id}`}>
               <img src={imageUrl[0]} alt="" className="product-shop__img" />
            </Link>

            <div className="product-shop__action action-product">
               <button className="action-product__item action-product__item_compare _active"></button>
               <button className="action-product__item action-product__item_wish _active" ></button>
            </div>
            <h4 className="product-shop__cat">Моющие средства
            </h4>
            <Link to={`/shop/${id}`}>
               <h3 className="product-shop__name">{name}
               </h3>
            </Link>

            <span className="product-shop__price">{price} MDL</span>
            <button 
               className={added ? 'product-shop__add btn-block _added' :'product-shop__add btn-block'}
               onClick={onAddItem}
            
            ><span>В корзину</span></button>
            <div className="product-shop__social">
               <span>Поделиться:</span>
               <ul className="product-shop__socials socials">
                  <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                  <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a></li>
                  <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a></li>
                  <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a></li>
               </ul>
            </div>
         </article>
      </div>
   )
}

export default Product