import styles from './OrderDetails.module.css';
import clsx from 'clsx';
import doneImage from '../../../images/done.png';
import PropTypes from 'prop-types';

const OrderDetails = ({ number }) => {
	return (
		<div className={clsx(styles['order-details'], 'pb-30')}>
			<div
				className={clsx(styles['order-number'], 'text text_type_digits-large')}>
				{number}
			</div>
			<div
				className={clsx(
					styles['order-description'],
					'text text_type_main-medium mt-8'
				)}>
				идентификатор заказа
			</div>
			<img className='mt-15' src={doneImage} alt='success' />
			<div className='text text_type_main-default mt-15'>
				Ваш заказ начали готовить
			</div>
			<div className='text text_type_main-default mt-2 text_color_inactive'>
				Дождитесь готовности на орбитальной станции
			</div>
		</div>
	);
};

OrderDetails.propTypes = {
	number: PropTypes.string.isRequired,
};

export default OrderDetails;
