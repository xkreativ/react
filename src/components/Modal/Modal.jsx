import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as ReactDom from 'react-dom';
import styles from './Modal.module.css';
import ModalOverlay from './ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';

const Modal = ({ children, isOpen, onClose, title = null }) => {
	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};
		document.addEventListener('keydown', handleEsc);
		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, [onClose]);

	if (!isOpen) return null;

	return ReactDom.createPortal(
		<ModalOverlay onClick={onClose}>
			<div className={styles['modal-wrapper']}>
				<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
					<div className={clsx(styles['modal-header'], 'mt-10')}>
						<h2 className={clsx(styles.title, 'text text_type_main-large')}>
							{title}
						</h2>
						<CloseIcon
							className={styles.close}
							type='primary'
							onClick={onClose}
						/>
					</div>
					<div className={styles['modal-content']}>{children}</div>
				</div>
			</div>
		</ModalOverlay>,
		document.getElementById('modal-root')
	);
};

Modal.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default Modal;
