import { all, fork } from 'redux-saga/effects';
import filterSaga from '../components/FilterComponent/store/sagas';

export default function* rootSaga () {
	yield all([
		fork(
			filterSaga
		),
	]);
}