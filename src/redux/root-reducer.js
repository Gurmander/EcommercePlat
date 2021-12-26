// root reducer combines all the reducer into one file as in here and to do that, combineReducer is used
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
})