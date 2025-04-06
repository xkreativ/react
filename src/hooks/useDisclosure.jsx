import { useCallback, useEffect, useState } from 'react';

const useDisclosure = (initialState = false, { onOpen, onClose } = {}) => {
	const [isOpen, setIsOpen] = useState(initialState);

	useEffect(() => {
		setIsOpen(initialState);
	}, [initialState]);

	const open = useCallback(() => {
		setIsOpen(true);

		if (typeof onOpen === 'function') {
			onOpen();
		}
	}, [onOpen]);

	const close = useCallback(() => {
		setIsOpen(false);

		if (typeof onClose === 'function') {
			onClose();
		}
	}, [onClose]);

	const toggle = useCallback(() => {
		isOpen ? close() : open();
	}, [isOpen, close, open]);

	return { isOpen, toggle, close, open };
};

export default useDisclosure;
