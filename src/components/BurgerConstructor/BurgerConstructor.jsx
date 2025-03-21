import styles from './BurgerConstructor.module.css';
import PropTypes from 'prop-types';

import React from 'react';
import { ConstructorElementList } from './ConstructorElementList/ConstructorElementList';
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';
import OrderSummary from './OrderSummary/OrderSummary';

export const BurgerConstructor = ({ ingredients }) => {
	const total = ingredients.reduce((acc, ingredient) => {
		return acc + ingredient.price;
	}, 0);

	return (
		<div className={clsx(styles.wrapper, 'mt-25')}>
			<ConstructorElementList ingredients={ingredients} />
			<OrderSummary total={total} />
		</div>
	);
};

BurgerConstructor.propTypes = {
	ingredients: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
		})
	).isRequired,
};
