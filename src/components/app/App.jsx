import React from 'react';
import Main from './../main/main.jsx';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {Routes} from '../../const.js';
import NotFound from '../not_found/not_found.jsx';
import browserHistory from '../../browser-history.js';

const App = () => {
  return <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path={Routes.MAIN} exact render={() => {
        return <Main/>;
      }}/>
      <Route path={Routes.NOT_FOUND} exact render={() => {
        return <NotFound/>;
      }}/>
      <Route render={() => {
        return <NotFound/>;
      }}/>
    </Switch>
  </BrowserRouter>
  ;
};

export default App;
