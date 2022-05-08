import React from 'react';
import './Transaction.css';
import TransactionRow from './TransactionRow';
import { AiOutlineCloudDownload } from 'react-icons/ai';

function Transaction() {
	return (
		<div className="transaction__organism">
			<div className="transaction__head">
				<span className="recent__transactions">Recent Transactions</span>
				<div>
					<AiOutlineCloudDownload style={{ minHeight: '20px', minWidth: '20px' }} />
				</div>
			</div>
			<div className="transaction__body">
				<div className="transaction__date__header">Today | 8th May 2022</div>
				<hr className="hr__line__separator" />
				<TransactionRow isPositive={true} paidTo={'Swiggy'} amount={120.0} />
				<TransactionRow isPositive={false} paidTo={'Zomato'} amount={99.99} />
			</div>
			<div className="transaction__body">
				<div className="transaction__date__header">Today | 7th May 2022</div>
				<hr className="hr__line__separator" />
				<TransactionRow isPositive={true} paidTo={'Coinsdesk'} amount={1305.75} />
			</div>
		</div>
	);
}

export default Transaction;
