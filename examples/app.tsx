import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './404';
import Avatar from './components/avatar';

ReactDOM.render(
  <div>
    <Router>
      <main>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/avatar" component={Avatar}/>
      </main>
    </Router>
  </div>,
document.querySelector('#root'));
