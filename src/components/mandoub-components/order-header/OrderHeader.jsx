import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import useModal from "../../../hooks/useModal";
import Modal from "../../Modal/index";
import ModalContainer from "../../Modal/ModalContainer";
import "./styles.css";
import { BiPrinter } from "react-icons/bi";
import { IoCheckmark } from "react-icons/io5";

function OrderHeader() {
  const { id } = useParams();
  const { modalOpen, close, open } = useModal();
  const handlePrint = () => {
    window.print();
  };

  const handleConfirm = () => {
    close(); 
  };

  return (
    <div>
      <ModalContainer>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            text={"هل أنت متأكد؟ هذه العملية لا يمكن التراجع عنها"}
            type={"dropIn"}
            handleConfirm={handleConfirm}
            handleClose={close}
          />
        )}
      </ModalContainer>
      <div className="df jc-sb header-details">
        <span className="text df">
          <span className="title">الطلب#2417</span>
          <span className="text text-xs">13 سبتمبر 2022 الساعة 4:39</span>
          <div className="paid-status">مدفوع</div>
        </span>
        <div className="df header-btns">
          <motion.div
            className="details-btn df"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrint}
          >
            طباعة
            <BiPrinter /> 
          </motion.div>
          <motion.div
            className="details-btn df"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={open}
          >
            وضع علامة كتم التسليم
            <IoCheckmark /> 
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OrderHeader;
