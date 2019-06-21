import { combineReducers } from 'redux';

import {filtersComponentReducer} from '../components/store/reducer';

export default combineReducers({
	GameFiltersComponent: filtersComponentReducer,
});