import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import { useSelector } from 'react-redux/es/exports';
import Product from '../components/Product';
import { Helmet } from 'react-helmet';
const Compare = () => {

    const { dataCompare } = useSelector(state => state.compare);

    return (
        <>
    
            <Helmet>
                <title>Сравнение товаров</title>
                <meta name="description" content="Shop aplication" />
            </Helmet>
            <div className="compare shop">
                <BreadCrumbs title="Сравнение товаров" />
                <div className="compare__container">
                    <div className="compare__items block-products">

                        {
                            dataCompare.length <= 0 ? "Nu sunt produse  de comparat!" :
                                dataCompare?.map((item) =>
                                    <div className='block-products__column'>
                                        <Product {...item} key={item.id} compare={true} />
                                    </div>
                                )

                        }

                    </div>
                    <div className="compare__table table-compare">
                        <table cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td>Price</td>
                                    {
                                        dataCompare?.map((item) =>
                                            <>
                                                <td key={item.id}>{item.price}</td>
                                            </>
                                        )
                                    }
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    {
                                        dataCompare?.map((item) =>
                                            <>
                                                <td key={item.id}>{item.category}</td>
                                            </>
                                        )
                                    }
                                </tr>
                                <tr>
                                    <td>Brand</td>
                                    {
                                        dataCompare?.map((item) =>
                                            <>
                                                <td key={item.id}>{item.brand}</td>
                                            </>
                                        )
                                    }
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Compare;