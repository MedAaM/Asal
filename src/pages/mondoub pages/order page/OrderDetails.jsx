import React from "react";
import OrderHeader from "../../../components/mandoub-components/order-header/OrderHeader";
import OrderDetailsTable from "./OrderDetailsTable";
import OrderTimeLine from "./OrderTimeLine";
import { BiCartAdd, BiHeartCircle } from "react-icons/bi";


function OrderDetails() {
  return (
    <div className="df-c">
      <OrderHeader />
      <div className="df ai-stretch wrap">
        <OrderDetailsTable />
        <div className="df-c flex-1">
          <div className="section-card !gap-6 w-100">
            <div className="bold-2">Customer details</div>
            <div className="df">
            <div className="order-cus-img">
                <img src='/img/about.png' />
                </div>{" "}
              <div className="df-c g0">
                <div className="bold-01">Gabrielle Feyer</div>
                <div className="text">order id : gfpjgiero</div>
              </div>
            </div>
            <div className="text df">
                <div className="rounded-icon w-12">
                <BiCartAdd />
                </div>  12 orders</div>

            <div className="df-c flex-1 g0">
              <div className="bold-1">contact info</div>
              <div className="text">Email: ahmedejlzef@fmgf</div>
              <div className="text">Mobile: 27154280</div>
            </div>
          </div>
          <div className="section-card jc-sb flex-1">
            <div className="bold-2">shipping adress</div>
            <div className="df-c g0">
              <div className="text">45 Roker Terrace</div>
              <div className="text">Latheronwheel</div>
              <div className="text">KW5 8NW, London</div>
              <div className="text">UK</div>
            </div>
          </div>
        </div>
        </div>
        <div className="df w-full ai-fs">
          <div className="section-card w-fit">
        <OrderTimeLine />
      </div>
      <div className="section-card flex-1 df-c">
            <div className="bold-2">Billing Address</div>
            <div className="df-c g0">
              <div className="text">45 Roker Terrace</div>
              <div className="text">Latheronwheel</div>
              <div className="text">KW5 8NW, London</div>
              <div className="text">UK</div>
            </div>
            <div className="div">
                <div className="bold2">Mastercard</div>
                <div className="text">Card Number: ******4291</div>
            </div>
          </div>

        </div>
      
      
    </div>
  );
}

export default OrderDetails;
