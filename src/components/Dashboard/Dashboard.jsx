import React from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { AiOutlineBell, AiOutlineMessage, AiOutlineCalendar, AiOutlineCaretDown } from 'react-icons/ai';
import Creditcard from '../Creditcard/Creditcard';
import WalletSummary from '../WalletSummary/WalletSummary';

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
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Dashboard;
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
