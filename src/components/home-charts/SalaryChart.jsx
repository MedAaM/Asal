import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "../../pages/mondoub pages/home-page/components/transaction-contributions/contribution.css";
import { BiDollar } from 'react-icons/bi';
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';
import { GoGift } from 'react-icons/go';

function SalaryChart() {
  const [state] = useState({
    series: [
      {
        type: 'column',
        name: 'المكافأة', // "Bonus" in Arabic
        data: [20, 30, 25, 10, 0, 30, 12]
      },
      {
        type: 'column',
        name: 'الراتب', // "Salary" in Arabic
        data: [-53, -29, -67, -84, -60, -40, -77]
      },
      {
        type: 'line',
        name: 'الدخل', // "Income" in Arabic
        data: [10, 0, 10, -20, 0, -15, 10]
      }
    ],
    options: {
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
        colors: 'white',
        strokeColors: 'var(--primary)'
      },
      stroke: {
        curve: 'smooth',
        width: [0, 0, 3],
        colors: ['var(--primary)']
      },
      colors: ['var(--cyan)', 'var(--cyan-light)'],
      dataLabels: { enabled: false },
      states: {
        hover: {
          filter: { type: 'none' }
        },
        active: {
          filter: { type: 'none' }
        }
      },
      legend: { show: false },
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
        categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو'], // Months in Arabic
        labels: {
          style: { colors: 'var(--text)', fontSize: '13px' }
        }
      },
      yaxis: {
        max: 100,
        min: -100,
        show: false
      }
    },
  });

  return (
    <div className='section-card' style={{ width: "55vh", borderRadius: "1rem", boxShadow: "none" }} dir='rtl'>
      <div id='chart' className='w-full df-c'>
        <div dir='rtl' className='df-c'>
            <div className="title">salary</div>
            <div className="df jc-sb">

            <div className="df !gap-2">
                <div className="rounded-icon !w-7 !h-7 !rounded-md">
                    <BiDollar />
                </div>
                <div className="df-c g0 text-xs">
                <div className='text-black font-bold'>1250$</div>
                <div className='text'>total salary</div>
                </div>
                <div className="graphup df !gap-1">10% <BsGraphUpArrow /></div>

            </div>
            <div className="df">
            <div className="rounded-icon purpled !w-7 !h-7 !rounded-md">
                    <GoGift />
                </div>
                <div className="df-c g0 text-xs">
                <div className='text-black font-bold'>250$</div>
                <div className='text'>total bonus</div>
                </div>
                <div className="graphdown df !gap-1">10% <BsGraphDownArrow /></div> 

            </div>
            </div>
        </div>
        <ReactApexChart type='bar' height={200} style={{ width: "50vh" }} series={state.series} options={state.options} />
      </div>
    </div>
  );
}

export default SalaryChart;
