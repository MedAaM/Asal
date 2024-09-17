import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom';
import { CiUser,  CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineCircleNotifications  } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import ModalContainer from "../Modal/ModalContainer";
import useModal from "./../../hooks/useModal";
import { motion } from "framer-motion";


import { MdCardGiftcard, MdEdit, MdHistoryEdu, MdNewspaper, MdNotificationAdd, MdOutlineCardMembership, MdPendingActions, MdWorkOutline } from "react-icons/md";
import { useAuthContext } from '../../hooks/useAuthContext';
import NotificationsModal from '../Modal/NotificationsModal';

function SideBar({setExpended, expended}) {
    const handleToggle = () => {
        setExpended(!expended);
      };

  const { dispatch } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem('auth');

    dispatch({ type: 'LOGOUT' });
  };
  const { modalOpen, close, open } = useModal();
  return (
    <div id="nav-bar">
      <ModalContainer>
        {modalOpen && (
          <NotificationsModal
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </ModalContainer>
      <input id="nav-toggle" onClick={handleToggle} type="checkbox" />
      <div id="nav-header">
        <a id="nav-title" href="#" target="_blank">
          <i class="fab fa-codepen"></i>الرحيق
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <Link to="home" class="nav-button">
          <CiUser className='fas' />
          <span>الملف الشخصي</span> 
        </Link>
        <Link class="nav-button notif-btn" onClick={open}>
          <MdOutlineCircleNotifications className="fas"/>
          <span>الإشعارات</span> 
          <div className="indicator">
            <span>3</span>
          </div>
        </Link>
        <Link to="orders" class="nav-button">
          <CiDeliveryTruck className="fas"/>
          <span>طلبات جديدة</span> 
        </Link>
        <hr />
        <Link to="transactions" class="nav-button">
          <GoHistory className="fas"/>
          <span>التاريخ</span> 
        </Link>
        <Link to="reviews" class="nav-button">
          <MdPendingActions className="fas"/>
          <span>المراجعات</span>
        </Link>
        <Link to="edit" class="nav-button">
          <MdEdit className="fas"/>
          <span>تعديل الملف الشخصي</span>
        </Link>
        <Link class="nav-button">
          <MdNewspaper className="fas"/>
          <span>الأخبار</span> 
        </Link>
        <hr />
        <Link class="nav-button">
          <MdCardGiftcard className="fas"/>
          <span>الهدايا</span>
        </Link>
        {/* <div class="btn" onClick={handleLogout} >
          logout
        </div> */}
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
          </div>
          <div id="nav-footer-titlebox">
            <a id="nav-footer-title" href="#" target="_blank">
              uahnbu
            </a>
            <span id="nav-footer-subtitle">مسؤول</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i class="fas fa-caret-up"></i>
          </label>
        </div>
        <div id="nav-footer-content">
          <p>
            لورم إيبسوم دولاور سيت أميت
          </p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
