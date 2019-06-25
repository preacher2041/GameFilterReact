import { all } from 'redux-saga/effects';
import FilterComponentSaga from '../components/FilterComponent/store/sagas';
import GamesComponentSaga from '../components/FilterResultsComponent/store/sagas';
import SelectedFiltersComponentSaga from '../components/AppBarComponent/store/sagas';

export default function* rootSaga () {
	yield all([
		FilterComponentSaga(),
		GamesComponentSaga(),
		SelectedFiltersComponentSaga()
	]);
}