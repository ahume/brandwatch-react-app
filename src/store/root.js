import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commits from './commits';

export default combineReducers({
  commits,
  routerReducer,
});
