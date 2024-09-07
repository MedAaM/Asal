import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData';
import { Typography } from '@mui/material';

function OrderHeader() {
    const { id } = useParams();
    const {data} = useFetchData("orders/"+id, false);
    console.log(data);
    

  return (
    <div>
        <div className="df jc-sb">
            <div className="df-c">
                <div className='df'>
                <Typography variant='h5'>{`Order #${data?.order?.orderId}`}</Typography> <div className="pending">pending</div> <div className="paid">paid</div>
                </div>

                <Typography >{`${data?.order?.createdAt}`}</Typography>
            </div>
            <div className='btn'>hello</div>
        </div>
    </div>
  )
}

export default OrderHeader