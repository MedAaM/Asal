import React from "react";
import "./target.css";
import { MdStarRate } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { GiHoneyJar } from "react-icons/gi";

function Target() {
  const targets = [
    { name: "سمر", total: 120, delivered: 85 },
    { name: "طلح", total: 100, delivered: 65 },
    { name: "عسل أبيض", total: 120, delivered: 120 },
    { name: "gift", total: 150, delivered: 60 },
  ];

  return (
    <div className="targets df-c">
      <div className="title">الأهداف الشهرية</div>

      <div className="df jc-sa pr">
        {targets.map((target, index) => {
          const percentage = (target.delivered / target.total) * 100;
          const remaining = target.total - target.delivered;
          return (
            <div key={index} className="CompactCard">
              <div className={`radialBar ${(percentage === 100) ? "reached" : ""}`}>
                <CircularProgressbar value={percentage} text={`${Math.round(percentage)}%`} />
                <span>{remaining} كغ متبقية</span>
              </div>
              <div className="detail">
                <div className="df">
                  <GiHoneyJar />
                  {target.name}
                </div>
                <span>{target.total} كغ</span>
                <span>{target.delivered}/{target.total} تم التوصيل</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Target;
