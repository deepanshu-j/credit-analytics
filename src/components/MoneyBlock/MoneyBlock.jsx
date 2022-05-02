import React from 'react';
import './MoneyBlock.css';

function MoneyBlock({ icon, text, value, colorClassName }) {
	return (
		<div className={`moneyblock__body ${colorClassName}`}>
			{icon}
			<div className="moneyblock__right">
				<div className="moneyblock__header">{text}</div>
				<div className="moneyblock__footer">{value}</div>
			</div>
		</div>
	);
}

export default MoneyBlock;
