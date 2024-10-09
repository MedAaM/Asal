import { useState } from "react";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";
import { dropIn } from "../../utils/modals";

function EditBankInfo({ handleClose, method }) {
  const [selectedPayment, setSelectedPayment] = useState("payment3");

  const handleSelect = (value) => {
    setSelectedPayment(value);
  };

  return (
    <Backdrop onClick={handleClose} isNotification={true}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal g0 !w-fit"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {method.name === "تحويل بنكي" && (
          <div className="df-c">
            <div className="df w-full">
              <div className="df-c pr">
                <label htmlFor="" className="label-trans">
                  {method.requirements[0].field}
                </label>
                <input
                  type="text"
                  value={method.requirements[0].example}
                  id=""
                />
              </div>
              <div className="df-c pr">
                <label htmlFor="" className="label-trans">
                  {method.requirements[1].field}
                </label>
                <input
                  type="text"
                  value={method.requirements[1].example}
                  id=""
                />
              </div>
            </div>
            <div className="df-c pr">
              <label htmlFor="" className="label-trans">
                {method.requirements[2].field}
              </label>
              <input type="text" value={method.requirements[2].example} id="" />
            </div>
            <div className="df-c pr">
              <label htmlFor="" className="label-trans">
                {method.requirements[3].field}
              </label>
              <input type="text" value={method.requirements[3].example} id="" />
            </div>

            <div className="df w-full">
              <div className="df-c pr w-full">
                <label htmlFor="" className="label-trans">
                  {method.requirements[4].field}
                </label>
                <input
                  type="text"
                  value={method.requirements[4].example}
                  id=""
                />
              </div>
            </div>
            <div className="df header-btns mr-auto">
                <div
                    className="details-btn df"
                    onClick={handleClose}
                >
إلغاء                </div>
                <div
                    className="details-btn df"
                >
                    تأكيد
                </div>
            </div>
          </div>
        )}
        {method.name === "دفع عبر الهاتف المحمول" && (
          <div className="df-c w-full">
            <div className="">{method.requirements[0].field}</div>
            <div className="df w-full">
            <div className="df wrap mt-4 w-full">
              <label
                htmlFor="payment1"
                className={`df-c payment-label ${
                  selectedPayment === "payment1" ? "selected" : ""
                }`}
              >
                <div className="payment-card !w-20 !h-12">
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
                <div className="payment-card !w-20 !h-12">
                  <img src="https://developer.apple.com/news/images/og/apple-pay-og-twitter.jpg" alt="فيزا" />
                </div>
                <span className="ta-c font-bold text-sm">Apple Pay</span>
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
                <div className="payment-card !w-20 !h-12">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Zelle_logo.svg" alt="باي بال" />
                </div>
                <span className="ta-c font-bold text-sm ">zelle</span>
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
            <div className="df w-full">
              <div className="df-c pr w-full">
                <label htmlFor="" className="label-trans">
                  {method.requirements[1].field}
                </label>
                <input
                  type="text"
                  value={method.requirements[1].example}
                  id=""
                />
              </div>
            </div>
            <div className="df header-btns mr-auto">
                <div
                    className="details-btn df"
                    onClick={handleClose}
                >
إلغاء                </div>
                <div
                    className="details-btn df"
                >
                    تأكيد
                </div>
            </div>
          </div>
        )}
      </motion.div>
    </Backdrop>
  );
}

export default EditBankInfo;
