import styles from "../styles/Modal.module.css";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, closeModal, children }: Props) => {
  return (
    <div>
      {isOpen && (
        <div>
          <div className={styles.fade} onClick={closeModal}></div>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Texto Modal</h2>
              <i className="bi bi-x" onClick={closeModal}></i>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
