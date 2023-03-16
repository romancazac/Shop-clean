import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriSlice";

 
function SearchProduct({onSearch}) {

    const dispatch = useDispatch()
    const[search, setSearch] = useState("");
    const[category, setCategory] = useState("");
    const {categories} = useSelector(state => state.categories)
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(search,category)

     }
     useEffect(() => {
      dispatch(fetchCategories())
     },[])

  
  return (
    <form action="#" className="search__form">
      <input
        placeholder="Введите название товара"
        type="search"
        className="search__inp"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <select name="#" id="#" className="search__cat" onChange={(e) => setCategory(e.target.value)}>
        <option value="">Все категории</option>

        {categories?.map((item) => 
        item?.subcategory?.map((cat) => 
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}

      </select>
      <button type="submit" className="search__btn" onClick={handleSearch}></button>
    </form>
  );
}

export default SearchProduct;
