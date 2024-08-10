import React from "react";
import ImgShapeContainer from "../img shape/ImgShapeContainer";
import "./profileHeader.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import Stars from "../stars rate/Stars";

function ProfileHeader() {
  return (
    <div>
      <div className="df jc-sb header">
        <div className="level-container">
          <ImgShapeContainer path={"/img/about.png"} />
          <span className="level center-content">LVL 5</span>
        </div>
        <div className="user-info df-c">
            <span>أحمد عزلوك</span>
            <div className="df">
                <IoLocationOutline />
                تطاوين
            </div>
        </div>
        <div className="df-c ta-c">
            <Stars number={4} />
            تقييم متوسط
        </div>
        <div className="bio">
            "إِن تُصِبْكَ حَسَنَةٌ تَسُؤْهُمْ ۖ وَإِن تُصِبْكَ مُصِيبَةٌ يَقُولُوا قَدْ أَخَذْنَا أَمْرَنَا مِن قَبْلُ وَيَتَوَلَّوا وَّهُمْ فَرِحُونَ (50) قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا ۚ وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ"<br />(السيرة الذاتية)
        </div>
        <div className="total-deliv ta-c">
            <div className="total">+ 157</div>
            العناصر المُسَلَّمَة
        </div>
        <div className="df-c">
            <AiOutlineInstagram />
            <AiOutlineFacebook />
            <AiFillTwitterSquare />
            <AiOutlineWhatsApp />
            <BiLogoGmail />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
