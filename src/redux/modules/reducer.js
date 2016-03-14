import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import {reducer as form} from 'redux-form';
import files from './files';
import slides from './slides';


export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  files,
  form,
  slides,
});
