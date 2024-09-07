import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useFetchData } from '../../hooks/useFetchData';
import { arabicLocaleText } from '../../utils/arabic-settings';
import { FaRegEye } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

function OrderListTable() {
  const { data } = useFetchData("orders", false);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  // Function to get the class based on payment status
  const getPaymentStatusClass = (status) => {
    switch (status) {
      case 'paid':
        return 'paid';
      case 'pending':
        return 'pending';
      case 'placed':
        return 'placed';
      default:
        return 'unknown';
    }
  };

  useEffect(() => {
    if (data && data.orders) {
      // Define the columns with Arabic headers
      const selectedColumns = [
        { field: 'orderId', headerName: 'رقم الطلب', width: 150 },
        { field: 'date', headerName: 'التاريخ', width: 200 },
        { field: 'customerId', headerName: 'رقم العميل', width: 150 },
        { 
          field: 'payment', 
          headerName: 'الدفع', 
          width: 150,
          // Render cell with class based on payment status
          renderCell: (params) => (
            <div className={`x-center g0 payment df ${getPaymentStatusClass(params.value)}`}>
              <GoDotFill /> <div>{params.value}</div>
            </div>
          )
        },
        { field: 'status', headerName: 'الحالة', width: 150, renderCell: (params) => (
            <div className={`${getPaymentStatusClass(params.value)}`}>
              {params.value}
            </div>
          ) 
        },
        { field: 'method', headerName: 'الطريقة', width: 150 },
        { field: 'action', headerName: 'الإجراء', width: 150, 
          renderCell: (params) => (
          <div className={`x-center df ord--actions`}>
            <Link to ={`details/order/${params.value}`} ><FaRegEye /></Link> <MdDeleteOutline />
          </div>
        ) },
      ];

      setColumns(selectedColumns);

      // Transform the data to fit the selected columns
      const transformedRows = data.orders.map(order => ({
        id: order._id, // Assuming _id is used as Order ID
        orderId: order.orderId, // Set the ID field for DataGrid
        date: order.createdAt ? new Date(order.createdAt).toLocaleString('ar') : 'غير متوفر',
        customerId: order.user || 'غير متوفر',
        payment: order.paymentStatus || 'غير معروف',
        status: order.orderStatus || 'غير متوفر',
        method: order.paymentMethod || 'غير متوفر',
        action: order._id, // Placeholder for any action (you can customize this)
      }));

      setRows(transformedRows);
    }
  }, [data]);

  return (
    <div className="orders-table" style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        slots={{ toolbar: GridToolbar }}
        localeText={arabicLocaleText}
        disableColumnResize
      />
    </div>
  );
}

export default OrderListTable;
