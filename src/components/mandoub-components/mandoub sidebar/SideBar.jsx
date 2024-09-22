import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom';
import { CiUser, CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineCircleNotifications } from "react-icons/md";
import ModalContainer from "../../Modal/ModalContainer";
import useModal from "../../../hooks/useModal";

import { MdCardGiftcard, MdEdit, MdHistoryEdu, MdNewspaper, MdNotificationAdd, MdOutlineCardMembership, MdPendingActions, MdWorkOutline } from "react-icons/md";
import { useAuthContext } from '../../../hooks/useAuthContext';
import NotificationsModal from '../../Modal/NotificationsModal';
import { BiDollar, BiLogOut } from 'react-icons/bi';

function SideBar({ setExpended, expended }) {
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
                    <i className="fab fa-codepen"></i>الرحيق
                </a>
                <label htmlFor="nav-toggle">
                    <span id="nav-toggle-burger"></span>
                </label>
                <hr />
            </div>
            <div id="nav-content">
                <Link to="home" className="nav-button">
                    <CiUser className='fas' />
                    <span>الملف الشخصي</span>
                </Link>
                <Link className="nav-button notif-btn" onClick={open}>
                    <MdOutlineCircleNotifications className="fas" />
                    <span>الإشعارات</span>
                    <div className="indicator">
                        <span>3</span>
                    </div>
                </Link>
                <Link to="orders" className="nav-button">
                    <CiDeliveryTruck className="fas" />
                    <span>طلبات جديدة</span>
                </Link>
                <hr />
                <Link to="transactions" className="nav-button">
                    <BiDollar className="fas" />
                    <span>المالية</span>
                </Link>
                <Link to="reviews" className="nav-button">
                    <MdPendingActions className="fas" />
                    <span>المراجعات</span>
                </Link>
                <Link to="edit" className="nav-button">
                    <MdEdit className="fas" />
                    <span>تعديل الملف الشخصي</span>
                </Link>
                <hr />
                <Link className="nav-button" onClick={handleLogout}>
                    <BiLogOut className="fas" />
                    <span>تسجيل الخروج</span>
                </Link>
                <div id="nav-content-highlight"></div>
            </div>
            <input id="nav-footer-toggle" type="checkbox" />
            <div id="nav-footer">
                <div id="nav-footer-heading">
                    <div id="nav-footer-avatar">
                        <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
                    </div>
                    <div id="nav-footer-titlebox">
                        <div id="nav-footer-title">
                            أزلوك أحمد
                        </div>
                        <span id="nav-footer-subtitle">مجموعة VIP</span>
                    </div>
                    <label htmlFor="nav-footer-toggle">
                        <i className="fas fa-caret-up"></i>
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
