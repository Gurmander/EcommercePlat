// root reducer combines all the reducer into one file as in here and to do that, combineReducer is used
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import { persistReducer } from 'redux-persist';
// storage here is actual local storage on our window object, basically it tells redux-persist that we want to use our local storage as default storage, we can also import sessionStorage if we wants
import storage from 'redux-persist/lib/storage';

// whitelist basically contains the string names of the reducers that we want to store in our (local)storage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer= combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});


export default persistReducer(persistConfig, rootReducer);