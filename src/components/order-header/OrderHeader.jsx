import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import useModal from "./../../hooks/useModal";
import Modal from "../../components/Modal/index";
import ModalContainer from "../Modal/ModalContainer";
import Notification from "../notifications/index";
import { add } from "../../utils/arr-utils";
import NotificationContainer from "../notifications/NotificationContainer";

function OrderHeader() {
  const [notifications, setNotifications] = useState([]);
  const [text, setText] = useState("Awesome job! 🚀");
  const [style, setStyle] = useState("success");
  const [position, setPosition] = useState("bottom");
  const { id } = useParams();
  const { data } = useFetchData("orders/" + id, false);
  const { modalOpen, close, open } = useModal();
  console.log(data);

  const handleConfirm = () => {
    console.log("confirmed =====");
    close(); 
    setNotifications(add(notifications, text, style))
  };

  return (
    <div>
      <NotificationContainer position={position}>
        {notifications &&
          notifications.map((notification) => (
            <Notification
              key={notification.id}
              notification={notification}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          ))}
      </NotificationContainer>
      <ModalContainer>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            text={"are you sure? this action cannot be undone"}
            type={"dropIn"}
            handleConfirm={handleConfirm}
            handleClose={close}
          />
        )}
      </ModalContainer>
      <div className="df jc-sb">
        <div className="df-c">
          <div className="df">
            <Typography variant="h5">{`Order #${data?.order?.orderId}`}</Typography>{" "}
            <div className="pending">pending</div>{" "}
            <div className="paid">paid</div>
          </div>

          <Typography>{`${data?.order?.createdAt}`}</Typography>
        </div>
        <motion.div
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={open}
        >
          launch modal
        </motion.div>
      </div>
    </div>
  );
}

export default OrderHeader;
