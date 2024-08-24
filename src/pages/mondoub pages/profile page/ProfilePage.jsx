import React, { useState } from 'react';
import './profilepage.css';
import SideBar from '../../../components/mandoub sidebar/SideBar';
import Edit from '../../edit profile/Home';
import Orders from '../../order page/Orders';
import { Routes, Route } from 'react-router-dom';
import Home from '../../edit profile/Home';
import EditProfilePage from '../edit-profile/EditProfilePage';

function ProfilePage() {
  const [expended, setExpended] = useState(true)
  return (
    <div className="profile--page df g0 ai-fs">
      <SideBar setExpended={setExpended} expended={expended} />
      <div className={`profile--content ${expended ? " expended" : ""}`}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="edit" element={<EditProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default ProfilePage;
