import {actionTypes} from './actions';

const initialState = {
	gameData: []
};

export const ItemsComponentReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_GAME_DATA:
			return {
				...state,
				gameDataIsLoading: true
			};
		case actionTypes.FETCH_GAME_DATA_SUCCESS:
			const gameData = action.result.slice();

			gameData.forEach(game => {
				game.total_rating == null ? game.total_rating = 0 : game.total_rating = Math.round(game.total_rating);
				game.filterTags = game.genres.concat(game.platforms);

				if (game.total_rating > 79) {
					game.filterTags.push({
						'id': 100,
						'name': 'Essential',
						'slug': 'essential'
					})
				} else if (game.total_rating > 69 || game.total_rating < 79) {
					game.filterTags.push({
						'id': 200,
						'name': 'Recommended',
						'slug': 'recommended'
					})
				} else if (game.total_rating < 10) {
					game.filterTags.push({
						'id': 300,
						'name': 'Avoid',
						'slug': 'avoid'
					})
				}

			});

			return {
				...state,
				gameDataIsLoading: false,
				gameData: gameData,
			};
		case actionTypes.FETCH_GAME_DATA_FAILED:
			const fetchDataError = action.error.message;

			return {
				...state,
				gameDataIsLoading: false,
				fetchDataError: fetchDataError
			};

		default:
			return state;
	}
};