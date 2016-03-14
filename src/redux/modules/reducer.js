import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routeReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import auth from './auth';
import counter from './counter';
import {reducer as form} from 'redux-form';
import info from './info';
import files from './files';
import slides from './slides';
import widgets from './widgets';

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  auth,
  files,
  form,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  slides,
  widgets
});
