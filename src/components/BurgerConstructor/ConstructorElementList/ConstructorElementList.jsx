import styles from './ConstructorElementList.module.css';
import PropTypes from 'prop-types';

import {
	ConstructorElement,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';

export const ConstructorElementList = ({ ingredients }) => {
	return (
		<section className={clsx(styles.list, 'pl-4')}>
			{ingredients.length > 0 ? (
				<>
					{/* Верхний элемент */}
					<div className={clsx(styles['list-item'], 'pr-4')}>
						<ConstructorElement
							type='top'
							isLocked={true}
							text={ingredients[0]?.name + ' (верх)'}
							price={ingredients[0]?.price}
							thumbnail={ingredients[0]?.image}
						/>
					</div>

					{/* Средние элементы */}
					<div className={clsx(styles.middle, styles['custom-scroll'], 'pr-2')}>
						{ingredients.slice(1, -1).map((ingredient) => {
							return (
								<div className={styles['list-item']} key={ingredient._id}>
									<span className={styles.dragger}>
										<DragIcon type='primary' />
									</span>
									<ConstructorElement
										type=''
										isLocked={false}
										text={ingredient.name}
										price={ingredient.price}
										thumbnail={ingredient.image}
									/>
								</div>
							);
						})}
					</div>

					{/* Нижний элемент */}
					<div className={clsx(styles['list-item'], 'pr-4')}>
						<ConstructorElement
							type='bottom'
							isLocked={true}
							text={ingredients[0]?.name + ' (низ)'}
							price={ingredients[0]?.price}
							thumbnail={ingredients[0]?.image}
						/>
					</div>
				</>
			) : (
				<p className={styles.empty}>Список ингредиентов пуст</p>
			)}
		</section>
	);
};

ConstructorElementList.propTypes = {
	ingredients: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
		})
	).isRequired,
};
