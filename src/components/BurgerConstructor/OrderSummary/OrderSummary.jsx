import styles from './OrderSummary.module.css';
import React from 'react';
import {
	Button,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';

const OrderSummary = ({ total }) => {
	return (
		<div className={clsx(styles['order-summary'], 'mt-10')}>
			{total && (
				<p className={clsx(styles.price, 'text text_type_digits-medium')}>
					{total}
					<span>
						<CurrencyIcon type={'primary'} />
					</span>
				</p>
			)}
			<Button htmlType='button' type='primary' size='medium'>
				Оформить заказ
			</Button>
		</div>
	);
};

export default OrderSummary;
