// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Fotter';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = (text) => {
    setDisplayText(text);
  };

  return (
    <div className="app">
      <Header title="This is Header" />
      <Content onButtonClick={handleButtonClick} />
      <p className="display-text">{displayText}</p>
      <Footer text="This is my Footer Section" />
    </div>
  );
}

export default App;

