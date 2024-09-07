import React from 'react';
import './orders.css';
import OrderCard from './OrderCard';
import OrderListTable from './OrderListTable';
import Transaction from './Transaction';

function Orders() {
  


  return (
    <div className="orders df-c">
      <OrderCard />
      <OrderListTable />
      <Transaction />
      
    </div>
  );
}

export default Orders;
