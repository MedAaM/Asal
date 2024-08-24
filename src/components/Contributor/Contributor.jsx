import React from "react";
import "./Contributor.css";
import ImgShapeContainer from "../img shape/ImgShapeContainer";
import Stars from "../stars rate/Stars";

function Contributor() {
  return (
    <div className="card">
      <ImgShapeContainer path={"/img/about.png"} />
      <div>
        <h2 className="name">مورغان سويني</h2>
        <Stars number={4} />
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
      <div className="desc">
        لقد حقق مراد سديري 100 كغ هذا الأسبوع! ببيع 20 كغ من صمرة، 50 كغ من العسل الأبيض، و30 كغ من سدر.
      </div>
    </div>
  );
}

export default Contributor;
