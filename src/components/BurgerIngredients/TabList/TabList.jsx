import styles from './TabList.module.css';

import React from 'react';
// eslint-disable-next-line import/no-named-as-default
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
