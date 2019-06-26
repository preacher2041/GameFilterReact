import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {App} from './App';
import store from './config/store';

const app =
	// connects the app to the redux store
	<Provider store={store}>
		<App />
	</Provider>;

ReactDOM.render(app, document.getElementById('app'));