import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import clsx from 'clsx';
import { AppHeader } from '../AppHeader/AppHeader';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const App = () => {
	const [ingredients, setIngredients] = useState([]);

	useEffect(() => {
		fetch(API_URL)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setIngredients(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
