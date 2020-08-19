import React, { useState } from 'react';
import Dogs from './Dogs';
import Dog from './Dog';
import Colors from './Colors';
import Color from './Color';
import NewColor from './NewColor';
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = ({ dogs, colors }) => {
  const [stateColors, setColors] = useState(colors);

  const addColor = (newColor) => {
    setColors(colors => [
      ...colors, { ...newColor }
    ]);
  };

  return (
    <Switch>
      <Route exact path="/colors/:name"><Color colors={stateColors} /></Route>
      <Route exact path="/colors"><Colors colors={stateColors} /></Route >
      <Route exact Path="/new"><NewColor addColor={addColor} /></Route>
      <Route exact path="/dogs/:name"><Dog dogs={dogs} /></Route>
      <Route exact path="/dogs/"><Dogs dogs={dogs} /></Route>
      <Route exact path="/"><Dogs dogs={dogs} /></Route>
      <Redirect to="/" />
    </Switch >
  );
};

export default Routes;