import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setPopup } from '../../redux/slices/popupSlice';

const Popup = ({children,id}) => {


    const dispatch = useDispatch();
    const location = useLocation();
    const{openPopup} = useSelector(state => state.popup)

     const onClose = () => {
        dispatch(setPopup(""))

     }
     useEffect(() => {
      onClose()
     },[location])
    return (
        <div className={openPopup === id  ? "popup popup_show" : "popup"}>
        <div className="popup__wrapper">
           <div className="popup__content">
              <button  type="button" className="popup__close" onClick={onClose}></button>
            {children}
           </div>
        </div>
     </div>
    );
};

export default Popup;