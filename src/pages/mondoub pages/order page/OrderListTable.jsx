import { useMemo, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AG_GRID_LOCALE_EG } from "../../../utils/arabic-settings";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

ModuleRegistry.registerModules([ClientSideRowModelModule]);
function OrderListTable() {
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

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  // Array of orders
  const orders = [
    { id: 1, order: '#5434', date: 'الاثنين 16 مايو 2022, 2:11 ص', customer: { name: 'جابرييل فيير', email: 'gfeyer0@nyu.edu' }, payment: 'مدفوع', status: 'تم التسليم', method: 'باي بال', actions: '5434' },
    { id: 2, order: '#6745', date: 'الأربعاء 3 مايو 2023, 7:26 م', customer: { name: 'جاكسون ديجنن', email: 'jdeignan1@dell.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'باي بال', actions: '6745' },
    { id: 3, order: '#6087', date: 'الخميس 15 ديسمبر 2022, 6:51 م', customer: { name: 'تانيا كروم', email: 'tcrum2@yandex.ru' }, payment: 'فشل', status: 'جاهز للاستلام', method: 'فيزا', actions: '6087' },
    { id: 4, order: '#7825', date: 'الجمعة 5 أغسطس 2022, 9:18 م', customer: { name: 'داليس ديلستون', email: 'ddillestone3@archive.org' }, payment: 'ملغى', status: 'جاهز للاستلام', method: 'باي بال', actions: '7825' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
    { id: 5, order: '#5604', date: 'السبت 18 يونيو 2022, 3:34 ص', customer: { name: 'كونان كنهام', email: 'ckennham4@cnn.com' }, payment: 'ملغى', status: 'تم التسليم', method: 'ماستر كارد', actions: '5604' },
  ];

  // Set rowData to the orders array
  const [rowData] = useState(orders);

  const [columnDefs] = useState([
    { field: "order", headerName: "الطلب" ,cellRenderer: (params) => (
      <div className="order-id">
        <span>{params.value}</span>
      </div>
    ), },         // order
    { field: "date", headerName: "التاريخ" },         // date
    { field: "customer", headerName: "العميل", minWidth: 300,
      cellRenderer: (params) => (
        <div className="df">
          <div className="order-cus-img">
            <img src="/img/about.png" alt="العميل" />
          </div>
          <div className="df-c g0">
            <div className="bold-1 h-4 leading-none text-right">{params.value.name}</div>
            <div className="text leading-none h-4 text-xs">{params.value.email}</div>
          </div>
        </div>
      )
     }, // customer name
    { field: "payment", headerName: "الدفع", cellRenderer: (params) => (
      <div className={`mr-4 g0 payment !h-full df ${getPaymentStatusClass(params.value)}`}>
        <div className={`status-dot !h-full ord-${params.value}`}>
          {params.value}
        </div>
      </div>
    ), },        // payment
    { field: "status", headerName: "الحالة",cellRenderer: (params) => (
      <div className="h-full w-full df items-center content-center ord--actions">
        <div className={`status df ${getStatusClass(params.value)}`}>
          <div className="status-label">
            {params.value}
          </div>
        </div>

      </div>
    ), },        // status
    { field: "method", headerName: "طريقة الدفع",cellRenderer: (params) => {
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
  },   // payment method
    {
      field: "actions",
      headerName: "الإجراء",
      cellRenderer: (params) => (
        <div className="x-center df ord--actions">
          <Link to={`details/${params.value}`}><FaRegEye /></Link>
          <MdDeleteOutline />
        </div>
      ),
      
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      editable: false,
      flex: 1,
      minWidth: 100,
      filter: true,
    };
  }, []);

  // Handler for "Details" button
  const handleDetails = (params) => {
    console.log("Details clicked for order:", params.data.order);
    // Add your logic here, e.g., show a modal with order details
  };

  // Handler for "Delete" button
  const handleDelete = (params) => {
    console.log("Delete clicked for order:", params.data.order);
    // Add delete logic here, e.g., make an API call or update state to remove the row
  };

  return (
    <div className="section-card df-c" style={{ height: "100vh", width: "100%" }}>
      <div className="title">قائمة طلباتك</div>
      <div style={containerStyle}>
        <div style={gridStyle} className={"ag-theme-quartz-dark"}>
          <AgGridReact
            rowData={rowData}
            localeText={AG_GRID_LOCALE_EG}
            columnDefs={columnDefs}
            enableRtl={true}
            defaultColDef={defaultColDef}
            pagination={true}  // Enable pagination
            paginationPageSize={10}  // Page size
            rowHeight={50}
            paginationPageSizeSelector={[10, 20, 50, 100]}
          />
        </div>
      </div>
    </div>
  );
}

export default OrderListTable;
