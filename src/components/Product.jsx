

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAdded } from '../hooks/added.hook'
import { removeInCompare } from '../redux/slices/compareSlice'



import { removeInWish } from '../redux/slices/wishSlice'
import { AddToCart } from './addToCart/AddToCart'
import AddToCompare from './addToCompare/AddToCompare'
import { AddToWishBtn } from './addToWishBtn/AddToWishBtn'

const Product = ({ id, name, imageUrl, price, category, wish,compare }) => {
   const dispatch = useDispatch();
   const { dataCart } = useSelector(state => state.cart);
   const { items } = useSelector(state => state.wish);
   const { dataCompare } = useSelector(state => state.compare);

   const {onFind } = useAdded()


   const obj = {
      id,
      name,
      imageUrl: imageUrl[0],
      price,
      category
   }



 
   return (
      

         <article className="product-shop__items">
            {(wish || compare) &&
               <button class="products-cart__delete block-products__delete"
                  onClick={() => `${wish ? dispatch(removeInWish(id)) : dispatch(removeInCompare(id)) }`}>
                  Удалить
               </button>

            }
            <Link to={`/shop/${id}`}>
               <img src={!(wish || compare) ? imageUrl[0] : imageUrl} alt={name} className="product-shop__img" />
            </Link>
            {
               !(wish || compare) &&
               <div className="product-shop__action action-product">
                  <AddToCompare obj={obj} added={onFind(dataCompare, id)} />
                  <AddToWishBtn obj={obj} added={onFind(items, id)}/>
               </div>
            }

            <h4 className="product-shop__cat">{category}
            </h4>
            <Link to={`/shop/${id}`}>
               <h3 className="product-shop__name">{name}
               </h3>
            </Link>

            <span className="product-shop__price">{price} MDL</span>
            <AddToCart added={onFind(dataCart, id)} obj={obj} />
            {
               !(wish || compare) &&
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
    
   )
}

export default Product