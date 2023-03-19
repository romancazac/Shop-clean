import { useCallback, useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Route, Routes } from 'react-router-dom';




import MainLayout from "./layouts/MainLayout";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import ShopSingle from "./pages/ShopSingle";
import { setCategoryId, setLimitPage, setPaginationPage, setSortActive,setSearch } from "./redux/slices/filterSlice";
import { fetchProducts } from './redux/slices/productsSlice'
import Profile from "./pages/Profile";
import Registration from "./components/Registration";
import { fetchAuthMe } from './redux/slices/userSlice';
import { Wish } from "./pages/Wish";
import Compare from "./pages/Compare";
import About from "./pages/About";
import Services from "./pages/Services";
import { Home } from "./pages/Home";
import { Preloader } from "./components/preloader/Preloader";
import { News } from "./pages/News";
import { NewsSingle } from "./pages/NewsSingle";
import { Contacts } from "./pages/Contacts";


function App() {

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { categoryId, limitPage, sortActive, searchProduct, paginationPage,brand } = useSelector(state => state.filter)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay in loading the site
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);



  const category = categoryId !== '' ? `&category=${categoryId}` : '';
  const brands = brand ? `&brand=${brand}` : '';
  const page = `_page=${paginationPage}&_limit=${limitPage}`;
  const sort = sortActive ? `&_sort=${sortActive}` : '';
  const search = searchProduct ? `&q=${searchProduct}` : '';
  const getProducts = () => {
    dispatch(fetchProducts({
      category,
      page,
      sort,
      search,
      brands
    }));
  };


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
  const onSearch = useCallback((name, cat) => {
    dispatch(setSearch(name));
    dispatch(setCategoryId(cat))
  });


  // verificăm dacă utilizatorul este autentificat pe baza token-ului din localStorage
  useEffect(() => {
    if (!user) {
      const token = localStorage.getItem('token');
      if (token) {
        dispatch(fetchAuthMe(token))
      }
    }
  }, [dispatch, user]);
 
  useEffect(() => {
    getProducts()
  }, [onCategoryIndex, onPaginationPage, onLimitPage, onSortProp, onSearch]);




  return (
    <>
    {loading ? <Preloader /> :
    <Routes>
      
      <Route path="/" element={<MainLayout onSearch={onSearch} />}>
      <Route path="/" element={<Home/>} />
        
        <Route path="shop" element={<Shop
          onCategoryIndex={onCategoryIndex}
          onPaginationPage={onPaginationPage}
          onLimitPage={onLimitPage}
          onSortProp={onSortProp}
        />}>
        </Route >
        <Route path="/shop/:id" element={<ShopSingle />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/news/:id" element={<NewsSingle/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/compare" element={<Compare/>} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/Registration" element={<Registration />} />
      </Route >
      
      
    </Routes>
    }
    </>
  );
}

export default App;
