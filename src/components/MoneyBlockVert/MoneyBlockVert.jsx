import React from 'react';
import './MoneyBlockVert.css';

function MoneyBlockVert({ icon, text, value }) {
	return (
		<div className="moneyblockvert__body">
			{icon}

			<div className="moneyblockvert__header">{text}</div>
			<div className="moneyblockvert__footer">{value}</div>
		</div>
	);
}

export default MoneyBlockVert;
