import React from 'react';
import './WalletSummary.css';
import { AiOutlineRight, AiOutlineRise, AiOutlinePound, AiOutlineWallet } from 'react-icons/ai';
import MoneyBlock from '../MoneyBlock/MoneyBlock';
import MoneyBlockVert from '../MoneyBlockVert/MoneyBlockVert';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { RiBankCardLine } from 'react-icons/ri';

function WalletSummary() {
	return (
		<div className="wallet__body">
			<div className="wallet__header">
				<b>Wallet Summary </b>
				<AiOutlineRight />
			</div>
			<div className="wallet__core">
				<MoneyBlock
					icon={<AiOutlineWallet className="moneyblock__icon" />}
					text={'Balance'}
					value={'$5692.58'}
					colorClassName={'pinkkk'}
				/>
				<MoneyBlock
					icon={<AiOutlineRise className="moneyblock__icon" />}
					text={'Income'}
					value={'$20000.00'}
					colorClassName={'lightgreennn'}
				/>
			</div>
			<div className="wallet__bottom">
				<MoneyBlockVert
					icon={<MdOutlineAccountBalanceWallet className="moneyblock__icon" />}
					text={'Crypto'}
					value={'$5692.58'}
				/>
				<MoneyBlockVert icon={<RiBankCardLine className="moneyblock__icon" />} text={'Due'} value={'$632.80'} />
				<MoneyBlockVert
					icon={<AiOutlinePound className="moneyblock__icon" />}
					text={'Stocks'}
					value={'$20092.58'}
				/>
			</div>
		</div>
	);
}

export default WalletSummary;
