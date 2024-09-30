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
      name: "Cash",
      description: "Receive salary in cash directly from the company.",
      image: "/img/cash.jpg",
      available: true,
      requirements: [],
      default : true
    },
    {
        id: 2,
        name: "Bank Transfer",
        description: "Salary is transferred directly to your bank account.",
        image: "https://cdn.iconscout.com/icon/free/png-512/bank-transfer-1817143-1538011.png", // Replace with your image URL
      available: true,
      default : false,
      requirements: [
          { field: "Bank Name", example: "ABC Bank" },
          { field: "Account Holder Name", example: "John Doe" },
          { field: "Account Number", example: "12345678901234" },
            { field: "IBAN", example: "US59 1234 5678 9012 3456 7890" },
            { field: "SWIFT/BIC Code", example: "ABCIT12345" },
    ]
},
{
    id: 3,
    name: "Mobile Payment",
    description: "Receive salary via mobile payment services like PayPal or a local mobile wallet.",
    image: "/img/paypal.png",
    available: true,
    default : false,
      requirements: [
        { field: "Mobile Payment Provider", example: "PayPal" },
        { field: "Account Email or Phone Number", example: "user@example.com" },
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
        <div className="details-btn w-fit" onClick={open}>add another method</div>
    
    <div className='df-c'>
        {paymentMethods.map((method) => (
          <div key={method.id} className={`payment-m ${method.default? "b-default":""}`}>
            <PaymentMethod method={method}/>
          </div>
        ))}
    </div>
    </div>
  );
}

export default PaymentMethods;
