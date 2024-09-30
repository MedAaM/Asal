import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./transaction.css";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { arabicLocaleText } from '../../../utils/arabic-settings';
import ModalContainer from '../../../components/Modal/ModalContainer';
import WithDrawModal from '../../../components/Modal/WithDrawModal';
import useModal from '../../../hooks/useModal';
import AddPayment from './AddPayment';

function TransactionsPage() {
  const [chartOptions] = useState({
    series: [{
      name: 'الراتب',
      data: [1000, 1200, 2300, 3000, 4000, 1000, 0, 0, 1500, 2000, 3000, 6200]
    }, {
      name: 'المكافأة',
      data: [500, 400, 300, 450, 600, 700, 800, 600, 500, 400, 300, 550]
    }],
    chart: {
      height: 350,
      type: 'area',
      zoom: {
        enabled: false // تعطيل التكبير
      }
    },
    colors: ['#000000', '#FF6347'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2023-01-01T00:00:00.000Z", 
        "2023-02-01T00:00:00.000Z", 
        "2023-03-01T00:00:00.000Z", 
        "2023-04-01T00:00:00.000Z", 
        "2023-05-01T00:00:00.000Z", 
        "2023-06-01T00:00:00.000Z", 
        "2023-07-01T00:00:00.000Z", 
        "2023-08-01T00:00:00.000Z", 
        "2023-09-01T00:00:00.000Z", 
        "2023-10-01T00:00:00.000Z", 
        "2023-11-01T00:00:00.000Z", 
        "2023-12-01T00:00:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: 'MMM yyyy'
      }
    }
  });

  const rows = [
    { 
      id: 1, 
      salary: 3200, 
      bonus: 200, 
      transactiondate: "2023-01-15", 
      method: {
        cardname: "ماستركارد",
        imageUrl: '/img/mastercard.png'
      },
      total: 3400,
    },
    { 
      id: 2, 
      salary: 4500, 
      bonus: 500, 
      transactiondate: "2023-02-10", 
      method: {
        cardname: "فيزا",
        imageUrl: '/img/visa.png'
      },
      total: 5000,
    },
    { 
      id: 3, 
      salary: 3900, 
      bonus: 300, 
      transactiondate: "2023-03-20", 
      method: {
        cardname: "أمريكان إكسبريس",
        imageUrl: 'https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/blue-business-plus.png'
      },
      total: 4200, 
    },
    { 
      id: 4, 
      salary: 3500, 
      bonus: 150, 
      transactiondate: "2023-04-05", 
      method: {
        cardname: "بايبال",
        imageUrl: 'https://th.bing.com/th/id/OIF.By9yTPY4OSL7fjGXPoxXfg?rs=1&pid=ImgDetMain'
      },
      total: 3650, 
    }
  ];

  // Define columns with method column (image + text)
  const columns = [
    { field: 'id', headerName: 'المعرف', width: 70, resizable: false },
    { field: 'salary', headerName: 'الراتب', width: 70, type: 'number', resizable: false },
    { field: 'bonus', headerName: 'المكافأة', width: 70, type: 'number', resizable: false },
    { field: 'total', headerName: 'الإجمالي', width: 70, resizable: false },
    { field: 'transactiondate', headerName: 'تاريخ المعاملة', Width: 200, resizable: false },
    {
      field: 'method',
      headerName: 'طريقة الدفع',
      minWidth: 150,
      flex: 1,
      resizable: false,
      renderCell: (params) => (
        <div className='df text-xs font-bold'>
          <img 
            src={params.value.imageUrl} 
            alt={params.value.cardname} 
            style={{ width: '2rem', height: '1rem', objectFit: 'contain', marginRight: '1rem' }} 
          />
          <div>
            <div>{params.value.cardname}</div>
          </div>
        </div>
      )
    }
  ];
  const { modalOpen, close, open } = useModal();

  return (
    <div className='df-c'>
      <ModalContainer>
        {modalOpen && (
          <WithDrawModal
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </ModalContainer>
      <div className="df ai-stretch">
        <AddPayment />
        <div className='section-card flex1'>
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="area"
            height={350}
          />
        </div>
      </div>
      <div className="df ai-stretch">
        <div className='section-card ' style={{ height: 460, width:"90vh" }}>
          معاملاتك الأخيرة
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{
              Toolbar: GridToolbar,
            }}
            hideFooterPagination={true}
            localeText={arabicLocaleText}
            disableColumnResize={true} 
            
          />
        </div>
        <div className="section-card df-c jc-sb flex-1">
  <h2>أهداف راتبك التالي</h2>
  <div className="actions df-c">
    <div className="df">
      <span>صمرة</span>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `30.23%` }}>
          <div className="progress-label">30.23%</div>
        </div>
      </div>
      <div className="honey-img">
        <img src="https://purepng.com/public/uploads/large/purepng.com-honey-jarbottle-food-glass-object-pot-honey-jar-941524620818s80mx.png" alt="صمرة" />
      </div>
    </div>

    <div className="df">
      <span>سدر</span>
      <div className="progress-container cyan">
        <div className="progress-bar cyan" style={{ width: `58.23%` }}>
          <div className="progress-label">58.23%</div>
        </div>
      </div>
      <div className="honey-img">
        <img src="/img/honey.png" alt="سدر" />
      </div>
    </div>

    <div className="df">
      <span>عسل أبيض</span>
      <div className="progress-container pink">
        <div className="progress-bar pink" style={{ width: `60.73%` }}>
          <div className="progress-label">60.73%</div>
        </div>
      </div>
      <div className="honey-img">
        <img src="https://tryaladdin.com/cdn/shop/articles/rare-black-seed-honey-a-burst-of-natures-potency-585564_1200x800.jpg?v=1715162871" alt="مكافأة" />
      </div>
    </div>

    <div className="df">
      <span>مكافأة</span>
      <div className="progress-container purple">
        <div className="progress-bar purple" style={{ width: `20.23%` }}>
          <div className="progress-label">20.23%</div>
        </div>
      </div>
      <div className="honey-img">
        <img src="https://cdn-icons-png.flaticon.com/512/9908/9908288.png" alt="مكافأة" />
      </div>
      
    </div>
  </div>
  <button onClick={open} className="btn bg-2">سحب</button>
</div>

      </div>
    </div>
  );
}

export default TransactionsPage;
