import styles from './HeaderNavItem.module.css';
import PropTypes from 'prop-types';
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

HeaderNavItem.propTypes = {
	icon: PropTypes.elementType.isRequired,
	name: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
};
