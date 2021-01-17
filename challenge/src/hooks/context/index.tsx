import React from 'react';

import { StatesProvider } from './modules/StatesContext';

const AppProvider: React.FC = ({ children }) => (
  <StatesProvider>{children}</StatesProvider>
);

export default AppProvider;
