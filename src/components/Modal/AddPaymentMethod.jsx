import React, { useState } from 'react'
import Backdrop from '../Backdrop'
import { motion } from 'framer-motion'
import { dropIn } from '../../utils/modals'

function AddPaymentMethod({ handleClose }) {
    const [selectedPayment, setSelectedPayment] = useState("payment1");

  const handleSelect = (value) => {
    setSelectedPayment(value);
  };
  return (
    <Backdrop onClick={handleClose} isNotification={true}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal g0"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="df-c">
            <div className="title">اختر وسيلة الدفع</div>
        
        <div className="df w-full">
            <div className="df wrap mt-4 w-full">
              <label
                htmlFor="payment1"
                className={`df-c payment-label ${
                  selectedPayment === "payment1" ? "selected" : ""
                }`}
              >
                <div className="payment-card !w-20 !h-12">
                  <img src="https://cdn.iconscout.com/icon/free/png-512/bank-transfer-1817143-1538011.png" alt="تحويل بنكي" />
                </div>
                <span className="ta-c font-bold text-sm">تحويل بنكي</span>
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
                  <img src="https://th.bing.com/th/id/R.88f7150def3b9b0f62a532244426fc14?rik=4YWQ8OgIds3fKA&pid=ImgRaw&r=0" alt="دفع عبر الهاتف" />
                </div>
                <span className="ta-c font-bold text-sm">دفع عبر الهاتف</span>
                <input
                  type="radio"
                  name="payment"
                  id="payment2"
                  value="payment2"
                  onChange={() => handleSelect("payment2")}
                  checked={selectedPayment === "payment2"}
                />
              </label>
            </div>
            </div>
            {
                selectedPayment === "payment2" && (
                    <div className="df-c w-full">
            <div className=""></div>
            <div className="df w-full">
            </div>
            <div className="df w-full">
              <div className="df-c pr w-full">
                <label htmlFor="" className="label-trans">
                  
                </label>
                <input
                  type="text"
                  id=""
                />
              </div>
            </div>
            <div className="details-btn mr-auto">إرسال</div>
          </div>
                )
            }
            {
  selectedPayment === "payment1" && (
    <div className="df-c">
      <div className="df w-full jc-sb">
        <div className="df-c pr">
          <label htmlFor="bankName" className="label-trans">
            اسم البنك
          </label>
          <input
            type="text"
            id="bankName"
            placeholder="بنك ABC"
            className="input-field"
          />
        </div>
        <div className="df-c pr">
          <label htmlFor="accountHolderName" className="label-trans">
            اسم صاحب الحساب
          </label>
          <input
            type="text"
            id="accountHolderName"
            placeholder="جون دو"
            className="input-field"
          />
        </div>
      </div>
      <div className="df-c pr">
        <label htmlFor="accountNumber" className="label-trans">
          رقم الحساب
        </label>
        <input
          type="text"
          id="accountNumber"
          placeholder="12345678901234"
          className="input-field"
        />
      </div>
      <div className="df-c pr">
        <label htmlFor="iban" className="label-trans">
          IBAN
        </label>
        <input
          type="text"
          id="iban"
          placeholder="US59 1234 5678 9012 3456 7890"
          className="input-field"
        />
      </div>
      <div className="df w-full">
        <div className="df-c pr w-full">
          <label htmlFor="swiftCode" className="label-trans">
            رمز SWIFT/BIC
          </label>
          <input
            type="text"
            id="swiftCode"
            placeholder="ABCIT12345"
            className="input-field"
          />
        </div>
      </div>
      <div className="details-btn mr-auto">إرسال</div>
    </div>
  )
}

            </div>
      </motion.div>
    </Backdrop>
  )
}

export default AddPaymentMethod
