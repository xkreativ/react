import styles from './app.module.scss';

// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';
import React from 'react';

import { AppHeader } from '../components/AppHeader/AppHeader';
import { BurgerIngredients } from '../components/BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from '../components/BurgerConstructor/BurgerConstructor';
import { ingredients as initialIngredients } from '../utils/data';

export const App = () => {
	const [ingredients, setIngredients] = React.useState(initialIngredients);

	return (
		<>
			<AppHeader />
			<main className={clsx(styles.constructor, 'container')}>
				<BurgerIngredients ingredients={ingredients} />
				<BurgerConstructor ingredients={ingredients} />
			</main>
		</>
	);
};
