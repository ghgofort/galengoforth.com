import AboutMe from './components/aboutMe';
import './App.css';
import HPT from './components/hpt';
import logoImg from './images/ggoforth_logo.webp';

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
                <AboutMe/>
                <HPT/>
            </div>
        </div>
    );
}

export default App;
