import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import Header from '../components/Header';


interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = (
  { component: Component },

  { ...rest },
) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <>
            <Header/>
            <Component />
          </>
        );
      }}
    />
  );
};

export default Route;