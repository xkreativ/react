import styles from './TabList.module.css';
import PropTypes from 'prop-types';

import React from 'react';
import clsx from 'clsx';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export const TabList = ({ tabs }) => {
	return (
		<div className={clsx(styles['tab-list'], 'mt-5')}>
			{tabs.map((item, index) => {
				return (
					<Tab
						key={index}
						value={item.value}
						active={item.isActive}
						onClick={item.onClick}>
						{item.text}
					</Tab>
				);
			})}
		</div>
	);
};

TabList.propTypes = {
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			isActive: PropTypes.bool.isRequired,
			onClick: PropTypes.func.isRequired,
		})
	).isRequired,
};
