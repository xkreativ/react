import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

const ModalOverlay = ({ children, onClick }) => {
	return (
		<div className={styles.overlay} onClick={onClick}>
			{children}
		</div>
	);
};

ModalOverlay.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
