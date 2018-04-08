// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {userReducer} from './userReducer';

export default combineReducers({
  appState:appReducer,
  userState:userReducer,
  routing
  // More reducers if there are
  // can go here
})
