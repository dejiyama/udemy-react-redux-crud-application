import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware }  from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

const enhancer = process.env.NODE_ENV ==='development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)


applyMiddleware(thunk)
const store = createStore (reducer, enhancer) 

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/events/new" component={EventsNew} />
				<Route path="/events/:id" component={EventsShow} />
				<Route path="/" component={EventsIndex} />
				<Route path="/events" component={EventsIndex} />
			</Switch>
		</BrowserRouter>
	</Provider>,

	document.getElementById('root')
);

serviceWorker.unregister();
