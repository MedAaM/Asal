import React, { useState } from 'react'; 
import './profilepage.css';
import SideBar from '../../../components/mandoub-components/mandoub sidebar/SideBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../home-page/Home';
import EditProfilePage from '../edit-profile/EditProfilePage';
import OrderDetails from '../../mondoub pages/order page/OrderDetails';
import TransactionsPage from '../transactions/TransactionsPage';
import ReviewsPage from '../../../components/mandoub-components/reviews/ReviewsPage';
import Orders from "./../order page/Orders"
import MandoubNav from '../../../components/mandoub-components/mandoub-nav/MandoubNav';
import Notifications from '../notifications-page/Notifications';
import Chat from '../chat-page/Chat';

function ProfilePage() {
  const [expended, setExpended] = useState(true);
  
  return (
    <div className="profile--page df g0 ai-fs">
      <SideBar setExpended={setExpended} expended={expended} />
      <div className={`profile--content ${expended ? " expended" : ""}`}>
        <MandoubNav />
        <Routes>
          {/* Redirect to Home by default when accessing the ProfilePage */}
          <Route path="/" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="edit" element={<EditProfilePage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="orders/details/:id" element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default ProfilePage;
