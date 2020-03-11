import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import 'examples/global.scss';
import Home from './examples/home';
import IconExample from './examples/icon.example';

ReactDOM.render(
  <div>
    <Router>
      <main>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/icon" component={IconExample}/>
      </main>
    </Router>
  </div>,
document.querySelector('#root'));
