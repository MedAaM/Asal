import React, { useState } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import useModal from '../../../hooks/useModal';
import ModalContainer from '../../Modal/ModalContainer';
import NotificationsModal from '../../Modal/NotificationsModal';
import PaymentMethod from './PaymentMethod';
import AddPaymentMethod from '../../Modal/AddPaymentMethod';

function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      name: "نقدًا",
      description: "تلقي الراتب نقدًا مباشرةً من الشركة.",
      image: "/img/cash.jpg",
      available: true,
      requirements: [],
      default: true
    },
    {
      id: 2,
      name: "تحويل بنكي",
      description: "يتم تحويل الراتب مباشرة إلى حسابك المصرفي.",
      image: "https://cdn.iconscout.com/icon/free/png-512/bank-transfer-1817143-1538011.png", // استبدل بعنوان صورتك
      available: true,
      default: false,
      requirements: [
        { field: "اسم البنك", example: "بنك ABC" },
        { field: "اسم صاحب الحساب", example: "جون دو" },
        { field: "رقم الحساب", example: "12345678901234" },
        { field: "الآيبان", example: "US59 1234 5678 9012 3456 7890" },
        { field: "رمز SWIFT/BIC", example: "ABCIT12345" },
      ]
    },
    {
      id: 3,
      name: "دفع عبر الهاتف المحمول",
      description: "تلقي الراتب عبر خدمات الدفع بالهاتف المحمول مثل PayPal أو محفظة الهاتف المحلي.",
      image: "/img/paypal.png",
      available: true,
      default: false,
      requirements: [
        { field: "مزود خدمة الدفع عبر الهاتف المحمول", example: "PayPal" },
        { field: "البريد الإلكتروني أو رقم الهاتف للحساب", example: "user@example.com" },
      ]
    }
  ]);
  
  const { modalOpen, close, open } = useModal();

  return (
    <div className="df-c">
      <ModalContainer>
        {modalOpen && (
          <AddPaymentMethod
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </ModalContainer>
      <div className="details-btn w-fit" onClick={open}>إضافة طريقة أخرى</div>

      <div className='df-c'>
        {paymentMethods.map((method) => (
          <div key={method.id} className={`payment-m ${method.default ? "b-default" : ""}`}>
            <PaymentMethod method={method}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethods;
