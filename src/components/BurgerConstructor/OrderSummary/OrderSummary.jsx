import React from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import styles from './OrderSummary.module.css';
import Modal from '../../Modal/Modal';
import useDisclosure from '../../../hooks/useDisclosure';
import OrderDetails from '../../Modal/OrderDetails/OrderDetails';

const OrderSummary = ({ total }) => {
	const { isOpen, open, close } = useDisclosure();

	const modal = (
		<Modal isOpen={isOpen} onClose={close}>
			<OrderDetails number={'034536'} />
		</Modal>
	);

	return (
		<>
			<div className={clsx(styles['order-summary'], 'mt-10')}>
				{total && (
					<p className={clsx(styles.price, 'text text_type_digits-medium')}>
						{total}
						<span>
							<CurrencyIcon type={'primary'} />
						</span>
					</p>
				)}
				<Button onClick={open} htmlType='button' type='primary' size='medium'>
					Оформить заказ
				</Button>
			</div>
			{isOpen && modal}
		</>
	);
};

OrderSummary.propTypes = {
	total: PropTypes.number.isRequired,
};

export default OrderSummary;
