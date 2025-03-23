import styles from './IngredientsList.module.css';

import clsx from 'clsx';

import { translateIngredientTypes } from '@utils/translateIngredientTypes';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientsPropTypes } from '@utils/proptypes';

export const IngredientsList = ({ ingredients, onIngredientClick }) => {
	return (
		<section className={clsx(styles.wrapper, styles['custom-scroll'], 'mt-10')}>
			{Object.entries(ingredients).map(([type, items]) => (
				<div key={type} id={'ingredient-section-type-' + type}>
					<p className='text text_type_main-medium'>
						{translateIngredientTypes(type)}
					</p>
					<ul className={clsx(styles.list, 'pt-6 pr-2 pb-10 pl-4')}>
						{items.map((item) => (
							<li
								className={styles['list-item']}
								key={item._id}
								onClick={() => onIngredientClick(item)}>
								<img className='pl-4 pr-4' src={item.image} alt={item.name} />
								<p
									className={clsx(
										styles.price,
										'text text_type_digits-default'
									)}>
									{item.price} <CurrencyIcon type='primary' />
								</p>
								<p
									className={clsx(
										styles.text,
										'text text_type_main-default mt-2'
									)}>
									{item.name}
								</p>
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
};

IngredientsList.propTypes = {
	ingredients: ingredientsPropTypes,
};
