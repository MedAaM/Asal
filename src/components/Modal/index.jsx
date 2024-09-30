import { motion } from "framer-motion";
import Backdrop from "../Backdrop/index";
import { TiWarningOutline } from "react-icons/ti";
import { badSuspension, dropIn, flip, newspaper } from "../../utils/modals";




const Modal = ({ handleClose, text, handleConfirm, type }) => {

  return (
    <Backdrop onClick={handleClose}>
      {type === "dropIn" && (
        <motion.div
          onClick={(e) => e.stopPropagation()} 
          className="modal flex items-center flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16 orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <div className="df">
          <div className="outline-btn" onClick={handleClose} >cancel</div>
          <ModalButton onClick={handleConfirm} label="confirm" />

          </div>
        </motion.div>
      )}

      {type === "flip" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal  orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {type === "newspaper" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal orange-gradient"
          variants={newspaper}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}

      {type === "badSuspension" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal orange-gradient"
          variants={badSuspension}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={text} />

          <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
      )}
    </Backdrop>
  );
};

const ModalText = ({ text }) => (
  <div className="df-c ai-center">
    <TiWarningOutline className="warning-icon" />
    <h5>
      {text}
    </h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="btn"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
