import { ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

Chart.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({chartData}) => {
 
  const data = chartData;

  const options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Doughnut
        data={data}
        height={400}
        options={options}
      />
    </div>
  )
}

export default DoughnutChart
