import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { AddToCart } from '../components/addToCart/AddToCart';
import { Quantity } from '../components/quantity/Quantity';
import SlideProduct from '../components/SlideProduct';
import { Spinner } from '../components/spinner/Spinner';
import Tabs from '../components/tabs/Tabs';
import { BASE_URL } from '../constants';
import { useAppServices } from '../services/appServices';

const ShopSingle = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { dataCart } = useSelector(state => state.cart)
  const {getProduct} = useAppServices()
  const countFind = () => {
    const find = dataCart.find((obj) => obj.id == id);
    return find?.count
  }

  useEffect(() => {
    getProduct(id).then((data) => setProduct(data))
  }, []);

  if (!product) {
    return <Spinner />
  }

  return (
    <>
    
      <Helmet>
        <title>{product?.name}</title>
        <meta name="description" content="Shop aplication" />
      </Helmet>
      <div className="shop">
        <div className="shop__container">
          <div className="shop__product product">
            <div className="product__row">
              <SlideProduct data={product?.imageUrl} />

              <div className="product__column product-info">

                <ul className="product-info__crumb top-panel__breadcrumb breadcrumb">
                  <li><a href="shop.html" className="breadcrumb__item">Товары</a></li>
                  <li><a className="breadcrumb__item breadcrumb__item_active">Моющие средства</a></li>
                </ul>

                <h4 className="product-info__name">{product?.name}
                </h4>
                <span className="product-info__price product-shop__price">{product?.price} MDL</span>
                <h5 className="product-info__subname">Описание
                </h5>
                <p className="product-info__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat imperdiet elit,
                  facilisis ac egestas elit turpis libero. Vel vitae aliquet odio tellus justo, odio
                  malesuada. Nullam non nisl dolor leo, hendrerit. Egestas sociis sollicitudin ultrices
                  aenean et vestibulum cursus leo malesuada. Mauris, bibendum nulla id ridiculus turpis
                  faucibus. Est vitae, venenatis, sed natoque at nunc.
                </p>
                <div className="product-info__links">
                  <Quantity id={Number(id)} count={countFind()} />
                  <AddToCart added={false} obj={product} />
                </div>
                <div className="product-info__action action-product">
                  <button className="action-product__item action-product__item_compare _active">Добавить в
                    избранные</button>
                  <button className="action-product__item action-product__item_wish _active">Добавить к
                    сравнению</button>
                </div>
                <div className="product-info__social">
                  <div className="product-shop__social">
                    <span className="product-info__subname">Поделиться:</span>
                    <ul className="product-shop__socials socials">
                      <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                      <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a>
                      </li>
                      <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a>
                      </li>
                      <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a>
                      </li>
                    </ul>

                  </div>
                  *цена товара действует в пределах доступности на складе товара. Уточните наличие по
                  телефону.
                </div>





              </div>
            </div>

          </div>
        </div>
        <div className="shop__tabs">
          <div className="shop__container">
            <Tabs />
          </div>

        </div>
        <section className="similar-products">
          <div className="similar-products__container">
            <h2 className="similar-products__title">Похожие товары</h2>
            <div className="similar-products__products">
              <div className="similar-products__sliders swiper-wrapper">
                <div className="similar-products__column product-shop swiper-slide">
                  <article className="product-shop__items">
                    <a href="#">
                      <img src="../img/products/01.png" alt="" className="product-shop__img" />
                    </a>

                    <div className="product-shop__action action-product">
                      <button className="action-product__item action-product__item_compare _active"></button>
                      <button className="action-product__item action-product__item_wish _active"></button>
                    </div>
                    <h4 className="product-shop__cat">Моющие средства
                    </h4>
                    <a href="#">
                      <h3 className="product-shop__name">Zuma Clean D10 5л
                      </h3>
                    </a>

                    <span className="product-shop__price">320.00 MDL</span>
                    <button className="product-shop__add btn-block _added"><span>В корзину</span></button>
                    <div className="product-shop__social">
                      <span>Поделиться:</span>
                      <ul className="product-shop__socials socials">
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className="similar-products__column product-shop swiper-slide">
                  <article className="product-shop__items">
                    <a href="#">
                      <img src="../img/products/02.png" alt="" className="product-shop__img" />
                    </a>

                    <div className="product-shop__action action-product">
                      <button className="action-product__item action-product__item_compare _active"></button>
                      <button className="action-product__item action-product__item_wish _active"></button>
                    </div>
                    <h4 className="product-shop__cat">Моющие средства
                    </h4>
                    <a href="#">
                      <h3 className="product-shop__name">Zuma Clean D10 5л
                      </h3>
                    </a>

                    <span className="product-shop__price">320.00 MDL</span>
                    <button className="product-shop__add btn-block _added"><span>В корзину</span></button>
                    <div className="product-shop__social">
                      <span>Поделиться:</span>
                      <ul className="product-shop__socials socials">
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className="similar-products__column product-shop swiper-slide">
                  <article className="product-shop__items">
                    <a href="#">
                      <img src="../img/products/03.png" alt="" className="product-shop__img" />
                    </a>

                    <div className="product-shop__action action-product">
                      <button className="action-product__item action-product__item_compare _active"></button>
                      <button className="action-product__item action-product__item_wish _active"></button>
                    </div>
                    <h4 className="product-shop__cat">Моющие средства
                    </h4>
                    <a href="#">
                      <h3 className="product-shop__name">Zuma Clean D10 5л
                      </h3>
                    </a>

                    <span className="product-shop__price">320.00 MDL</span>
                    <button className="product-shop__add btn-block _added"><span>В корзину</span></button>
                    <div className="product-shop__social">
                      <span>Поделиться:</span>
                      <ul className="product-shop__socials socials">
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className="similar-products__column product-shop swiper-slide">
                  <article className="product-shop__items">
                    <a href="#">
                      <img src="../img/products/04.png" alt="" className="product-shop__img" />
                    </a>

                    <div className="product-shop__action action-product">
                      <button className="action-product__item action-product__item_compare _active"></button>
                      <button className="action-product__item action-product__item_wish _active"></button>
                    </div>
                    <h4 className="product-shop__cat">Моющие средства
                    </h4>
                    <a href="#">
                      <h3 className="product-shop__name">Zuma Clean D10 5л
                      </h3>
                    </a>

                    <span className="product-shop__price">320.00 MDL</span>
                    <button className="product-shop__add btn-block _added"><span>В корзину</span></button>
                    <div className="product-shop__social">
                      <span>Поделиться:</span>
                      <ul className="product-shop__socials socials">
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className="similar-products__column product-shop swiper-slide">
                  <article className="product-shop__items">
                    <a href="#">
                      <img src="../img/products/05.png" alt="" className="product-shop__img" />
                    </a>

                    <div className="product-shop__action action-product">
                      <button className="action-product__item action-product__item_compare _active"></button>
                      <button className="action-product__item action-product__item_wish _active"></button>
                    </div>
                    <h4 className="product-shop__cat">Моющие средства
                    </h4>
                    <a href="#">
                      <h3 className="product-shop__name">Zuma Clean D10 5л
                      </h3>
                    </a>

                    <span className="product-shop__price">320.00 MDL</span>
                    <button className="product-shop__add btn-block _added"><span>В корзину</span></button>
                    <div className="product-shop__social">
                      <span>Поделиться:</span>
                      <ul className="product-shop__socials socials">
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className="similar-products__column product-shop swiper-slide">
                  <article className="product-shop__items">
                    <a href="#">
                      <img src="../img/products/01.png" alt="" className="product-shop__img" />
                    </a>

                    <div className="product-shop__action action-product">
                      <button className="action-product__item action-product__item_compare _active"></button>
                      <button className="action-product__item action-product__item_wish _active"></button>
                    </div>
                    <h4 className="product-shop__cat">Моющие средства
                    </h4>
                    <a href="#">
                      <h3 className="product-shop__name">Zuma Clean D10 5л
                      </h3>
                    </a>

                    <span className="product-shop__price">320.00 MDL</span>
                    <button className="product-shop__add btn-block _added"><span>В корзину</span></button>
                    <div className="product-shop__social">
                      <span>Поделиться:</span>
                      <ul className="product-shop__socials socials">
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className="similar-products__column product-shop swiper-slide">
                  <article className="product-shop__items">
                    <a href="#">
                      <img src="../img/products/01.png" alt="" className="product-shop__img" />
                    </a>

                    <div className="product-shop__action action-product">
                      <button className="action-product__item action-product__item_compare _active"></button>
                      <button className="action-product__item action-product__item_wish _active"></button>
                    </div>
                    <h4 className="product-shop__cat">Моющие средства
                    </h4>
                    <a href="#">
                      <h3 className="product-shop__name">Zuma Clean D10 5л
                      </h3>
                    </a>

                    <span className="product-shop__price">320.00 MDL</span>
                    <button className="product-shop__add btn-block _added"><span>В корзину</span></button>
                    <div className="product-shop__social">
                      <span>Поделиться:</span>
                      <ul className="product-shop__socials socials">
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className="similar-products__column product-shop swiper-slide">
                  <article className="product-shop__items">
                    <a href="#">
                      <img src="../img/products/01.png" alt="" className="product-shop__img" />
                    </a>

                    <div className="product-shop__action action-product">
                      <button className="action-product__item action-product__item_compare _active"></button>
                      <button className="action-product__item action-product__item_wish _active"></button>
                    </div>
                    <h4 className="product-shop__cat">Моющие средства
                    </h4>
                    <a href="#">
                      <h3 className="product-shop__name">Zuma Clean D10 5л
                      </h3>
                    </a>

                    <span className="product-shop__price">320.00 MDL</span>
                    <button className="product-shop__add btn-block _added"><span>В корзину</span></button>
                    <div className="product-shop__social">
                      <span>Поделиться:</span>
                      <ul className="product-shop__socials socials">
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a>
                        </li>
                        <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>

  )
}

export default ShopSingle