import { useEffect,useState } from 'react';
import ReactPaginate from 'react-paginate';

import './pagination.scss'
const Pagination = ({perPage}) => {
   // const { perPage,setData,filterData} = useContext(AppContext);  
   const [currentPage, setCurrentPage] = useState(1);

   const indexOfLastPost = currentPage * perPage;
   const indexOfFirstPost = indexOfLastPost - perPage;
 
   const onPaginationPage = (nr) => {
     setCurrentPage(nr);
    
   }
 
 
   // const pageNumbers = [];

   // for (let i = 1; i <= Math.ceil(filterData.length / Number(perPage)); i++) {
   //     pageNumbers.push(i);
   // }
   // useEffect(() => {
 
   //    const currentData  = filterData.slice(indexOfFirstPost, indexOfLastPost)
   //     setData(
   //       currentData
   //     )
       
   //     },[currentPage,perPage])

   return (
      <div className="pagination">
         <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onPaginationPage(e.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
         />
      </div>

   )
}

export default Pagination