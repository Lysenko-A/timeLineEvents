import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import TimeEvents from '../containers/TimeEvents';
// import SingIn from "../containers/SingIn";
import NotFound from '../components/NotFound';
import { store } from '../store/store';

export const history = createBrowserHistory();

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={TimeEvents} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
