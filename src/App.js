import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BootstrapNavbar from './component/Navigation/navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
            <BootstrapNavbar />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
