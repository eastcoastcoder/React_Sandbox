import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Main from './components/Main';
import ClickDisplay from './components/ClickDisplay';
// import CountDisplay from './components/CountDisplay';

render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/click">ClickDisplay</Link></li>
        <li><Link to="/count">CountDisplay</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Main} />

      <Switch>
        <Route exact path="/click" component={() => <ClickDisplay counter={0} />} />
        <Route path="/click/:start" component={({ match }) => <ClickDisplay counter={Number(match.params.start)} />} />
      </Switch>
      {/* <Route path="/count" component={CountDisplay} /> */}
    </div>
  </Router>,
    document.querySelector('#root')
);

