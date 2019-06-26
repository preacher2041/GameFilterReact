export const actionTypes = {
	FETCH_GAME_DATA: 'FETCH_GAME_DATA',
	FETCH_GAME_DATA_SUCCESS: 'FETCH_GAME_DATA_SUCCESS',
	FETCH_GAME_DATA_FAILED: 'FETCH_GAME_DATA_FAILED',
};

export const fetchGameData = () => ({
	type: actionTypes.FETCH_GAME_DATA
});

export const fetchGameDataSuccess = (result) => ({
	type: actionTypes.FETCH_GAME_DATA_SUCCESS,
	result
});

export const fetchGameDataFailed = (error) => ({
	type: actionTypes.FETCH_GAME_DATA_FAILED,
	error
});