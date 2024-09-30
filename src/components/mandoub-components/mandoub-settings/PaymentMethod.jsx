import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import ModalContainer from "../../Modal/ModalContainer";
import NotificationsModal from "../../Modal/NotificationsModal";
import useModal from "../../../hooks/useModal";
import AddPaymentMethod from "../../Modal/AddPaymentMethod";
import EditBankInfo from "../../Modal/EditBankInfo";

function PaymentMethod({ method }) {
    const { modalOpen, close, open } = useModal();
  return (
    <div className="df w-full jc-sb">
        <ModalContainer>
                {modalOpen && (
                    <EditBankInfo
                        modalOpen={modalOpen}
                        handleClose={close}
                        method={method}
                    />
                )}
        </ModalContainer>
      <div className="df w-4/6">
        <img
          src={method.image}
          alt={method.name}
          style={{ width: "90px", height: "90px", borderRadius: "7px" }}
        />
        <div className="df-c !gap-1">
          <div className="title">{method.name}</div>
          <div className="text text-xs">{method.description}</div>
        </div>
      </div>
      <div
        className={`payment-status text-center text-xs ${
          method.default ? "default" : ""
        }`}
      >
        {method.default && "default"}
        {!method.default && "set as default"}
      </div>
      {method.id != 1 && <div className="df-c">
        <BiEdit onClick={open} />
        <BiTrash />
      </div>}
    </div>
  );
}

export default PaymentMethod;
