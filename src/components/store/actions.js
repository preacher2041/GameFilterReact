export const actionTypes = {
	FETCH_FILTER_DATA: 'FETCH_FILTER_DATA',
	FETCH_FILTER_DATA_SUCCESS: 'FETCH_FILTER_DATA_SUCCESS',
	FETCH_FILTER_DATA_FAILED: 'FETCH_FILTER_DATA_FAILED',
};

export const fetchFilterData = () => ({
	type: actionTypes.FETCH_FILTER_DATA
});

export const fecthFilterDataSuccess = (result) => ({
	type: actionTypes.FETCH_FILTER_DATA_SUCCESS,
	result
});

export const fecthFilterDataFailed = (error) => ({
	type: actionTypes.FETCH_FILTER_DATA_FAILED,
	error
});



