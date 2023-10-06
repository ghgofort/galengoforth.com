import './App.css';
import logoImg from './images/ggoforth_logo.webp';
import Tabs from './components/tabs';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <div className="App-header__logo">
                    <img src={logoImg} className="App-logo" alt="logo"/>
                    <p className="App-title">Welcome to galengoforth.com!</p>
                </div>
            </div>
            <div className="App-main">
                <Tabs/>
            </div>
        </div>
    );
}

export default App;
