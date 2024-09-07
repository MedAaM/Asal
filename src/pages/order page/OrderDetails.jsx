import React from 'react'
import OrderHeader from '../../components/order-header/OrderHeader'
import { Typography } from '@mui/material'
import OrderDetailsTable from './OrderDetailsTable'

function OrderDetails() {
  return (
    <div className='df-c'>
        <OrderHeader />
        <div className="df ai-fs">
            <OrderDetailsTable />
            <div className="df-c">
        <div className="section-card">
            lorem
        </div>
        <div className="section-card">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, impedit reiciendis. Maiores veritatis, architecto porro iure animi quod cumque ratione?
        </div>

    </div>
        </div>
    </div>
    
  )
}

export default OrderDetails