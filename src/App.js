import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';

function App() {
  return (
    <div className="App">
      <div className="App-content">
      <Header/>
      <Content/>
      <Footer/>
      </div>
     
    </div>
  );
}

export default App;
