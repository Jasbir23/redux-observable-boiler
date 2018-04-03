import { combineReducers } from 'redux';
import listReducer from './list-reducer';
const allReducers = combineReducers({
  listReducer: listReducer
});
export default allReducers;
