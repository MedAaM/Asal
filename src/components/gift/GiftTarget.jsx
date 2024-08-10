import React from "react";
import "./GiftTarget.css";
import ImgShapeContainer from "../img shape/ImgShapeContainer";

function GiftTarget() {
  return (
    <div className="df main--container">
      <div className="df-c gift--container jc-sb">
        <div className="gift--target mt-3 df">
          <ImgShapeContainer path={"/img/about.png"} width={5} height={5} />
          <div className="target">
            <div className="top">
              <img
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt=""
                srcSet=""
              />
            </div>
            <div className="second">
              <img
                src="https://www.indiafilings.com/learn/wp-content/uploads/2023/03/Can-a-single-person-own-a-firm-in-India.jpg"
                alt=""
                srcSet=""
              />
            </div>
            <div className="line"></div>
          </div>
          <div className="gift">
            <img src={"/img/iphone.png"} />
          </div>
        </div>
        <div className="df">
          <ImgShapeContainer path={"/img/iphone.png"} />
            <ul>
              <li>آيفون 12</li>
              <li>
                أحدث موديل بميزات متقدمة، شاشة Super Retina XDR، كاميرا مزدوجة
                عالية الجودة، ومعالج A14 Bionic
              </li>
            </ul>
        </div>
        <ul>
          <li>تاريخ الاستحقاق: 2025/01/01</li>
          <li>إجمالي الكمية للتسليم: 1500</li>
          <li>تم التسليم: 600</li>
          <li>تصنيفك: 27</li>
        </ul>
      </div>
      <div className="df-c leaderboard">
        <div className="df jc-sb">
          <div className="df-c ai-c g0 leader trans">
            <img
              src="https://www.indiafilings.com/learn/wp-content/uploads/2023/03/Can-a-single-person-own-a-firm-in-India.jpg"
              alt=""
              srcSet=""
            />
            <span className="df-c g0">
              <span>أحمد الأزلوك</span>
              <img className="medal" src={"/img/medal (1).png"} />
            </span>
          </div>
          <div className="df-c ai-c leader">
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt=""
              srcSet=""
            />
            <span className="df-c">
              <span>أنيس العلوي</span>
              <img className="medal" src={"/img/medal.png"} />
            </span>
          </div>
          <div className="df-c ai-c g0 leader trans">
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt=""
              srcSet=""
            />
            <span className="df-c g0">
              <span>سامي بن سالم</span>
              <img className="medal" src={"/img/medal (2).png"} />
            </span>
          </div>
        </div>
        <table className="content-table mt-3">
          <thead>
            <tr className="">
              <th>الترتيب</th>
              <th>الصورة</th>
              <th>الاسم</th>
              <th>الأوزان</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>1</td>
              <td>img</td>
              <td>أحمد الأزلوك</td>
              <td>1100 كغ</td>
            </tr>
            <tr className="active-row">
              <td>2</td>
              <td>img</td>
              <td>أنيس العلوي</td>
              <td>900 كغ</td>
            </tr>
            <tr className="">
              <td>3</td>
              <td>img</td>
              <td>سامي بن سالم</td>
              <td>850 كغ</td>
            </tr>
            <tr className="">
              <td>4</td>
              <td>img</td>
              <td>مروان حمزة</td>
              <td>800 كغ</td>
            </tr>
            <tr className="">
              <td>5</td>
              <td>img</td>
              <td>يوسف الغربي</td>
              <td>750 كغ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GiftTarget;
