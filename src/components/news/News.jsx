import React from 'react'
import "./news.css"
import { RiAdminFill } from 'react-icons/ri'
import { BsEyeSlash } from 'react-icons/bs'

function News() {
  return (
    <div className='news df-c'>
        <div className="title">breking news</div>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur adipisicing elit. Atque consectetur adipisicing elit. Atque aliquid fuga reiciendis officiis temporibus tenetur quisquam sunt cupiditate corporis ea.
        </p>
    <div className="announcedat df">12 sep 2024 at 12:21 || <div className="df"><RiAdminFill /> admins</div> || <BsEyeSlash /> (326)</div>
    </div>
  )
}

export default News