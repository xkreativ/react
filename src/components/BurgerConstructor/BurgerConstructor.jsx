import styles from './BurgerConstructor.module.css';

import React from 'react';
import { ConstructorElementList } from './ConstructorElementList/ConstructorElementList';

import clsx from 'clsx';
import OrderSummary from './OrderSummary/OrderSummary';
import { ingredientsPropTypes } from '@utils/proptypes';

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
	ingredients: ingredientsPropTypes,
};
