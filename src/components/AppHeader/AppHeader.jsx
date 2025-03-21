import styles from './AppHeader.module.css';
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';

import {
	Logo,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { HeaderNavItem } from './HeaderNavItem/HeaderNavItem';

export const AppHeader = () => (
	<header className={clsx(styles.header, 'p-4')}>
		<HeaderNav />
		<div className={styles.logo}>
			<Logo />
		</div>
		<div className={styles.profile}>
			<HeaderNavItem
				icon={ProfileIcon}
				name={'Личный кабинет'}
				active></HeaderNavItem>
		</div>
	</header>
);
