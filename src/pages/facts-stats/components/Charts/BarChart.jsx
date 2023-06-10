import {


    BarElement,
    Colors

} from 'chart.js';
import Chart from 'chart.js/auto';

import { Bar } from 'react-chartjs-2';

Chart.register(
    BarElement,
    Colors
);


const BarChart = ({ chartData }) => {

    const getRandomColor = () => {
        const colors = ['#061041', '#00376F', '#006094', '#008AAD', '#00B5B7', '#35DEB8'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // const bgColors = labels.map(item => getRandomColor());
    const data = chartData;

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: true,
            position: 'right'
        },
        colors: {
            forceOverride: true
        },
        title: {
            display: true,
            text: 'احصائيات عدد الطلاب المقيدين بالجامعة حسب السنين',
            fontSize: 30,
        }
    }
    console.log(Chart)
    return (
        <div>
            <Bar
                data={data}
                options={options}
                width={400}
                height={300}
            />
        </div>
    )
}

export default BarChart
