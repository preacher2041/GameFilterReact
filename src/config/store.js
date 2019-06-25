import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './sagas';

const composedEnhancers = composeWithDevTools;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	rootReducer,
	composedEnhancers(
		applyMiddleware(sagaMiddleware),
	)
);

sagaMiddleware.run(rootSaga);

export default store;