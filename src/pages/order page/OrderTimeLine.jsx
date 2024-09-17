import React from 'react';
import './timeline.css';

function OrderTimeLine() {
  return (
    <div className="timeline">
      <div className="wrapper">
        <h1>طلبيتي 🚚</h1>
        <ul className="sessions">
          <li className='reached'>
            <div className="time">09:00 ص</div>
            <p>تم شحن الطلب 📦</p>
          </li>
          <li>
            <div className="time">09:30 ص</div>
            <p>في الطريق إلى المستودع 🚚</p>
          </li>
          <li>
            <div className="time">10:00 ص</div>
            <p>الطلب جاهز للتوصيل 📍</p>
          </li>
          <li>
            <div className="time">12:00 م</div>
            <p>تم تسليم الطلب إلى نقطة الاستلام 🏪</p>
          </li>
          <li>
            <div className="time">01:00 م</div>
            <p>الطلب في انتظار الاستلام من العميل 📬</p>
          </li>
          <li>
            <div className="time">03:00 م</div>
            <p>العميل استلم الطلب ✅</p>
          </li>
          <li>
            <div className="time">04:00 م</div>
            <p>تأكيد استلام الطلب من العميل 📑</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrderTimeLine;
