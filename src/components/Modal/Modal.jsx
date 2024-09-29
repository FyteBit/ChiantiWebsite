import styles from "./Modal.module.css"

const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={()=>setActive(false)}>
        <div className={styles.modalContent}>{children}</div>
        </div>
        )
};

export default Modal;