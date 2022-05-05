import React, { useState, useEffect } from 'react';
import Linechart from '../Linechart/Linechart';
import './ChartCard.css';
import { Line } from 'react-chartjs-2';

var gradient;

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
				backgroundColor: gradient,
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
				backgroundColor: gradient,
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
				backgroundColor: gradient,
				// borderColor: 'rgba(255, 159, 64, 1)', //orange gradient
				borderColor: 'rgba(54, 162, 235, 1)', // blue gradient
				// backgroundColor: 'rgba(255, 159, 64, 0.2)',
				tension: 0.5
				// pointRadius: 0
			}
		]
	}
};

function ChartCard() {
	const [ timescale, setTimescale ] = useState('month');

	const handleTimescale = (val) => {
		setTimescale(val);
	};

	useEffect(() => {}, [ gradient ]);

	return (
		<div className="card">
			<div className="card__header">
				<div className="card__left">
					<span className="card__title">Salary Chart</span>
				</div>
				<div className="card__right">
					<button
						className={`${timescale === 'day' ? 'button__wrapper' : 'active'}`}
						onClick={() => handleTimescale('day')}
					>
						Day
					</button>
					<button
						className={`${timescale === 'week' ? 'button__wrapper' : 'active'}`}
						onClick={() => handleTimescale('week')}
					>
						Week
					</button>
					<button
						className={`${timescale === 'month' ? 'button__wrapper' : 'active'}`}
						onClick={() => handleTimescale('month')}
					>
						Month
					</button>
				</div>
			</div>
			<div className="card__body">
				<Linechart timescale={timescale} directData={newData[timescale]} />
			</div>
		</div>
	);
}

export default ChartCard;
