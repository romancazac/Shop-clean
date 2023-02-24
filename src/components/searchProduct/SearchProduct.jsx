import { useState } from "react";

function SearchProduct({onSearch}) {
    const[search, setSearch] = useState("");
    const[category, setCategory] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(search,category)
        console.log(category)
     }
  
  return (
    <form action="#" className="search__form">
      <input
        placeholder="Введите название товара"
        type="search"
        className="search__inp"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select name="#" id="#" className="search__cat" onChange={(e) => setCategory(e.target.value)}>
        <option value="">Все категории</option>
        <option value="0">cat 1</option>
        <option value="1">cat 2</option>
        <option value="2">cat 3</option>
      </select>
      <button type="submit" className="search__btn" onClick={handleSearch}></button>
    </form>
  );
}

export default SearchProduct;
