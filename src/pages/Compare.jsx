import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { useSelector } from 'react-redux/es/exports';
import Product from '../components/Product';
const Compare = () => {

   const{dataCompare} =  useSelector(state => state.compare )
    return (
    <div className="compare shop">
        <BreadCrumbs title="Сравнение товаров"/>
        <div className="compare__container">
            <div className="compare__items block-products">
                
                {    
                    dataCompare?.map((item) => 
                         <div className='block-products__column'>
                            <Product {...item} key={item.id} compare={true}/>
                        </div>
                    )
                    
                }

            </div>
            <div className="compare__table table-compare">
                <table cellspacing="0">
                    <tbody>
                        
                            
                            <tr>
                            <td>Price</td>
                                {
                                dataCompare?.map((item) => 
                                <>
                                
                                <td>{item.price}</td>
                                </>
                                )
                                }
                            </tr>
                           
                        
                    

                    </tbody>
                </table>

            </div>
        </div>
    </div>
    );
};

export default Compare;