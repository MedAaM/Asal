import React from 'react'
import { arabicLocaleText } from '../../../utils/arabic-settings';
import { TbClock12, TbEyeDollar, TbLayoutAlignCenter } from 'react-icons/tb';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function OrderCard() {
  return (
    <ul className="df box-info">
        <li>
          <TbLayoutAlignCenter className="bx bxs-calendar-check" />
          <span className="text">
            <h3>35</h3>
            <p>الطلبات المعلقة</p>
          </span>
        </li>
        <li>
          <TbLayoutAlignCenter className="bx bxs-calendar-check" />
          <span className="text">
            <h3>1020</h3>
            <p>إجمالي الطلبات</p>
          </span>
        </li>
        <li>
          <TbClock12 className="bx bxs-group" />
          <span className="text">
            <h3>140</h3>
            <p>المعاملات</p>
          </span>
        </li>
        <li>
          <TbEyeDollar className="bx bxs-dollar-circle" />
          <span className="text">
            <h3>$2543</h3>
            <p>إجمالي المبيعات</p>
          </span>
        </li>
      </ul>
  )
}

export default OrderCard
