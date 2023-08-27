import AboutMe from './components/aboutMe';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AboutMe />
      </header>
    </div>
  );
}

export default App;
