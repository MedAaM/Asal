import OrderHeader from "../../../components/mandoub-components/order-header/OrderHeader";
import OrderTimeLine from "./OrderTimeLine";
import OrderItems from "../../../components/mandoub-components/order-header/OrderItems";
import { LuBox } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2 } from "../../../utils/motion";
import { GoLocation } from "react-icons/go";

function OrderDetails() {
  return (
    <div className="df-c det">
      <OrderHeader />
      <div className="df wrap res ai-fs">
        <div className="df-c flex1">
        <OrderItems />
        <div className="section-card ord-timeline">
            <OrderTimeLine />
          </div>
        </div>
        <div 
         variants={staggerChildren}
        className="df-c w-1/3 costumer">
          <div className="section-card cus-info !gap-6 w-100">
            <div variants={textVariant2} className="df-c">
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
            </div>
            
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
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
