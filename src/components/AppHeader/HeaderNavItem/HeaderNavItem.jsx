import styles from './HeaderNavItem.module.css';
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';

export const HeaderNavItem = (props) => {
	const { icon: IconComponent, name, active: isActive } = props;

	return (
		<li
			className={clsx(
				styles.item,
				{ [styles.active]: isActive },
				'pt-4 pb-4 pl-5 pr-5'
			)}>
			<IconComponent className={styles.icon} />
			<span className={clsx(styles.text, 'text text_type_main-default ml-2')}>
				{name}
			</span>
		</li>
	);
};
