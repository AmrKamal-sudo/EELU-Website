import React, { useState, useEffect } from 'react'
import { ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from 'chart.js/auto';

import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);



const PieChart = ({chartData}) => {
 
  const data = chartData;

  var options = {
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
      <Pie
        data={data}
        height={300}
        options={options}

      />
    </div>
  )
}

export default PieChart
