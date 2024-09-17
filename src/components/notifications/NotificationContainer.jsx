import { AnimatePresence } from "framer-motion";
import React from "react";

function NotificationContainer({ children, position }) {
  return (
    <div className="notfication-popup">
      <ul className={position}>
        <AnimatePresence
          initial={false}
        >
          {children}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default NotificationContainer;
