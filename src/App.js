import QueryString from "qs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Route,Routes } from 'react-router-dom';

import qs from 'qs';

// import { data } from "./db";

import MainLayout from "./layouts/MainLayout";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import ShopSingle from "./pages/ShopSingle";
import { setCategoryId, setLimitPage, setPaginationPage, setSelectedPrice, setSortActive, setFilters } from "./redux/slices/filterSlice";
import { fetchProducts } from './redux/slices/productsSlice'
import Profile from "./pages/Profile";
import Registration from "./components/Registration";



function App() {

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isSearch = React.useRef(false);
  // const isMounted = React.useRef(false);


  const { categoryId, paginationPage, limitPage, sortActive} = useSelector(state => state.filter)

  const category = `${categoryId > 0 ? `&category=${categoryId}` : ''}`;
  const page = `&page=${paginationPage}&limit=${limitPage}`;
  const sort = `&sortby=${sortActive}`;

  // let updatedList = list;
  const getProducts = () => {
    dispatch(fetchProducts({
      category,
      page,
      sort,

    }


    ))

  }


  const onCategoryIndex = React.useCallback((id) => {
    dispatch(setCategoryId(id))
  });
  const onPaginationPage = React.useCallback((number) => {
    dispatch(setPaginationPage(number))
  });
  const onLimitPage = React.useCallback((number) => {
    dispatch(setLimitPage(number))
  });
  const onSortProp = React.useCallback((value) => {
    dispatch(setSortActive(value))

  });


  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({

  //       categoryId
  
  //     })
  //     navigate(`shop/?${queryString}`);
  //   }
  
    
  //   isMounted.current = true;
  // }, [categoryId]);

  //   React.useEffect(() => {
  //     if (window.location.search) {
  //       const params = qs.parse(window.location.search.substring(1));
  //       dispatch(setFilters({...params}))

  //       isSearch.current = true;
  //     }
  //   }, []);


  React.useEffect(() => {
    getProducts()

  }, [onCategoryIndex, onPaginationPage, onLimitPage, onSortProp]);



  return (

    <Routes>
      <Route path="/" element={<MainLayout />}>


        <Route path="shop" element={<Shop
          onCategoryIndex={onCategoryIndex}
          onPaginationPage={onPaginationPage}
          onLimitPage={onLimitPage}
          onSortProp={onSortProp}
        />}>

        </Route >
        <Route path="/shop/:id" element={<ShopSingle />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/Registration" element={<Registration/>} />
      </Route >
    </Routes>

  );
}

export default App;
