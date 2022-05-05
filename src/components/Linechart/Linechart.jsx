import React, { useState, useEffect } from 'react';
import './Linechart.css';
import { Line } from 'react-chartjs-2';

const newData = {
	day: {
		labels: [
			'day 1',
			'day 2',
			'day 3',
			'day 4',
			'day 5',
			'day 6',
			'day 7',
			'day 8',
			'day 9',
			'day 10',
			'day 11',
			'day 12',
			'day 13',
			'day 14',
			'day 15',
			'day 16',
			'day 17',
			'day 18',
			'day 19',
			'day 20',
			'day 21',
			'day 22',
			'day 23',
			'day 24',
			'day 25',
			'day 26',
			'day 27',
			'day 28'
		],
		datasets: [
			{
				label: 'Salary',
				data: [
					5,
					5,
					10,
					9,
					20,
					30,
					35,
					31,
					12,
					17,
					23,
					2,
					4,
					8,
					5,
					5,
					6,
					5,
					6,
					5,
					18,
					22,
					12,
					17,
					23,
					2,
					4,
					8
				],
				fill: true,
				// backgroundColor: gradient,
				// borderColor: 'rgba(255, 159, 64, 1)',//orange gradient
				borderColor: 'rgba(54, 162, 235, 1)', // blue gradient
				// backgroundColor: 'rgba(255, 159, 64, 0.2)',
				tension: 0.3
				// pointRadius: 0
			}
		]
	},
	month: {
		labels: [ 'JAN', 'FEB', 'MAR', 'APR' ],
		datasets: [
			{
				label: 'Salary',
				data: [ 5, 60, 30, 40 ],
				fill: true,
				// backgroundColor: gradient,
				// borderColor: 'rgba(255, 159, 64, 1)',//orange gradient
				borderColor: 'rgba(54, 162, 235, 1)', // blue gradient
				// backgroundColor: 'rgba(255, 159, 64, 0.2)',
				tension: 0.3
				// pointRadius: 0
			}
		]
	},
	week: {
		labels: [ 'week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7' ],
		datasets: [
			{
				label: 'Salary',
				data: [ 5, 15, 30, 60, 50, 70, 80 ],
				fill: true,
				// backgroundColor: gradient,
				// borderColor: 'rgba(255, 159, 64, 1)', //orange gradient
				borderColor: 'rgba(54, 162, 235, 1)', // blue gradient
				// backgroundColor: 'rgba(255, 159, 64, 0.2)',
				tension: 0.5
				// pointRadius: 0
			}
		]
	}
};

function Linechart({ timescale, directData }) {
	// var ctx = document.getElementById('canvas').getContext('2d');

	// var gradient = ctx.createLinearGradient(0, 0, 0, 400);
	// gradient.addColorStop(0, 'rgba(54, 162, 235, 1)');
	// gradient.addColorStop(1, '#FFFFFF');

	// const [ chartData, setChartData ] = useState(newData[timescale]);

	// useEffect(
	// 	() => {
	// 		var ctx = document.getElementById('canvas').getContext('2d');

	// 		var gradient = ctx.createLinearGradient(0, 0, 0, 400);
	// 		gradient.addColorStop(0, 'rgba(54, 162, 235, 1)');
	// 		gradient.addColorStop(1, '#FFFFFF');
	// 		console.log(timescale);
	// 		// newData[timescale].datasets[0]['backgroundColor'] = gradient;
	// 		// console.log(newData[timescale])
	// 		// setChartData(newData[timescale]);
	// 	},
	// 	[ timescale ]
	// );
	return (
		<div className="chart__wraper" style={{ backgroundColor: '#18264d' }}>
			<Line
				id="canvas"
				// data={chartData}
				data={directData}
				// width={300}
				// height={100}
				options={{
					maintainAspectRatio: false,
					responsive: true
					// legend: {
					//     display: false
					//   }
					// scales:{
					//     yAxes:[{ticks:{
					//         beginAtZero:true
					//     }}]
					// }
				}}
			/>
		</div>
	);
}

export default Linechart;
