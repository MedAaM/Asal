import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { fadeIn } from '../../../utils/motion'
import useModal from '../../../hooks/useModal';
import ModalContainer from '../../Modal/ModalContainer';
import Modal from '../../Modal';


function DangerZone() {
    const { modalOpen, close, open } = useModal();
    const [modal,setModal] = useState("holiday");
  return (
    <motion.div variants={fadeIn("right", "tween", 1 * 0.2, 1)} className="section-card edit-section">
        <ModalContainer>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            text={modal}
            type={"dropIn"}
            handleClose={close}
          />
        )}
      </ModalContainer>
          <div className="df-c danger">
            <div className="df justify-center text-center header-btns w-full">
              <motion.div
                className="details-btn justify-center w-1/2 df"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={()=>{setModal("هل أنت متأكد؟ هذه العملية لا يمكن التراجع عنها");open()}}
                
                >
                حذف الحساب
              </motion.div>
            </div>
            <div className="df header-btns justify-center w-full">
              <motion.div
                className="details-btn justify-center w-1/2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={()=>{setModal("holiday");open()}}

                >
                طلب إجازة             </motion.div>
            </div>
            <div className="df header-btns justify-center w-full">
              <motion.div
                className="details-btn justify-center w-1/2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={()=>{setModal("هل أنت متأكد؟ هذه العملية لا يمكن التراجع عنها");open()}}

              >
                طلب تغيير المدينة
              </motion.div>
            </div>
          </div>
        </motion.div>
  )
}

export default DangerZone