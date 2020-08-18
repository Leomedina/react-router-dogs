import React from 'react';
import Dogs from './Dogs';
import Dog from './Dog';
import { Route, Switch } from 'react-router-dom';

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path="/dogs/:name"><Dog dog={dogs} /></Route>
      <Route exact path="/dogs/"><Dogs dogs={dogs} /></Route>
      <Route exact path="/"><Dogs dogs={dogs} /></Route>
      <Route><h1>Not Found 404</h1></Route>
    </Switch>
  );
};

export default Routes;