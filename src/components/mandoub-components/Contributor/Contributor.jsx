import React from "react";
import "./Contributor.css";
import ImgShapeContainer from "../../img shape/ImgShapeContainer";
import Stars from "../../stars rate/Stars";
import { MdReport } from "react-icons/md";
import { FcVip } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import { FaFacebook } from "react-icons/fa6";
import { LiaWhatsapp } from "react-icons/lia";
import { BsTelegram } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";

function Contributor() {
  return (
    <div className="card">
      <img src="/img/banner.avif" className="banner" alt="إيما سميث" />
      <div className="df jc-sb pt-5 text-3xl w-full">
        <GoReport /> <FcVip />
      </div>
      <div className="df-c g0">
        <div className="card-img-cont">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6K_0tuPMdpV7xHVEqo4TvfpWIk-GkEE5Tr34yZoOjo6mT42LIxUf0QCu2IH2xjfvOtt4&usqp=CAU"} className="card-img" />
        </div>
        <div>
          <h2 className="name">مورغان سويني</h2>
          <div className="!text-sm text df mt-1" >
            <Stars number={4} /> <span className="text-xs">(873)</span>
          </div>
        </div>

      </div>
      <div className="desc ">
        لقد حقق مراد سديري 100 كغ هذا الأسبوع! ببيع 20 كغ من صمرة، 50 كغ من العسل الأبيض، و30 كغ من سدر.
      </div>
      <div className="actions">
        <div className="df">
          <span>صمرة</span>
          <div className="progress-container">
            <div className="progress-bar" style={{width: `${30.23}%`}}>
              <div className="progress-label">30.23%</div>
            </div>
          </div>
        </div>
        <div className="df">
          <span>سدر</span>
          <div className="progress-container cyan">
            <div className="progress-bar cyan" style={{width: `${58.23}%`}}>
              <div className="progress-label">58.23%</div>
            </div>
          </div>
        </div>
        <div className="df">
          <span>عسل أبيض</span>
          <div className="progress-container pink">
            <div className="progress-bar pink" style={{width: `${60.73}%`}}>
              <div className="progress-label">60.73%</div>
            </div>
          </div>
        </div>
        <div className="df">
          <span>تقدم الطاقة</span>
          <div className="progress-container purple">
            <div className="progress-bar purple" style={{width: `${20.23}%`}}>
              <div className="progress-label">20.23%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="df jc-sa w-full media-list">
  <div className="df-c g0 ai-center">
    <div className="bor">
      <div className="media-cont">
        <FaFacebook />
      </div>
    </div>
    <span className="text-xs">فيسبوك</span>
  </div>
  <div className="df-c g0 ai-center">
    <div className="bor">
      <div className="media-cont whatsapp">
        <LiaWhatsapp />
      </div>
    </div>
    <span className="text-xs">واتساب</span>
  </div>
  <div className="df-c g0 ai-center">
    <div className="bor">
      <div className="media-cont telegram">
        <BsTelegram />
      </div>
    </div>
    <span className="text-xs">تليجرام</span>
  </div>
  <div className="df-c g0 ai-center">
    <div className="bor">
      <div className="media-cont instagram">
        <CiInstagram />
      </div>
    </div>
    <span className="text-xs">انستغرام</span>
  </div>
</div>

      
    </div>
  );
}

export default Contributor;
