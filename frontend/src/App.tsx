import Header from './components/header';
import { ScheduleProvider } from './context/scheduleContext';
import Home from './pages/home';
import GlobalStyles from './styles/GlobalStyles';

const App = (): JSX.Element => {
    return (
        <ScheduleProvider>
            <GlobalStyles />
            <Header />
            <Home />
        </ScheduleProvider>
    );
};

export default App;
