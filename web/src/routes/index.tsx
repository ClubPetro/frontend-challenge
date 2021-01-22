import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import PlaceCardList from '../pages/PlaceCardList';
import EditPlace from '../pages/EditPlace';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={PlaceCardList} />
      <Route path="/edit/:placeId" component={EditPlace} />
    </Switch>
  );
};

export default Routes;