import React from 'react';
import PropTypes from 'prop-types';
import styles from './IngredientDetails.module.css';
import clsx from 'clsx';

const IngredientDetails = ({ ingredient }) => {
	return (
		<div className={clsx(styles['ingredient-details'], 'pb-15')}>
			<img src={ingredient.image_large} alt={ingredient.name} />
			<p className='text text_type_main-medium mt-4'>{ingredient.name}</p>
			<div className={clsx(styles['nutrients'], 'mt-8')}>
				<div className='text text_type_main-default text_color_inactive'>
					Калории,ккал
					<p className='text text_type_digits-default mt-2'>
						{ingredient.calories}
					</p>
				</div>
				<div className='text text_type_main-default text_color_inactive'>
					Белки, г
					<p className='text text_type_digits-default mt-2'>
						{ingredient.proteins}
					</p>
				</div>
				<div className='text text_type_main-default text_color_inactive'>
					Жиры, г
					<p className='text text_type_digits-default mt-2'>{ingredient.fat}</p>
				</div>
				<div className='text text_type_main-default text_color_inactive'>
					Углеводы, г
					<p className='text text_type_digits-default mt-2'>
						{ingredient.carbohydrates}
					</p>
				</div>
			</div>
		</div>
	);
};

IngredientDetails.propTypes = {
	ingredient: PropTypes.shape({
		image_large: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		calories: PropTypes.number.isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
	}).isRequired,
};

export default IngredientDetails;
