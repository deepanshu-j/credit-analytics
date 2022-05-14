import React from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { AiOutlineBell, AiOutlineMessage, AiOutlineCalendar, AiOutlineCaretDown } from 'react-icons/ai';
import Creditcard from '../Creditcard/Creditcard';
import WalletSummary from '../WalletSummary/WalletSummary';
import ChartCard from '../ChartCard/ChartCard';
import { Line } from 'react-chartjs-2';
import Transaction from '../Transaction/Transaction';

export const Dashboard = (props) => {
	const current = new Date();
	const date = `${current.getDate()} / ${current.getMonth() + 1} / ${current.getFullYear()}`;

	return (
		<div className="dashboard__body">
			<div className="dashboard__header">
				<AiOutlineCaretDown className="dashboard__header__item" />
				<AiOutlineBell className="dashboard__header__item" />

				<AiOutlineMessage className="dashboard__header__item" />

				<div className="dashboard__header__date">
					<AiOutlineCalendar /> {date}
				</div>
			</div>
			<div className="dashboard__core">
				<Creditcard />
				<WalletSummary />
			</div>
			<div className="dashboard__ground">
				<div className="ground__left">
					<ChartCard />
				</div>
				<div className="ground__right">
					{/* <img
						alt="Logo"
						src="https://cdn-icons-png.flaticon.com/512/3004/3004584.png"
						className="firework__img"
					/> */}
				</div>
			</div>

			<div className="dashboard__nucleus">
				<div className="nucleus__left">
					<Transaction />
				</div>
				<div className="nucleus__right" />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Dashboard;
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
