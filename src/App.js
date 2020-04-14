//jshint esversion :9

import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Print from './print';
import Enter from "./Enter";
const web3 = require( "./web3");
const lottery = require('./lottery');




function App(){

  return (
    <div className="App">
<h1>helo</h1>
<Print />
<hr />
<Enter />
    </div>
  );
}

export default App;
