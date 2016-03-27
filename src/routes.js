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

      <Route path="admin" component={AdminPage}>
        <Route path="/admin/wall" component={AdminPage}/>
        <Route path="/admin/edit" component={AdminPage}/>
        <Route path="/admin/documents" component={AdminPage}/>
      </Route>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
