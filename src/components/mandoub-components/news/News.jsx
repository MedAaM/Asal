import React from 'react'
import "./news.css"
import { RiAdminFill } from 'react-icons/ri'
import { BsEyeSlash } from 'react-icons/bs'
import { CgAttachment } from 'react-icons/cg'

function News() {
  return (
    <div className='news section-card df-c'>
        <div className="title">أخبار عاجلة</div>
        <p className='text'>
          تنبيه هام لمجموعة الموظفين VIP: نود إبلاغكم بحدوث تحديثات جديدة تتعلق بالإجراءات الداخلية. يرجى من جميع الموظفين VIP متابعة التوجيهات الجديدة والامتثال لها. شكراً لتفهمكم.
        </p>
        <div className="df-c g0">
          <div className="df file"><CgAttachment /> file.pdf</div>
          <div className="df file" ><CgAttachment /> file.pdf</div>
          <div className="df file"><CgAttachment /> file.pdf</div>
        </div>
        <div className="announcedat df">
          12 سبتمبر 2024 الساعة 12:21 || <div className="df"><RiAdminFill /> المسؤولين</div> || <BsEyeSlash /> (326)
        </div>
    </div>
  )
}

export default News
