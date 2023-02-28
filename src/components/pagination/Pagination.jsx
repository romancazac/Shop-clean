

import { memo  } from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector } from 'react-redux';


import './pagination.scss'
const Pagination = memo(({onPaginationPage}) => {

   const { totalCount } = useSelector(state => state.products)
   const { limitPage} = useSelector(state => state.filter)
   const pageNumbers =   Math.ceil(totalCount / Number(limitPage))




   return (
      <div className="pagination">
         
         <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onPaginationPage(e.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={pageNumbers}
            previousLabel="<"
            renderOnZeroPageCount={null}
         />
      </div>

   )
});

export default Pagination