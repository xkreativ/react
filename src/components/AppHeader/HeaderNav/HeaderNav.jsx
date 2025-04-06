import React from 'react';
import styles from './HeaderNav.module.css';
import { HeaderNavItem } from '../HeaderNavItem/HeaderNavItem';
import {
	BurgerIcon,
	ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const items = [
	{
		icon: BurgerIcon,
		name: 'Конструктор',
		active: true,
	},
	{
		icon: ListIcon,
		name: 'Лента заказов',
		active: false,
	},
];

export const HeaderNav = () => (
	<nav className={styles.nav}>
		{items.map((item, index) => (
			<HeaderNavItem
				key={index}
				icon={item.icon}
				name={item.name}
				active={item.active}
			/>
		))}
	</nav>
);
