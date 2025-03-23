import styles from './ConstructorElementList.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import { ingredientsPropTypes } from '@utils/proptypes';

export const ConstructorElementList = ({ ingredients }) => {
	return (
		<section className={clsx(styles.list, 'pl-4')}>
			{ingredients.length > 0 ? (
				<>
					{/* Верхняя булка */}
					<div className={clsx(styles['list-item'], 'pr-4')}>
						<ConstructorElement
							type='top'
							isLocked={true}
							text={ingredients[0]?.name + ' (верх)'}
							price={ingredients[0]?.price}
							thumbnail={ingredients[0]?.image}
						/>
					</div>

					{/* Нижняя булка */}
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
	ingredients: ingredientsPropTypes,
};
