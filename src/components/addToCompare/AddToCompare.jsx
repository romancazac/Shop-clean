import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addItems } from '../../redux/slices/compareSlice';
const AddToCompare = ({obj, added}) => {
    const dispatch = useDispatch()
        const onAddCompare = () => {
            dispatch(addItems(obj))
        }
    return (
        <button className={`action-product__item action-product__item_compare ${added && "_active"}`}
        onClick={onAddCompare }
        ></button>
    );
};

export default AddToCompare;