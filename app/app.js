import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// Components
import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

// Load foundation
import 'style!css!foundation-sites/dist/foundation.min.css';

// app scss
import 'style!css!sass!app/styles/app.scss';

$(document).foundation();

render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer} />
      <Route path="countdown" component={Countdown} />
    </Route>
  </Router>,
  document.getElementById('app')
);
