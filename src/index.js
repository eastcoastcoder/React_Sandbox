import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Tabs, Tab } from 'react-materialize';
import Main from './components/Main';
import ClickDisplay from './components/ClickDisplay';
// import CountDisplay from './components/CountDisplay';

render(
  <Router>
    <div>
      <Tabs className="tab-demo z-depth-1">
        <Tab title="Main" active><Link to="/">Main</Link></Tab>
        <Tab title="ClickDisplay"><Link to="/click">ClickDisplay</Link></Tab>
        <Tab title="CountDisplay"><Link to="/count">CountDisplay</Link></Tab>
      </Tabs>

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

