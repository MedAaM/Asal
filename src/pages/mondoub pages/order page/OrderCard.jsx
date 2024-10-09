import React from 'react'
import { FcCancel, FcImport, FcInspection, FcPositiveDynamic } from "react-icons/fc";


function OrderCard() {
  return (
    <div className="section-card">
  <div className="df jc-sb orderdet">
    <span className='title'> طلباتك </span>
    <div className="df periods">
      <span className='active'>يومي</span>
      <span>شهري</span>
      <span>سنوي</span>
    </div>
  </div>
  <ul className="df gap-8 box-info">
    <li className='jc-sb'>
      <span className="text">
        <p>الطلبات المعلقة</p>
        <h3 className='!font-bold'>35</h3>
      </span>
      <FcImport className='text-4xl' />
    </li>
    <li className='jc-sb'>
      <span className="text">
        <p>الطلبات الملغاة</p>
        <h3 className='!font-bold'>35</h3>
      </span>
      <FcCancel className='text-4xl' />
    </li>
    <li className='jc-sb'>
      <span className="text">
        <p>الطلبات المكتملة</p>
        <h3 className='!font-bold'>35</h3>
      </span>
      <FcInspection className='text-4xl' />
    </li>
    <li className='jc-sb'>
      <span className="text">
        <p>المعاملات المكتملة</p>
        <h3 className='!font-bold'>35</h3>
      </span>
      <FcPositiveDynamic className='text-4xl' />
    </li>
  </ul>
</div>

   
  )
}

export default OrderCard
