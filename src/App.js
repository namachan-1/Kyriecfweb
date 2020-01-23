import React from 'react';
import kyrieLogo from './kyrie_logo.png';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={kyrieLogo} alt="Kyrie Christian Fellowship" />
        <p>
          woW is this the new kyrie website?
          *Where the about will be / other things*
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/kyrieucsc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook (use this sort of thing for the other links too @nae yahyee)
        </a>
      </header>
    </div>
  );
}

export default App;
