import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import PlaceCardList from '../components/PlaceCardList';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={PlaceCardList} />
    </Switch>
  );
};

export default Routes;