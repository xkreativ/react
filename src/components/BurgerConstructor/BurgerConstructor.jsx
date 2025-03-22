import styles from './BurgerConstructor.module.css';
import PropTypes from 'prop-types';

import React from 'react';
import { ConstructorElementList } from './ConstructorElementList/ConstructorElementList';

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
			type: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			image_large: PropTypes.string.isRequired,
			calories: PropTypes.number.isRequired,
			proteins: PropTypes.number.isRequired,
			fat: PropTypes.number.isRequired,
			carbohydrates: PropTypes.number.isRequired,
		})
	).isRequired,
};
