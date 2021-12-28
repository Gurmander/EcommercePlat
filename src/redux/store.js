// Store- immutable object tree in redux, state container which holds application's state, createStore is used to create Store, applyMiddleware helps to apply multiple middlewares like logger etc to store. Middleware lets us catch action and display it. 
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// redux persist, persistStore allows the browser to cache our store depending on certain configuration options that we set
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

// If we want to add more things to middleware, we can do it to middlewares later on
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Creating persisted version of store using persistStore 
export const persistor = persistStore(store);

export default store;