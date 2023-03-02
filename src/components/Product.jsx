
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { addItems, setIsAdded } from '../redux/slices/cartSlice'
import { addInWish } from '../redux/slices/wishSlice'
import { removeInWish } from '../redux/slices/wishSlice'

const Product = ({ id, name, imageUrl, price, category, wish }) => {
   const dispatch = useDispatch();
   const { items } = useSelector(state => state.cart);
   const isMounted = useRef(false);
   const [addedWish, setAddedWish] = useState(false);

   const obj = {
      id,
      name,
      imageUrl: imageUrl[0],
      price,
      category
   }

   const onAddItem = () => {
      dispatch(addItems(obj))
   }

   const onAddWish = () => {
      dispatch(addInWish(obj))
      setAddedWish(true)
   }
   const addedInCart = () => {
      const findProduct = items.some((obj) => obj.id === id);
      return findProduct
   }

   useEffect(() => {
      if (isMounted.current) {
         const json = JSON.stringify(items);
         localStorage.setItem('cart', json)
      }
      isMounted.current = true
   }, [items])

   return (
      <div className="product-shop__column">

         <article className="product-shop__items">
            {wish &&
               <button class="products-cart__delete block-products__delete"
                  onClick={() => dispatch(removeInWish(id))}>
                  Удалить
               </button>

            }
            <Link to={`/shop/${id}`}>
               <img src={!wish ? imageUrl[0] : imageUrl} alt={name} className="product-shop__img" />
            </Link>
            {
               !wish &&
               <div className="product-shop__action action-product">
                  <button className="action-product__item action-product__item_compare _active"></button>
                  <button className={`action-product__item action-product__item_wish ${addedWish && "_active"}`} onClick={onAddWish}></button>
               </div>
            }

            <h4 className="product-shop__cat">{category}
            </h4>
            <Link to={`/shop/${id}`}>
               <h3 className="product-shop__name">{name}
               </h3>
            </Link>

            <span className="product-shop__price">{price} MDL</span>
            <button className={
               `product-shop__add btn-block ${addedInCart() && '_added'}`
            }
               onClick={onAddItem}
            ><span>В корзину</span>
            </button>
            {
               !wish &&
               <div className="product-shop__social">
                  <span>Поделиться:</span>
                  <ul className="product-shop__socials socials">
                     <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                     <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a></li>
                     <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a></li>
                     <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a></li>
                  </ul>
               </div>
            }

         </article>
      </div>
   )
}

export default Product