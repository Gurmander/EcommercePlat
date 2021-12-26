// Store- immutable object tree in redux, state container which holds application's state, createStore is used to create Store, applyMiddleware helps to apply multiple middlewares like logger etc to store. Middleware lets us catch action and display it. 
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// If we want to add more things to middleware, we can do it to middlewares later on
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;