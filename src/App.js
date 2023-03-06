import { useCallback, useState, useEffect, useRef } from "react";
import QueryString from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Route, Routes } from 'react-router-dom';

import qs from 'qs';

// import { data } from "./db";

import MainLayout from "./layouts/MainLayout";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import ShopSingle from "./pages/ShopSingle";
import { setCategoryId, setLimitPage, setPaginationPage, setSelectedPrice, setSortActive, setFilters, setSearch } from "./redux/slices/filterSlice";
import { fetchProducts } from './redux/slices/productsSlice'
import Profile from "./pages/Profile";
import Registration from "./components/Registration";
import { fetchAuthMe } from './redux/slices/userSlice';
import { Wish } from "./pages/Wish";
import Compare from "./pages/Compare";


function App() {

  // const navigate = useNavigate();
  // const isSearch = React.useRef(false);
  // const isMounted = React.useRef(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { categoryId, limitPage, sortActive, searchProduct, paginationPage } = useSelector(state => state.filter)




  const category = `${categoryId !== '' ? `&category=${categoryId}` : ''}`;
  const page = `_page=${paginationPage}&_limit=${limitPage}`;
  const sort = `&sortby=${sortActive}`;
  const search = `${category}&q=${searchProduct}`;
  const getProducts = () => {
    dispatch(fetchProducts({
      category,
      page,
      sort,
      search
    }


    ))

  }


  const onCategoryIndex = useCallback((id) => {
    dispatch(setCategoryId(id))
    dispatch(setSearch(''));
  });
  const onPaginationPage = useCallback((number) => {
    console.log(number)
    dispatch(setPaginationPage(number))
  });
  const onLimitPage = useCallback((number) => {
    dispatch(setLimitPage(number))
  });
  const onSortProp = useCallback((value) => {
    dispatch(setSortActive(value))

  });
  const onSearch = (name, cat) => {
    dispatch(setSearch(name));
    dispatch(setCategoryId(cat))
  }


  // verificăm dacă utilizatorul este autentificat pe baza token-ului din localStorage
  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem('token');
      if (token) {
        dispatch(fetchAuthMe(token))
      }
    }
  }, [dispatch, user]);
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


  useEffect(() => {
    getProducts()

  }, [onCategoryIndex, onPaginationPage, onLimitPage, onSortProp, onSearch]);




  return (

    <Routes>
      <Route path="/" element={<MainLayout onSearch={onSearch} />}>


        <Route path="shop" element={<Shop
          onCategoryIndex={onCategoryIndex}
          onPaginationPage={onPaginationPage}
          onLimitPage={onLimitPage}
          onSortProp={onSortProp}

        />}>

        </Route >
        <Route path="/shop/:id" element={<ShopSingle />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/compare" element={<Compare/>} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/Registration" element={<Registration />} />
      </Route >
    </Routes>

  );
}

export default App;
