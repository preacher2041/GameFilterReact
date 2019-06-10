import { combineReducers } from 'redux';

import filterReducer from '../components/store/reducer';

export default combineReducers({
	filters: filterReducer
});