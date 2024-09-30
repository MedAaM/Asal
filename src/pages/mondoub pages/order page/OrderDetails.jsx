import React from "react";
import OrderHeader from "../../../components/mandoub-components/order-header/OrderHeader";
import OrderDetailsTable from "./OrderDetailsTable";
import OrderTimeLine from "./OrderTimeLine";
import { BiCartAdd, BiHeartCircle } from "react-icons/bi";
import OrderItems from "../../../components/mandoub-components/order-header/OrderItems";
import { LuBox } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2 } from "../../../utils/motion";
import { FaLocationArrow } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";

function OrderDetails() {
  return (
    <div className="df-c">
      <OrderHeader />
      <div className="df wrap ai-fs">
        <div className="df-c flex1">
        <OrderItems />
        <div className="section-card ">
            <OrderTimeLine />
          </div>
        </div>
        <motion.div 
         variants={staggerChildren}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
        className="df-c w-1/3">
          <div className="section-card cus-info !gap-6 w-100">
            <motion.div variants={textVariant2} className="df-c">
            <div className="title">معلومات العميل</div>
            <div className="df">
              <div className="order-cus-img">
                <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
              </div>{" "}
              <div className="df-c g0">
                <div className="font-bold !text-black">غابرييل فايرير</div>
                <div className="text small-text">البريد الإلكتروني: ahmed@gmail.com</div>
                <div className="text">
                  رقم الطلب : <span className="order-id">#2571</span>
                </div>
              </div>
            </div>
            <div className="header-btns df mx-auto">
              <div className="details-btn">
                المفضلة 24
                <IoMdHeartEmpty />
              </div>
              <div className="details-btn">
                الطلبات 10
                <LuBox />
              </div>
            </div>
            <hr />
            </motion.div>
            
            <div className="title">تفاصيل التوصيل</div>

            <motion.div variants={textVariant2} className="df-c text-xs">
              <div className="df">
              <span className="w-1/2 text">الولاية:</span>
              <span className=" text-black font-bold">المهدية</span>

              </div>
              <div className="df">
              <span className="w-1/2 text">اليمن:</span>
              <span className=" text-black font-bold">صنعاء</span>

              </div>
              <div className="df">
              <span className="w-1/2 text">الرمز البريدي:</span>
              <span className=" text-black font-bold">3700</span>

              </div>
              <a href={`https://www.google.com/maps/search/?api=1&query=hiboun`} className="maplink df" target="_blank" rel="noopener noreferrer"><GoLocation />view on map</a>
            </motion.div>
            <hr />
            <div className="title">معلومات الشحن</div>
            <motion.div variants={textVariant2} className="df-c text-xs">
              <div className="df">
              <span className="w-1/2 text">العنوان:</span>
              <span className=" text-black font-bold">صنعاء، اليمن 3200</span>

              </div>
              <div className="df">
              <span className="w-1/2 text">الهاتف:</span>
              <span className=" text-black font-bold">27 154 280</span>

              </div>
            </motion.div>
            <hr />
            <motion.div variants={textVariant2} className="title">معلومات الدفع</motion.div>
            <div className="df-c text-xs">
              <div className="df">
              <span className="text">طريقة الدفع:</span>
              <span className=" text-black font-bold">الدفع عند الاستلام</span>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OrderDetails;
