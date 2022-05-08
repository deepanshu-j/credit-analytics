import React from 'react';
import './Transaction.css';
import { BsPlus } from 'react-icons/bs';
import { HiMinusSm } from 'react-icons/hi';

function TransactionRow({ isPositive, paidTo, amount }) {
	return (
		<div className="transaction__row">
			<div className="transaction__row__left">
				{isPositive ? (
					<BsPlus className="increment_icon" style={{ color: '#002D62' }} />
				) : (
					<HiMinusSm className="increment_icon" style={{ color: '#58111A' }} />
				)}
				<div>
					Transfer {isPositive ? 'From' : 'To'}
					<span className="paidto"> {paidTo}</span>
				</div>
			</div>

			<div>
				<span className="amount">${amount} </span>
			</div>
		</div>
	);
}

export default TransactionRow;
