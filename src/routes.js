import React from 'react';
import { Route } from 'react-router';
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
    <Route component={App}>
      { /* Home (main) route */ }
      <Route path="/" component={UserPage}/>

      <Route path="admin" component={AdminPage} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
