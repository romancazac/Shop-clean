import { useCallback,useState,useEffect } from "react";
import QueryString from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Route,Routes } from 'react-router-dom';

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
import {loginSuccess,loginStart} from './redux/slices/userSlice';


function App() {

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isSearch = React.useRef(false);
  // const isMounted = React.useRef(false);
  const {user} = useSelector((state) => state.auth);

  const { categoryId, paginationPage, limitPage, sortActive,searchProduct} = useSelector(state => state.filter)

  const category = `${categoryId !== ''  ? `&category=${categoryId}` : ''}`;
  const page = `&page=${paginationPage}&limit=${limitPage}`;
  const sort = `&sortby=${sortActive}`;
  const search = `${category}&q=${searchProduct}`;
  // let updatedList = list;
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
    dispatch(setPaginationPage(number))
  });
  const onLimitPage = useCallback((number) => {
    dispatch(setLimitPage(number))
  });
  const onSortProp = useCallback((value) => {
    dispatch(setSortActive(value))

  });
  const onSearch = (name,cat) => {
    dispatch(setSearch(name));
    dispatch(setCategoryId(cat))
  }


// verificăm dacă utilizatorul este autentificat pe baza token-ului din localStorage
useEffect(() => {
  if (!user) {
    // verificați dacă utilizatorul este logat și încercați să vă conectați
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(loginStart())
      fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          dispatch(loginSuccess(data));
        })
        .catch((error) => {
          localStorage.removeItem('token');
        });
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

  }, [onCategoryIndex, onPaginationPage, onLimitPage, onSortProp,onSearch ]);

 




  return (

    <Routes>
      <Route path="/" element={<MainLayout  onSearch={onSearch}/>}>


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
