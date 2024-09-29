import "./Modal.css"

const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? "modal active":"modal"} onClick={()=>setActive(false)}>
        <div className="modal-content">{children}</div>
        </div>
        )
};

export default Modal;