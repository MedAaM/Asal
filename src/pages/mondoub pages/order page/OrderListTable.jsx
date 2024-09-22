import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { FaRegEye } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { arabicLocaleText } from '../../../utils/arabic-settings';

function OrderListTable() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const getPaymentStatusClass = (status) => {
    switch (status) {
      case 'مدفوع':
        return 'Paid';
      case 'معلق':
        return 'pending';
      case 'ملغى':
        return 'cancelled';
      case 'فشل':
        return 'failed';
      default:
        return 'unknown';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'تم التسليم':
        return 'delivered';
      case 'جاهز للاستلام':
        return 'ready-to-pickup';
      case 'خرج للتوصيل':
        return 'out-for-delivery';
      case 'تم الإرسال':
        return 'dispatched';
      default:
        return 'unknown';
    }
  };

  useEffect(() => {
    const selectedColumns = [
      {
        field: 'order',
        headerName: 'الطلب',
        width: 100,
        renderCell: (params) => (
          <div className="x-center order-id">
            <span>{params.value}</span>
          </div>
        ),
      },
      { field: 'date', headerName: 'التاريخ', width: 200 },
      {
        field: 'customer',
        headerName: 'العميل',
        width: 250,
        renderCell: (params) => (
          <div className="df">
            <div className="order-cus-img">
              <img src="/img/about.png" alt="العميل" />
            </div>
            <div className="df-c g0">
              <div className="bold-1 h-4 leading-none text-right">{params.value.name}</div>
              <div className="text leading-none h-4 text-xs">{params.value.email}</div>
            </div>
          </div>
        ),
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
        ),
      },
      {
        field: 'status',
        headerName: 'الحالة',
        width: 150,
        renderCell: (params) => (
          <div className={`status df ${getStatusClass(params.value)}`}>
            <div className="status-label">
              {params.value}
            </div>
          </div>
        ),
      },
      {
        field: 'method',
        headerName: 'طريقة الدفع',
        width: 150,
        renderCell: (params) => {
          let imgSrc = '';
          switch (params.value) {
            case 'فيزا':
              imgSrc = '/img/visa.png';
              break;
            case 'باي بال':
              imgSrc = '/img/paypal.png';
              break;
            case 'ماستر كارد':
              imgSrc = '/img/mastercard.png';
              break;
            default:
              imgSrc = '/img/default.png';
              break;
          }

          return (
            <div className="df method-cell">
              <img src={imgSrc} alt={params.value} className="w-8 h-8 object-contain" />
              <span>{params.value}</span>
            </div>
          );
        },
      },
      {
        field: 'actions',
        headerName: 'الإجراء',
        width: 150,
        renderCell: (params) => (
          <div className="x-center df ord--actions">
            <Link to={`/details/order/${params.value}`}><FaRegEye /></Link>
            <MdDeleteOutline />
          </div>
        ),
      },
    ];

    setColumns(selectedColumns);

    const orders = [
      { id: 1, order: '#5434', date: 'الاثنين 16 مايو 2022, 2:11 ص', customer: { name: 'جابرييل فيير', email: 'gfeyer0@nyu.edu' }, payment: 'مدفوع', status: 'تم التسليم', method: 'باي بال', actions: '5434' },
      { id: 2, order: '#6745', date: 'الأربعاء 3 مايو 2023, 7:26 م', customer: { name: 'جاكسون ديجنن', email: 'jdeignan1@dell.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'باي بال', actions: '6745' },
      { id: 3, order: '#6087', date: 'الخميس 15 ديسمبر 2022, 6:51 م', customer: { name: 'تانيا كروم', email: 'tcrum2@yandex.ru' }, payment: 'فشل', status: 'جاهز للاستلام', method: 'فيزا', actions: '6087' },
      { id: 4, order: '#7825', date: 'الجمعة 5 أغسطس 2022, 9:18 م', customer: { name: 'داليس ديلستون', email: 'ddillestone3@archive.org' }, payment: 'ملغى', status: 'جاهز للاستلام', method: 'باي بال', actions: '7825' },
      { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
      { id: 6, order: '#5390', date: 'الجمعة 14 أكتوبر 2022, 6:12 م', customer: { name: 'ديفن بروكيت', email: 'dbrocket5@epa.gov' }, payment: 'ملغى', status: 'خرج للتوصيل', method: 'فيزا', actions: '5390' },
      { id: 7, order: '#7279', date: 'الاثنين 8 أغسطس 2022, 6:09 م', customer: { name: 'ريكس فاربراس', email: 'rfarbrace6@sourceforge.net' }, payment: 'معلق', status: 'خرج للتوصيل', method: 'باي بال', actions: '7279' },
      { id: 8, order: '#7003', date: 'الجمعة 10 يونيو 2022, 12:59 م', customer: { name: 'تاني بيجيتي', email: 'tbiaggetti7@eepurl.com' }, payment: 'فشل', status: 'تم التسليم', method: 'ماستر كارد', actions: '7003' },
      { id: 9, order: '#8632', date: 'الثلاثاء 25 أكتوبر 2022, 10:48 ص', customer: { name: 'اباجايل دروجان', email: 'adrogan8@storify.com' }, payment: 'فشل', status: 'تم الإرسال', method: 'فيزا', actions: '8632' },
      { id: 10, order: '#8501', date: 'الأربعاء 2 نوفمبر 2022, 2:19 م', customer: { name: 'إسمي سانجوين', email: 'esangwin9@taobao.com' }, payment: 'ملغى', status: 'جاهز للاستلام', method: 'باي بال', actions: '8501' },
    ];

    setRows(orders);
  }, []);

  return (
    <div className="section-card" style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        components={{ Toolbar: GridToolbar }}
        localeText={arabicLocaleText} 
      />
    </div>
  );
}

export default OrderListTable;
