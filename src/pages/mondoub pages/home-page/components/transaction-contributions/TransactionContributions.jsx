import React, { useState } from 'react'; 
import ReactApexChart from 'react-apexcharts';
import "./contribution.css";

function generateData(count, range) {
  let data = [];
  for (let i = 0; i < count; i++) {
    const value = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    data.push(value);
  }
  return data;
}

function TransactionContributions() {
  const [series, setSeries] = useState([
    { name: 'يناير', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'فبراير', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'مارس', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'أبريل', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'مايو', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'يونيو', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'يوليو', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'أغسطس', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'سبتمبر', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'أكتوبر', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'نوفمبر', data: generateData(30, { min: 0, max: 100 }) },
    { name: 'ديسمبر', data: generateData(30, { min: 0, max: 100 }) }
  ]);

  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 10,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            { from: 0, to: 25, name: 'منخفض', color: '#fbe9e2' },
            { from: 26, to: 50, name: 'متوسط', color: '#f3b493' },
            { from: 51, to: 75, name: 'مرتفع', color: '#f29e78' },
            { from: 76, to: 100, name: 'شديد', color: '#e95c13' },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'المساهمات في المعاملات خلال 30 يومًا',
    },
    xaxis: {
      categories: Array.from({ length: 30 }, (_, i) => i + 1),
    },
    tooltip: {
      y: {
        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
          const month = w.globals.seriesNames[seriesIndex];  // Get the month name
          const day = w.globals.labels[dataPointIndex];  // Get the day (from 1 to 30)
          return `لقد بعت ${value} كجم في يوم ${day} ${month}`;  // Custom tooltip text
        }
      },}
  };

  return (
    <div className='section-card' dir='rtl'>
      <div id='chart' className='w-full'>
        <ReactApexChart options={options} series={series} className="w-full" type='heatmap' height={400} />
      </div>
    </div>
  );
}

export default TransactionContributions;
