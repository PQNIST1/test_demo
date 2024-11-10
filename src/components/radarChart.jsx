// RadarChart.js
import { useEffect, useRef } from 'react';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ dataValues }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Nếu đã có chart trước đó thì hủy chart để tránh lỗi
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Khởi tạo biểu đồ mới với dữ liệu mới
    chartInstance.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Ance', 'Actinic Keratosis', 'Basal Cell Carcinoma', 'Eczema', 'Rosacea'],
        datasets: [{
          label: 'Skin Predict',
          data: dataValues,
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });
  }, [dataValues]); // Cập nhật lại biểu đồ khi dataValues thay đổi

  return <canvas ref={chartRef} className='h-[500px] w-[500px]'></canvas>;
};

export default RadarChart;
