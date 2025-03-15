import styles from './BurgerIngredients.module.css';

// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';
import React from 'react';

import { translateIngredientTypes } from '@utils/translateIngredientTypes';

import { TabList } from './TabList/TabList';
import { IngredientsList } from './IngredientsList/IngredientsList';

export const BurgerIngredients = ({ ingredients }) => {
	// eslint-disable-next-line import/no-named-as-default-member
	const [currentTab, setCurrentTab] = React.useState('bun');

	const mapping = {};
	ingredients.forEach((ingredient) => {
		const type = ingredient['type'];

		if (!mapping[type]) {
			mapping[type] = [];
		}

		mapping[type].push({ ...ingredient });
	});

	const tabs = Object.keys(mapping).map((type) => {
		return {
			value: type,
			text: translateIngredientTypes(type),
			isActive: currentTab === type,
			onClick: () => setCurrentTab(type),
		};
	});

	return (
		<section className={clsx(styles.wrapper, 'pt-10')}>
			<p className='text text_type_main-large'>Соберите бургер</p>
			<TabList tabs={tabs} />
			<IngredientsList ingredients={mapping} />
		</section>
	);
};
