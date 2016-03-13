import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    MarketingHome,
    SalesHome,
    NotFound,
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={SalesHome}/>

      <Route path="marketing" component={MarketingHome} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
