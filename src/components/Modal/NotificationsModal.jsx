import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/index";
import { BiCartAdd, BiDollar } from "react-icons/bi";
import { GiLoveLetter, GiPresent } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";

// Define the corresponding background and text colors
const iconStyles = {
  BiCartAdd: { bg: "--light-primary", color: "--primary" },
  BiDollar: { bg: "--purple-light", color: "--purple" },
  GiPresent: { bg: "--cyan-light", color: "--cyan" },
  MdReviews: { bg: "--pink-light", color: "--pink" },
  GrGroup: { bg: "--pending-light", color: "--pending" },
  ImCancelCircle: { bg: "--canceled-light", color: "--canceled" },
  GiLoveLetter: { bg: "--cyan-light", color: "--cyan" }
};

// Notification data to map through
const notifications = [
  { id: 1, name: "أزلوك أحمد", message: "لقد تلقيت طلبًا جديدًا من أحمد أزلوك", icon: BiCartAdd, time: "منذ 6 ساعات" },
  { id: 2, name: "المسؤولين", message: "تم استلام راتبك بنجاح", icon: BiDollar, time: "منذ 6 ساعات" },
  { id: 3, name: "المسؤولين", message: "لقد حصلت على المرتبة الأولى في المسابقة، يمكنك الحصول على جائزتك في أي وقت", icon: GiPresent, time: "منذ 6 ساعات" },
  { id: 4, name: "إيمان الشريف", message: "تلقيت مراجعة جديدة من إيمان الشريف", icon: MdReviews, time: "منذ 6 ساعات" },
  { id: 5, name: "مدير الفعالية", message: "هناك مسابقة جديدة قادمة قريبًا بين مجموعتك والمجموعة الخاصة", icon: GrGroup, time: "منذ 6 ساعات" },
  { id: 6, name: "أزلوك أحمد", message: "تم إلغاء الطلب", icon: ImCancelCircle, time: "منذ 6 ساعات" },
  { id: 7, name: "أزلوك أحمد", message: "لقد تلقيت طلبًا جديدًا من أحمد أزلوك", icon: BiCartAdd, time: "منذ 6 ساعات" },
];


const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 } },
  exit: { y: "100vh", opacity: 0 },
};

function NotificationsModal({ handleClose }) {
  return (
    <Backdrop onClick={handleClose} isNotification={true}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal g0 notifications-modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="df jc-sb w-full notif-panel">
          <div className="bold-1">الإشعارات</div>
          <div className="df">
            <div className="new"><span>3 جديدة</span></div>
            <GiLoveLetter />
          </div>
        </div>
        <div className="notification-body df-c g0">
          {notifications.map((notif) => (
            <div key={notif.id} className={`notification w-full df ai-fs`}>
              <div
                className="rounded-icon"
                style={{
                  backgroundColor: `var(${iconStyles[notif.icon.name].bg})`, // Apply background color
                  color: `var(${iconStyles[notif.icon.name].color})`         // Apply text color
                }}
              >
                {React.createElement(notif.icon)} {/* Render the icon */}
              </div>
              <div className="df-c w-full g0">
                <div className="bold-1">{notif.name}</div>
                <div className="text">{notif.message}</div>
                <div className="text mt-4 w-fit mr-auto">{notif.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="notif-panel w-full">
          <div className="btn w-full">عرض الكل</div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default NotificationsModal;
