
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../../redux/slices/popupSlice';

const Popup = ({children,id}) => {
    console.log(id)
    const modalRef = useRef();
    const dispatch = useDispatch()
    const{openPopup} = useSelector(state => state.popup)


     const onClose = () => {
        dispatch(setPopup(""))

     }

    return (
        <div ref={modalRef} className={openPopup === id  ? "popup popup_show" : "popup"}>
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