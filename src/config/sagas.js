import { all } from 'redux-saga/effects';
import GameFilterComponentSaga from '../components/store/sagas';

export default function* rootSaga () {
	yield all([
		GameFilterComponentSaga(),
	]);
}