import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commits from './commits';
import profile from './profile';
import ui from './ui';

export default combineReducers({
  commits,
  profile,
  routerReducer,
  ui,
});
