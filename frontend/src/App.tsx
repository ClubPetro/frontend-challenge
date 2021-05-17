import Header from './components/header';
import { ScheduleProvider } from './context/scheduleContext';
import Home from './pages/home';
import GlobalStyles from './styles/GlobalStyles';
import Router from './router/index';

const App = (): JSX.Element => {
    return (
        <ScheduleProvider>
            <GlobalStyles />
            <Header />
            <Home />
            <Router />
        </ScheduleProvider>
    );
};

export default App;
