import React, { useState } from 'react'; 
import ReactApexChart from 'react-apexcharts';
import "../../../../mondoub pages/home-page/components/transaction-contributions/contribution.css";
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';
import { GoGift } from 'react-icons/go';
import { BiDollar } from 'react-icons/bi';
import { FaWeight } from 'react-icons/fa';

const series = [
  {
    name: 'العسل المباع (كجم)',  // Column chart for honey sold
    type: 'column',
    data: [25, 42, 31, 50, 28, 35, 40]  // Honey sold in kg
  },
  {
    type: 'line',
    name: 'الدخل ($)',  // Line chart for income
    data: [25 * 2, 42 * 2, 31 * 2, 50 * 2, 28 * 2, 35 * 2, 40 * 2]  // Income calculated as kg_sold * 5
  }
];

function TransactionContributions() {

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        columnWidth: '35%',
        colors: {
          ranges: [
            {
              to: 50,
              from: 40,
              color: 'var(--purple)'
            }
          ]
        }
      }
    },
    tools: {
      download: true  // Disabling export/download option
    },
    markers: {
      size: 3.5,
      strokeWidth: 2,
      fillOpacity: 1,
      strokeOpacity: 1,
      colors: 'white',
      strokeColors: 'var(--purple)'
    },
    stroke: {
      width: [0, 2],
      colors: ['var(--purple-light)', 'var(--purple)']
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: ['var(--purple-light)'],
    grid: {
      strokeDashArray: 7,
      borderColor: '#a8aab4',
      padding: {
        left: -2,
        right: 8
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],  // Days in Arabic
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      min: 0,
      max: 200,
      show: true,
      tickAmount: 3,
      labels: {
        formatter: value => `${value.toFixed(1)} كجم`,
        offsetX: -10,
        style: {
          fontSize: '0.8125rem',
          colors: 'var(--text)'
        }
      }
    }
  }

  return (
    <div className='section-card' style={{width: "55vh", borderRadius:"1rem", boxShadow: "none"}} dir='rtl'>
      <div dir='rtl' className='df-c'>
            <div className="title">transactions</div>
            <div className="df jc-sb">

            <div className="df !gap-2">
                <div className="rounded-icon !w-7 !h-7 !rounded-md">
                    <FaWeight />
                </div>
                <div className="df-c g0 text-xs">
                <div className='text-black font-bold'>180kg</div>
                <div className='text'>total weights</div>
                </div>
                <div className="graphup df !gap-1">10% <BsGraphUpArrow /></div>

            </div>
            <div className="df">
            <div className="rounded-icon pinked !w-7 !h-7 !rounded-md">
                    <BiDollar />
                </div>
                <div className="df-c g0 text-xs">
                <div className='text-black font-bold'>250$</div>
                <div className='text'>total income</div>
                </div>
                <div className="graphup df !gap-1">10% <BsGraphUpArrow /></div> 

            </div>
            </div>
        </div>
      <div id='chart' className='w-full df-c'>

        <ReactApexChart type='line' height={200} style={{width: "50vh"}} series={series} options={options} />     
      </div>
    </div>
  );
}

export default TransactionContributions;
