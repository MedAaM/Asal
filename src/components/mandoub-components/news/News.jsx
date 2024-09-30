import React from 'react'
import "./news.css"
import { RiAdminFill } from 'react-icons/ri'
import { BsEyeSlash } from 'react-icons/bs'
import { CgAttachment } from 'react-icons/cg'

function News() {
  return (
    <div className='news section-card df-c'>
        <div className="title df ">أخبار عاجلة <img src="https://th.bing.com/th/id/OIP.lduv8v6VWTyOdflEV156qAHaHa?w=198&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-10 h-10' alt="" /></div>
        <p className='text'>
          تنبيه هام لمجموعة الموظفين VIP: نود إبلاغكم بحدوث تحديثات جديدة تتعلق بالإجراءات الداخلية. يرجى من جميع الموظفين VIP متابعة التوجيهات الجديدة والامتثال لها. شكراً لتفهمكم.
        </p>
        <div className="announcedat df">
          12 سبتمبر 2024 الساعة 12:21 
        </div>
    </div>
  )
}

export default News
