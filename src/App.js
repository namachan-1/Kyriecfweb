import React from 'react';
import kyrieLogo from './kyrie_logo.png';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img class="App-logo" src={kyrieLogo} alt="Kyrie Christian Fellowship" />
        <p>
        Kyrie (keer-ee-ey) Christian Fellowship. The name of our fellowship comes from the greek word Kyrie, meaning Lord. It is what we are all about, and why we are here.
        </p>
        <p>
        Who are we? We are a Christian fellowship at UCSC supported by Trinity Bible Church (Felton) and Redeemer Anglican Church (Aptos). Our goal is to evangelize, disciple, and train college students at UC Santa Cruz through active participation in and engagement with the local church. We hope to further the kingdom of God by raising up men and women of God.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/kyrieucsc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/kyrieucsc/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
