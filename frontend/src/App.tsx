import GlobalStyles from './styles/global';

import Home from './pages/Home';
import { CountryProvider } from './hooks/CountryContext';

const App: React.FC = () => {
  return (
    <CountryProvider>
      <Home />
      <GlobalStyles />
    </CountryProvider>
  );
};

export default App;
