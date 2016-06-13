import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from './components/Main';

// Load foundation
import 'style!css!foundation-sites/dist/foundation.min.css';

// app scss
import 'style!css!sass!app/styles/app.scss';

$(document).foundation();

render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
