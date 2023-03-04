import React, { useState } from 'react'
import { memo } from 'react'

import { useSelector } from 'react-redux'

import BreadCrumbs from '../components/BreadCrumbs'
import Categories from '../components/Categories'
import { GridBtn } from '../components/gridBtn/GridBtn'
import Pagination from '../components/pagination/Pagination'
import Product from '../components/Product'
import RangeSlider from '../components/sliderRange/SliderRange'
import Sort from '../components/Sort'
import { Spinner } from '../components/spinner/Spinner'
import { categories } from '../db'




const Shop = ({ onCategoryIndex, onPaginationPage, onLimitPage, onSortProp }) => {
   const [grid, setGrid] = useState("grid-5")
   const { products, status } = useSelector(state => state.products)
   const { limitPage } = useSelector(state => state.filter)
   const numberPage = [10, 20, 25, 30];
   const [selectedPrice, setSelectedPrice] = React.useState([0, 5000]);
   const [list, setList] = React.useState(products);


   const handleChangePrice = (e, value) => {
      setSelectedPrice(value);
   };

   const minPrice = selectedPrice[0];
   const maxPrice = selectedPrice[1];

   const applyFilters = () => {
      let updatedList = products;
      // Price Filter
      updatedList = updatedList.filter(
         (item) => item.price >= minPrice && item.price <= maxPrice

      );

      setList(updatedList);
   }

   React.useEffect(() => {
      applyFilters();
   }, [selectedPrice, products]);


   return (


      <div className="shop">
         <BreadCrumbs title="Магазин" />
         <div className="shop__container">
            <div className="shop__row">
               <aside className="shop__aside aside">
                  <section className="aside__section">
                     <h3 className="aside__title">Фильтр по цене:</h3>
                     <div className="aside__range range-slide">
                        <div className="range-slide__inputs">
                           <div className="range-slide__col">
                              {minPrice} MDL
                           </div>
                           <div className="range-slide__col">
                              {maxPrice}  MDL
                           </div>

                        </div>
                        <RangeSlider handleChangePrice={handleChangePrice} selectedPrice={selectedPrice} />
                     </div>
                  </section>
                  <section className="aside__section aside-category" data-spollers data-one-spoller>
                     <h3 className="aside__title">Категории</h3>
                     {
                        categories.map((item) => <Categories {...item} key={item.id} item={item} onCategoryIndex={onCategoryIndex} />)
                     }


                  </section>
                  <section className="aside__section aside-brand" >
                     <h3 className="aside__title">Фильтр по бренду:</h3>
                     <div className="aside-brand__row">
                        <img src="../img/brand1.png" alt="" className="aside-brand__logo" />
                        <a href="#" className="aside-brand__name">Domestos</a>
                        <span className="aside-brand__count">
                           2
                        </span>
                     </div>
                     <div className="aside-brand__row">
                        <img src="../img/brand2.png" alt="" className="aside-brand__logo" />
                        <a href="#" className="aside-brand__name">Kolin’s</a>
                        <span className="aside-brand__count">
                           3
                        </span>
                     </div>
                     <div className="aside-brand__row">
                        <img src="../img/brand3.png" alt="" className="aside-brand__logo" />
                        <a href="#" className="aside-brand__name">Cif</a>
                        <span className="aside-brand__count">
                           4
                        </span>
                     </div>
                  </section>
               </aside>
               <div className="shop__content">
                  <div className="shop__top top-panel">
                     <div className="top-panel__left">
                        <ul className="top-panel__breadcrumb breadcrumb">
                           <li><a href="shop.html" className="breadcrumb__item">Товары</a></li>
                           <li><a className="breadcrumb__item breadcrumb__item_active">Моющие средства </a></li>
                        </ul>
                        <div className="top-panel__display display">
                           <span className="top-panel__name">Отображать:</span>

                           {
                              numberPage.map((number) =>
                                 <a href="#" className={limitPage === number ? 'display__btn display__btn_active' : 'display__btn'}
                                    onClick={() => onLimitPage(number)}>{number}</a>
                              )
                           }
                        </div>
                        <div className="top-panel__sort sort">
                           <Sort onSortProp={onSortProp} />
                        </div>
                     </div>
                     <div className="top-panel__rigth grid">
                        <GridBtn setGrid={setGrid} />
                     </div>
                  </div>
                  <div className="shop__product product-shop">
                     <div className={`product-shop__row product-shop__row-style ${grid}`}>
                        {status === "loading" || list.length <= 0 ?
                           <Spinner />
                           :

                           list.map((item) =>
                              <Product {...item} key={item.id} />
                           )

                        }
                     </div>

                  </div>

                  <Pagination onPaginationPage={onPaginationPage} />

               </div>
            </div>
         </div>
      </div>
   )
}

export default Shop