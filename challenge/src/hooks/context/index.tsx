import React from 'react';

import { PlacesProvider } from './modules/PlacesContext';

const AppProvider: React.FC = ({ children }) => (
  <PlacesProvider>{children}</PlacesProvider>
);

export default AppProvider;
