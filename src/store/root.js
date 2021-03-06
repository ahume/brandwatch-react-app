import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commits from './commits';
import profile from './profile';

export default combineReducers({
  commits,
  profile,
  routerReducer,
});
