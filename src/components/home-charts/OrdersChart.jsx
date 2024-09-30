import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "../../pages/mondoub pages/home-page/components/transaction-contributions/contribution.css";
import { BsClock, BsTruck } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import { BiError } from 'react-icons/bi';

const state = {
    series: [{
      name: 'تم التوصيل',  // Delivered in Arabic
      data: [34, 55, 41, 50, 22]
    }, {
      name: 'تم الشحن',  // Shipped in Arabic
      data: [10, 23, 20, 20, 13]
    },{
        name: 'معلق',  // Pending in Arabic
        data: [40, 23, 20, 20, 13]
      },
      {
        name: 'فشل',  // Failed in Arabic
        data: [50, 23, 20, 20, 13]
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          tools: {
            download: false  // Disabling export/download option
          }
        },
        zoom: {
          enabled: false  // Zoom disabled
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: 'around',
          borderRadiusWhenStacked: 'last end',
        },
      },
      xaxis: {
        categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو'],
        labels: {
          style: {
            fontSize: '12px',
            colors: ['#000'],  // Arabic font color
          }
        }
      },
      fill: {
        opacity: 1
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['#ffffff']  // Gap between the stacks
      },
      dataLabels: {
        enabled: false,  // Disable labels on the bars
        total: {
          enabled: false  // Disable the total value on top
        }
      },
      legend: {
        show: false  // Hiding the legend at the bottom
      },
      colors: ['var(--shipped-light)', 'var(--pink-light)', 'var(--pending-light)', 'var(--error-light)']
    },
  };

function OrdersChart() {
  return (
    <div className='section-card flex1' style={{ width: "-webkit-fill-available !important", borderRadius: "1rem" }} dir='rtl'>
      <div dir='rtl' className='df-c'>
        <div className="title">الطلبات</div>
        <div className="df-c !g2">
          <div className="df w-full">
            <div className="df !gap-2 w-1/2">
              <div className="rounded-icon !w-10 !h-10 !rounded-md">
                <BsTruck />
              </div>
              <div className="df-c g0 ">
                <div className='text-black font-bold'>125</div>
                <div className='text'>إجمالي التوصيل</div>
              </div>
            </div>
            <div className="df">
              <div className="rounded-icon yellowed !w-10 !h-10 !rounded-md">
                <BsClock />
              </div>
              <div className="df-c g0 ">
                <div className='text-black font-bold'>250</div>
                <div className='text'>إجمالي معلق</div>
              </div>
            </div>
          </div>
          <div className="df w-full">
            <div className="df !gap-2 w-1/2">
              <div className="rounded-icon pinked !w-10 !h-10 !rounded-md">
                <TiTick />
              </div>
              <div className="df-c g0 ">
                <div className='text-black font-bold'>124</div>
                <div className='text'>إجمالي الشحن</div>
              </div>
            </div>
            <div className="df">
              <div className="rounded-icon errored !w-10 !h-10 !rounded-md">
                <BiError />
              </div>
              <div className="df-c g0 ">
                <div className='text-black font-bold'>50</div>
                <div className='text'>إجمالي الفشل</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='chart2' className='w-full df-c ai-center'>
        <ReactApexChart type='bar' height={200} style={{ width: "50vh" }} series={state.series} options={state.options} />
      </div>
    </div>
  );
}

export default OrdersChart;
