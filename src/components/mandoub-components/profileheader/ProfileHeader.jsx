import React from 'react';
import './profileHeader.css';
import { RiTeamLine } from 'react-icons/ri';
import { CiLocationOn } from 'react-icons/ci';
import { TfiEmail } from 'react-icons/tfi';
import { FaFacebook } from "react-icons/fa6";
import { LiaWhatsapp } from "react-icons/lia";
import { BsTelegram } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import Stars from '../../stars rate/Stars';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="profile-top-section">
        <img src="/img/banner.avif" className="banner" alt="إيما سميث" />
        <div className="df jc-sb profile-img-container w-11/12">
          <div className="df-c ">
            <div className='profile-img'>
              <img src="/img/about.png" alt="" />
            </div>
            <div className="df-c g0">
              <div className="profile-name bold-1">إيما سميث</div>
              <div className="text df"><TfiEmail /> emma@gmail.com</div>
              <Stars number={4} />
            </div>
          </div>
          <div className="profile-stats df">
            <div className="total-deliv ta-c">
              <div className="total bold-1">+157</div>
              إجمالي المبيعات
            </div>
            <div className="total-deliv bordered ta-c">
              <div className="total bold-1">5# </div>
              الترتيب هذا الأسبوع
            </div>
            <div className="total-deliv ta-c">
              <div className="total bold-1">+55 </div>
              العناصر المباعة هذا الأسبوع
            </div>
          </div>
          <div className="df-c g0">
            <div className='text df'>مجموعة VIP <RiTeamLine /></div>
            <div className='text df'>تونس، المهدية <CiLocationOn /></div>
          </div>
        </div>
      </div>
      <div className="df-c profile-details">
        <div className="df jc-sb">
          <div className="btn">تعديل المعلومات</div>
          <div className="df jc-sa gap-8 !border-none media-list">
        <div className="df-c g0 ai-center">
          <div className="bor">
            <div className="media-cont">
              <FaFacebook />
            </div>

          </div>
        </div>
        <div className="df-c g0 ai-center">
          <div className="bor">
            <div className="media-cont whatsapp">
              <LiaWhatsapp />
            </div>

          </div>
        </div>
        <div className="df-c g0 ai-center">
          <div className="bor">
            <div className="media-cont telegram">
              <BsTelegram />
            </div>

          </div>
        </div>
        <div className="df-c g0 ai-center">
          <div className="bor">
            <div className="media-cont instagram">
              <CiInstagram />
            </div>

          </div>
        </div>
      </div>
        </div>
        <div className="df mt-8 jc-sa">
          <div className="card-stock-details">
            <div className="bold-1">مخزونك من السمراء</div>
            <div className="text">لديك 100 كجم متبقية من 250 كجم</div>
          </div>
          <div className="card-stock-details">
            <div className="bold-1">مخزونك من السمراء</div>
            <div className="text">لديك 100 كجم متبقية من 250 كجم</div>
          </div>
          <div className="card-stock-details">
            <div className="bold-1">مخزونك من السمرء</div>
            <div className="text">لديك 100 كجم متبقية من 250 كجم</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
