import { combineReducers } from 'redux';

import filterReducer from '../components/FilterComponent/store/reducer';

export default combineReducers({
	filters: filterReducer
});