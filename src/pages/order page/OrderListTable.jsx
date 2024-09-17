import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { FaRegEye } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

function OrderListTable() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const getPaymentStatusClass = (status) => {
    switch (status) {
      case 'Paid':
        return 'Paid';
      case 'Pending':
        return 'pending';
      case 'Cancelled':
        return 'cancelled';
      case 'Failed':
        return 'failed';
      default:
        return 'unknown';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'delivered';
      case 'Ready to Pickup':
        return 'ready-to-pickup';
      case 'Out for Delivery':
        return 'out-for-delivery';
      case 'Dispatched':
        return 'dispatched';
      default:
        return 'unknown';
    }
  };

  useEffect(() => {
    // Define the columns with Arabic headers
    const selectedColumns = [
      { 
        field: 'order', 
        headerName: 'الطلب', 
        width: 100,
        renderCell: (params) => (
          <div className={"x-center order-id"}>
             <span>{params.value}</span>
          </div>
        )
      },
      { field: 'date', headerName: 'التاريخ', width: 200 },
      { 
        field: 'customer', 
        headerName: 'العميل', 
        width: 200,
        renderCell: (params) => (
          <div className={`df`}>
            <div className="order-cus-img">
              <img src='/img/about.png' alt="customer" />
            </div>
            <div className="df-c g0">
              <div className='bold-1 h-4 leading-none text-right'>{params.value.name}</div>
              <div className='text leading-none h-4 text-xs'>{params.value.email}</div>
            </div>
          </div>
        )
      },
      {
        field: 'payment',
        headerName: 'الدفع',
        width: 150,
        renderCell: (params) => (
          <div className={`mr-4 g0 payment df ${getPaymentStatusClass(params.value)}`}>
            <div className={`status-dot ord-${params.value}`}>
              {params.value}
            </div>
          </div>
        )
      },
      {
        field: 'status',
        headerName: 'الحالة',
        width: 150,
        renderCell: (params) => (
          <div className={`status df ${getStatusClass(params.value)}`}>
            <div className={`status-label`}>
              {params.value}
            </div>
          </div>
        )
      },
      {
        field: 'method',
        headerName: 'طريقة الدفع',
        width: 150,
        renderCell: (params) => {
          let imgSrc = '';
          switch (params.value) {
            case 'Visa':
              imgSrc = '/img/visa.png';
              break;
            case 'Paypal':
              imgSrc = '/img/paypal.png';
              break;
            case 'Mastercard':
              imgSrc = '/img/mastercard.png';
              break;
            default:
              imgSrc = '/img/default.png'; // Use a default image if needed
              break;
          }
      
          return (
            <div className="df method-cell">
              <img src={imgSrc} alt={params.value} className='w-8 h-8 object-contain'/>
              <span>{params.value}</span>
            </div>
          );
        }
      }
      ,
      { 
        field: 'actions', 
        headerName: 'الإجراء', 
        width: 150,
        renderCell: (params) => (
          <div className={`x-center df ord--actions`}>
            <Link to={`details/order/${params.value}`}><FaRegEye /></Link>
            <MdDeleteOutline />
          </div>
        )
      },
    ];

    setColumns(selectedColumns);

    // Fake data array
    const orders = [
      { id: 1, order: '#5434', date: 'Mon May 16 2022, 2:11 AM', customer: { name: 'Gabrielle Feyer', email: 'gfeyer0@nyu.edu' }, payment: 'Paid', status: 'Delivered', method: 'Paypal', actions: '5434' },
      { id: 2, order: '#6745', date: 'Wed May 03 2023, 7:26 PM', customer: { name: 'Jackson Deignan', email: 'jdeignan1@dell.com' }, payment: 'Cancelled', status: 'Delivered', method: 'Paypal', actions: '6745' },
      { id: 3, order: '#6087', date: 'Thu Dec 15 2022, 6:51 PM', customer: { name: 'Tanya Crum', email: 'tcrum2@yandex.ru' }, payment: 'Failed', status: 'Ready to Pickup', method: 'Visa', actions: '6087' },
      { id: 4, order: '#7825', date: 'Fri Aug 05 2022, 9:18 PM', customer: { name: 'Dallis Dillestone', email: 'ddillestone3@archive.org' }, payment: 'Cancelled', status: 'Ready to Pickup', method: 'Paypal', actions: '7825' },
      { id: 5, order: '#5604', date: 'Sat Jun 18 2022, 3:34 AM', customer: { name: 'Conan Kennham', email: 'ckennham4@cnn.com' }, payment: 'Cancelled', status: 'Delivered', method: 'Mastercard', actions: '5604' },
      { id: 6, order: '#5390', date: 'Fri Oct 14 2022, 6:12 PM', customer: { name: 'Daven Brocket', email: 'dbrocket5@epa.gov' }, payment: 'Cancelled', status: 'Out for Delivery', method: 'Visa', actions: '5390' },
      { id: 7, order: '#7279', date: 'Mon Aug 08 2022, 6:09 PM', customer: { name: 'Rex Farbrace', email: 'rfarbrace6@sourceforge.net' }, payment: 'Pending', status: 'Out for Delivery', method: 'Paypal', actions: '7279' },
      { id: 8, order: '#7003', date: 'Fri Jun 10 2022, 12:59 PM', customer: { name: 'Tann Biaggetti', email: 'tbiaggetti7@eepurl.com' }, payment: 'Failed', status: 'Delivered', method: 'Mastercard', actions: '7003' },
      { id: 9, order: '#8632', date: 'Tue Oct 25 2022, 10:48 AM', customer: { name: 'Abagael Drogan', email: 'adrogan8@storify.com' }, payment: 'Failed', status: 'Dispatched', method: 'Visa', actions: '8632' },
      { id: 10, order: '#8501', date: 'Wed Nov 02 2022, 2:19 PM', customer: { name: 'Esme Sangwin', email: 'esangwin9@taobao.com' }, payment: 'Cancelled', status: 'Ready to Pickup', method: 'Paypal', actions: '8501' },
    ];

    setRows(orders);
  }, []);

  return (
    <div className="section-card" style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
}

export default OrderListTable;
