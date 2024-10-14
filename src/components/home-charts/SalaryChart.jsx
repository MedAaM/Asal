import { useState } from 'react';
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
        data: [20, 30, 25, 10, 0]
      },
      {
        type: 'column',
        name: 'الراتب', // "Salary" in Arabic
        data: [-53, -29, -67, -84, -60]
      },
      {
        type: 'line',
        name: 'الدخل', // "Income" in Arabic
        data: [10, 0, 10, -20, 0]
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
        categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو'], // Months in Arabic
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
    <div className='section-card flex1' style={{ width: "-webkit-fill-available !important", borderRadius: "1rem"}} dir='rtl'>
      <div id='chart' className='w-full df-c g0'>
        <div dir='rtl' className='df-c'>
            <div className="title">الراتب</div> {/* "salary" in Arabic */}
            <div className="df-c">

            <div className="df !gap-2">
                <div className="rounded-icon !w-10 !h-10 !rounded-md">
                    <BiDollar />
                </div>
                <div className="df-c g0">
                <div className='text-black font-bold'>1250 ﷼</div>
                <div className='text'>إجمالي الراتب</div> {/* "total salary" in Arabic */}
                </div>
                <div className="graphup df !gap-1">10% <BsGraphUpArrow /></div>

            </div>
            <div className="df">
            <div className="rounded-icon purpled !w-10 !h-10 !rounded-md">
                    <GoGift />
                </div>
                <div className="df-c g0">
                <div className='text-black font-bold'>250 ﷼</div>
                <div className='text'>إجمالي المكافأة</div> {/* "total bonus" in Arabic */}
                </div>
                <div className="graphdown df !gap-1">10% <BsGraphDownArrow /></div> 

            </div>
            </div>
        </div>
        <ReactApexChart className="m-auto" type='bar' height={200} style={{ width: "100%" }} series={state.series} options={state.options} />
      </div>
    </div>
  );
}

export default SalaryChart;
