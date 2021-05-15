import Header from './components/header';
import Home from './pages/home';
import GlobalStyles from './styles/GlobalStyles';

const App = (): JSX.Element => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Home />
        </>
    );
};

export default App;
