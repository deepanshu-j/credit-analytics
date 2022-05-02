import React from 'react';
import './Creditcard.css';

function Creditcard() {
	return (
		<div className="creditcard__body">
			<div className="creditcard__top">
				<div>Payment Details</div>

				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
					className="visa__img"
				/>
			</div>
			<div className="creditcard__number__text">Card Number</div>
			<div className="creditcard__number"> 4000 1234 5678 9010 </div>

			<div className="creditcard__bottom">
				<div>Expiration</div>
				<div>CVV</div>
			</div>
			<div className="creditcard__bottom text_white">
				<div>December 2023</div>
				<div>786</div>
			</div>
		</div>
	);
}

export default Creditcard;
