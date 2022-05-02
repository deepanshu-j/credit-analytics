import React, { useState } from 'react';
import './Sidebar.css';
import { connect } from 'react-redux';
import { RiDashboardLine } from 'react-icons/ri';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineSetting, AiOutlineCreditCard, AiOutlinePayCircle } from 'react-icons/ai';

export const Sidebar = (props) => {
	const [ clickedField, setClickedField ] = useState('Dashboard');
	const onClickHandler = (name) => {
		setClickedField(name);
	};

	return (
		<div className="sidebar__body">
			<div className="sidebar__header">
				<FaMoneyCheckAlt className="sidebar__header__logo" />
				<span className="sidebar__header__text">Credit Analytics</span>
			</div>

			<div className="sidebar__items onn">
				<AiOutlineHome className="item__logo" />

				<span className="item__text">Dashboard</span>
			</div>

			<div className="sidebar__items ">
				<AiOutlineCreditCard className="item__logo" />

				<span className="item__text">Summary</span>
			</div>

			<div className="sidebar__items ">
				<RiDashboardLine className="item__logo" />

				<span className="item__text">Stats</span>
			</div>
			<div className="sidebar__items ">
				<AiOutlinePayCircle className="item__logo" />

				<span className="item__text">Transactions</span>
			</div>
			<div className="sidebar__items ">
				<AiOutlineSetting className="item__logo" />

				<span className="item__text">Settings</span>
			</div>

			<div className="sidebar__footer">
				Upgrade to <b>PRO</b> for more Offers and benefits!!
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Sidebar;

// export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
