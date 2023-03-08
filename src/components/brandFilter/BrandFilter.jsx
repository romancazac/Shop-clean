import React from 'react';
import { useDispatch } from 'react-redux';
import { setBrand } from '../../redux/slices/filterSlice';
import brand1 from '../../asset/img/brand1.png';
import brand2 from '../../asset/img/brand2.png';
import brand3 from '../../asset/img/brand3.png';

function BrandFilter(props) {
    const dispatch = useDispatch()
    const onBrand = (name) => {
        dispatch(setBrand(name))
    }
    const brands = [
        {
            "id":0,
            "name":"Domestos",
            "imgUrl":brand1
        },
        {
            "id":1,
            "name":"Kolin's",
            "imgUrl":brand2
        },
        {
            "id":2,
            "name":"Cif",
            "imgUrl":brand3
        },
    ]
    return (
        <>
        {
            brands.map((brand) => 
            <button className="aside-brand__row" onClick={() => onBrand(brand.name)}>
                <img src={brand.imgUrl} alt={brand.name} className="aside-brand__logo" />
                <span className="aside-brand__name">{brand.name}</span>
                <span className="aside-brand__count">
                2
                </span>
            </button>
            )
        }
     </>

    );
}

export default BrandFilter;