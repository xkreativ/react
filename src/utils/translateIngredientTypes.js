export let translateIngredientTypes;
export default translateIngredientTypes = (type) => {
	switch (type) {
		case 'bun':
			return 'Булки';
		case 'sauce':
			return 'Соусы';
		case 'main':
			return 'Начинки';
		default:
			return type.charAt(0).toUpperCase() + type.slice(1);
	}
};
