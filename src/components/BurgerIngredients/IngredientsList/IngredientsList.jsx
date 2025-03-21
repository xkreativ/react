import PropTypes from 'prop-types';
import styles from './IngredientsList.module.css';

import clsx from 'clsx';

import { translateIngredientTypes } from '@utils/translateIngredientTypes';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const IngredientsList = ({ ingredients }) => {
	return (
		<section className={clsx(styles.wrapper, styles['custom-scroll'], 'mt-10')}>
			{Object.entries(ingredients).map(([type, items]) => (
				<div key={type}>
					<p className='text text_type_main-medium'>
						{translateIngredientTypes(type)}
					</p>
					<ul className={clsx(styles.list, 'pt-6 pr-2 pb-10 pl-4')}>
						{items.map((item) => (
							<li className={styles['list-item']} key={item._id}>
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
	ingredients: PropTypes.objectOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
			})
		)
	).isRequired,
};
