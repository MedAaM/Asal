import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/index";
import { TiWarningOutline } from "react-icons/ti";
import { BiCartAdd } from "react-icons/bi";
import { GiLoveLetter } from "react-icons/gi";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
function NotificationsModal({ handleClose }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal g0 notifications-modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="df jc-sb w-full notif-panel">
                <div className="bold-1">Notifications</div>
                <div className="df">
                    <div className="new"><span>3 new</span></div>
                    <GiLoveLetter />
                </div>
            </div>
        <div className="notification-body df-c g0">
        <div className={`notification w-full df ai-fs`}>
            <div className="rounded-icon">
                <BiCartAdd />
            </div>{" "}
            
            <div className="df-c w-full g0">
                <div className="bold-1">azlouk ahmed</div>
                <div className="text">
                you got a new order from ahmed azlouk 
                </div>
                <div className="text mt-4 w-fit mr-auto">6 hours ago</div>
            </div>
            </div>
        <div className={`notification w-full df ai-fs`}>
            <div className="rounded-icon">
                <BiCartAdd />
            </div>{" "}
            
            <div className="df-c w-full g0">
                <div className="bold-1">azlouk ahmed</div>
                <div className="text">
                you got a new order from ahmed azlouk 
                </div>
                <div className="text mt-4 w-fit mr-auto">6 hours ago</div>
            </div>
            </div>
        <div className={`notification w-full df ai-fs`}>
            <div className="rounded-icon">
                <BiCartAdd />
            </div>{" "}
            
            <div className="df-c w-full g0">
                <div className="bold-1">azlouk ahmed</div>
                <div className="text">
                you got a new order from ahmed azlouk 
                </div>
                <div className="text mt-4 w-fit mr-auto">6 hours ago</div>
            </div>
            </div>
        <div className={`notification w-full df ai-fs`}>
            <div className="rounded-icon">
                <BiCartAdd />
            </div>{" "}
            
            <div className="df-c w-full g0">
                <div className="bold-1">azlouk ahmed</div>
                <div className="text">
                you got a new order from ahmed azlouk 
                </div>
                <div className="text mt-4 w-fit mr-auto">6 hours ago</div>
            </div>
            </div>
        <div className={`notification w-full df ai-fs`}>
            <div className="rounded-icon">
                <BiCartAdd />
            </div>{" "}
            
            <div className="df-c w-full g0">
                <div className="bold-1">azlouk ahmed</div>
                <div className="text">
                you got a new order from ahmed azlouk 
                </div>
                <div className="text mt-4 w-fit mr-auto">6 hours ago</div>
            </div>
            </div>
        <div className={`notification w-full df ai-fs`}>
            <div className="rounded-icon">
                <BiCartAdd />
            </div>{" "}
            
            <div className="df-c w-full g0">
                <div className="bold-1">azlouk ahmed</div>
                <div className="text">
                you got a new order from ahmed azlouk 
                </div>
                <div className="text mt-4 w-fit mr-auto">6 hours ago</div>
            </div>
            </div>
        <div className={`notification w-full df ai-fs`}>
            <div className="rounded-icon">
                <BiCartAdd />
            </div>{" "}
            
            <div className="df-c w-full g0">
                <div className="bold-1">azlouk ahmed</div>
                <div className="text">
                you got a new order from ahmed azlouk 
                </div>
                <div className="text mt-4 w-fit mr-auto">6 hours ago</div>
            </div>
            </div>
            


        </div>
        <div className="notif-panel w-full">
            <div className="btn w-full">view all</div>

        </div>
      </motion.div>
    </Backdrop>
  );
}

export default NotificationsModal;
