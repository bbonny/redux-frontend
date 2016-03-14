import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    AdminPage,
    UserPage,
    NotFound,
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={UserPage}/>

      <Route path="admin" component={AdminPage} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
