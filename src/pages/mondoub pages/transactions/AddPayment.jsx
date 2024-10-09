import React from 'react'
import AddPaymentMethod from '../../../components/Modal/AddPaymentMethod'
import ModalContainer from '../../../components/Modal/ModalContainer'
import useModal from '../../../hooks/useModal';

function AddPayment() {
    const { modalOpen, close, open } = useModal();
  return (
    <div className="section-card w-fit !p-6 cards">
        <ModalContainer>
        {modalOpen && (
          <AddPaymentMethod 
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </ModalContainer>
          <div className="df ai-stretch payments-methods-res !gap-8">
            <div className="df-c">
              <h1>بطاقاتك</h1>
              <div className="payment-card">
                <img src="/img/mastercard.png" alt="ماستركارد" />
              </div>
            </div>
            <div className="df-c jc-sb">
              <div className="btn" onClick={open}>إضافة بطاقة</div>
              <div>
                <div className="text">إجمالي الدخل</div>
                <div className="bold-1 text-4xl">$15470.64</div>
              </div>
              <div>
                <div className="df jc-sb text"><span>$1200</span><span>إجمالي المكافآت</span></div>
                <div className="df jc-sb text"><span>$14270.64</span><span>إجمالي الرواتب</span></div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default AddPayment