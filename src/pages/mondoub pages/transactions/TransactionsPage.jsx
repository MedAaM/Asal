import React, { Suspense, useState } from 'react';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DataGrid } from '@mui/x-data-grid';
import { CgDollar } from 'react-icons/cg';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';

// Lazy load the chart component
const AppReactApexCharts = React.lazy(() => import('react-apexcharts'));

// Dummy series data
const series = [
  {
    type: 'column',
    name: 'Income',
    data: [120, 90, 70, 100, 80, 85, 95]
  },
  {
    type: 'column',
    name: 'Expenses',
    data: [-40, -60, -30, -70, -50, -65, -60]
  },
  {
    type: 'line',
    name: 'Net',
    data: [80, 30, 40, 30, 30, 20, 35]
  }
];

// Chart options without external variables or themes
const options = {
  chart: {
    stacked: true,
    parentHeightOffset: 0,
    toolbar: { show: false }
  },
  markers: {
    size: 4,
    strokeWidth: 3,
    fillOpacity: 1,
    strokeOpacity: 1,
    colors: '#fff',
    strokeColors: '#ffcc00'
  },
  stroke: {
    curve: 'smooth',
    width: [0, 0, 3],
    colors: ['#ffcc00']
  },
  colors: ['#007bff', '#99dfff'],
  dataLabels: { enabled: false },
  grid: {
    yaxis: {
      lines: { show: false }
    },
    padding: {
      top: -26,
      left: -14,
      right: -16,
      bottom: -8
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: '50%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    }
  },
  xaxis: {
    axisTicks: { show: false },
    axisBorder: { show: false },
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: {
      style: { colors: '#aaa', fontSize: '13px' }
    }
  },
  yaxis: {
    max: 150,
    min: -100,
    show: false
  }
};

function TransactionsPage() {
  // Option menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو'];

  // Data for the DataGrid
  const rows = months.map((month, index) => ({
    id: index,
    month,
    income: series[0].data[index],
    expenses: series[1].data[index],
    net: series[2].data[index]
  }));

  // Columns for the DataGrid
  const columns = [
    { field: 'month', headerName: 'الشهر', flex: 1, resizable: false },
    { field: 'income', headerName: 'الدخل', flex: 1, resizable: false },
    { field: 'expenses', headerName: 'المصروفات', flex: 1, resizable: false, type: 'number' },
    { field: 'net', headerName: 'الصافي', flex: 1, resizable: false, type: 'number' }
  ];

  return (
    <div className="df-c">
      <div className='section-card'>
        <CardHeader
          title="المعاملات الشهرية"
          subheader="إجمالي 120 ألف معاملة"
          action={
            <>
              <Typography aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="cursor-pointer">
                <BsThreeDots />
              </Typography>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>تحديث</MenuItem>
                <MenuItem onClick={handleClose}>تحديث</MenuItem>
                <MenuItem onClick={handleClose}>مشاركة</MenuItem>
              </Menu>
            </>
          }
        />
        <CardContent className="flex flex-col space-y-4">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-4">
              <Avatar className="bg-blue-600">
                <CgDollar className="text-white" />
              </Avatar>
              <div className="flex flex-col">
                <Typography>صافي الدخل</Typography>
                <Typography className="font-medium text-black">$500k</Typography>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar className="bg-yellow-500">
                <BiMoneyWithdraw className="text-white" />
              </Avatar>
              <div className="flex flex-col">
                <Typography>المصروفات</Typography>
                <Typography className="font-medium text-black">$60k</Typography>
              </div>
            </div>
          </div>
          <Suspense fallback={<div>جارٍ تحميل الرسم البياني...</div>}>
            <AppReactApexCharts type="line" height={263} width="100%" series={series} options={options} />
          </Suspense>
        </CardContent>
      </div>

      <div className="section-card" style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    </div>
  );
}

export default TransactionsPage;
