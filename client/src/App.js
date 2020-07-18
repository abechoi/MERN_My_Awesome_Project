import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {

  const [ apiResponse, setApiResponse ] = useState('');

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => setApiResponse(res))
    .catch(err => err);
  }

  useEffect(() => {
    callAPI();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome Abe!</h1>
      </header>
      <p className="App-intro">{apiResponse}</p>
    </div>
  );
}

export default App;
