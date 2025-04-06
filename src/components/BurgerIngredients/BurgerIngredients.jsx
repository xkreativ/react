import styles from './BurgerIngredients.module.css';

import clsx from 'clsx';
import React from 'react';

import { translateIngredientTypes } from '@utils/translateIngredientTypes';

import { TabList } from './TabList/TabList';
import { IngredientsList } from './IngredientsList/IngredientsList';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { ingredientsPropTypes } from '@utils/proptypes';

export const BurgerIngredients = ({ ingredients }) => {
	const [currentTab, setCurrentTab] = React.useState('bun');
	const [selectedIngredient, setSelectedIngredient] = React.useState(null);
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const handleIngredientClick = (ingredient) => {
		setSelectedIngredient(ingredient);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedIngredient(null);
	};

	const handleTabClick = (type) => {
		setCurrentTab(type);
		document
			.querySelector(`#ingredient-section-type-${type}`)
			?.scrollIntoView();
	};

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
			onClick: () => handleTabClick(type),
		};
	});

	return (
		<section className={clsx(styles.wrapper, 'pt-10')}>
			<p className='text text_type_main-large'>Соберите бургер</p>
			<TabList tabs={tabs} />
			<IngredientsList
				ingredients={mapping}
				onIngredientClick={handleIngredientClick}
			/>
			{isModalOpen && (
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					title='Детали ингредиента'>
					<IngredientDetails ingredient={selectedIngredient} />
				</Modal>
			)}
		</section>
	);
};

BurgerIngredients.propTypes = {
	ingredients: ingredientsPropTypes,
};
