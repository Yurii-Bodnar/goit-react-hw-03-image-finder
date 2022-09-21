import { createPortal } from 'react-dom';

const modalContainer = document.getElementById('modal');
const Modal = ({ modalData, togleModal }) => {
    const closeModal = (e) => {
        if(e.target === e.currentTarget){
            togleModal()
        }
    }
  return createPortal(
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={modalData} alt="" />
      </div>
    </div>,
    modalContainer
  );
};
 
export default Modal;
