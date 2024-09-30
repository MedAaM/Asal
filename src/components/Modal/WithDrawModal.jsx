import React, { useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/index";
import { BiCartAdd } from "react-icons/bi";
import { GiLoveLetter } from "react-icons/gi";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";

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

function WithDrawModal({ handleClose }) {
  const [selectedPayment, setSelectedPayment] = useState("payment3");

  const handleSelect = (value) => {
    setSelectedPayment(value);
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="g0 withdraw-modal !py-12"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="df ai-stretch">
          <div className="df-c w-2/3 jc-sb">
            <h1 className="title">سحب الراتب</h1>
            <p className="text">
              مرحبًا بك! لقد حان الوقت لسحب راتبك. يرجى اختيار طريقة الدفع المناسبة والتحقق من بياناتك لضمان عملية سلسة.
            </p>
            <div className="df wrap mt-4">
              <label
                htmlFor="payment1"
                className={`df-c payment-label ${
                  selectedPayment === "payment1" ? "selected" : ""
                }`}
              >
                <div className="payment-card !w-44 !h-28">
                  <img src="https://th.bing.com/th/id/R.88f7150def3b9b0f62a532244426fc14?rik=4YWQ8OgIds3fKA&pid=ImgRaw&r=0" alt="ماستركارد" />
                </div>
                <span className="ta-c font-bold text-sm">paypal</span>
                <input
                  type="radio"
                  name="payment"
                  id="payment1"
                  value="payment1"
                  onChange={() => handleSelect("payment1")}
                  checked={selectedPayment === "payment1"}
                />
              </label>

              <label
                htmlFor="payment2"
                className={`df-c payment-label ${
                  selectedPayment === "payment2" ? "selected" : ""
                }`}
              >
                <div className="payment-card !w-44 !h-28">
                  <img src="/img/mastercard.png" alt="فيزا" />
                </div>
                <span className="ta-c font-bold text-sm">mastercard</span>
                <input
                  type="radio"
                  name="payment"
                  id="payment2"
                  value="payment2"
                  onChange={() => handleSelect("payment2")}
                  checked={selectedPayment === "payment2"}
                />
              </label>

              <label
                htmlFor="payment3"
                className={`df-c payment-label ${
                  selectedPayment === "payment3" ? "selected" : ""
                }`}
              >
                <div className="payment-card !w-44 !h-28">
                  <img src="https://c8.alamy.com/comp/HY60CY/hand-gives-money-icon-outline-style-HY60CY.jpg" alt="باي بال" />
                </div>
                <span className="ta-c font-bold text-sm ">cash</span>
                <input
                  type="radio"
                  name="payment"
                  id="payment3"
                  value="payment3"
                  onChange={() => handleSelect("payment3")}
                  checked={selectedPayment === "payment3"}
                />
              </label>
            </div>
          </div>
          <div className="df-c">
            <h1 className="title">سحب الراتب</h1>
            <p className="text">
              تهانينا! لقد أكملت جميع الأهداف بنجاح، كما أنك حققت المتطلبات اللازمة للحصول على المكافأة.
            </p>
            <div className="total-salary">
              <span className="text-8xl text-indigo-600">$2500</span>/شهري$
            </div>
            <div className="p-4 df-c">
              <div className="df jc-sb border-b">
                <span>2500$</span>
                <span>الراتب</span>
              </div>
              <div className="df jc-sb border-b">
                <span>500$</span>
                <span>المكافأة</span>
              </div>
              <div className="df jc-sb border-b">
                <span>3000$</span>
                <span>المجموع</span>
              </div>
            </div>
            <div className="btn mt-auto">إرسال السحب</div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default WithDrawModal;
