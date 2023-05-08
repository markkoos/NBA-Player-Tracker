import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// importing bootstrap so it can be used in application
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// importing CSS styling and console logging so that it works with site hosting
import style from "./styles/style.css";

console.log(`using ${style}`);

// ReactDOM.render() method to renders our app component to the DOM
ReactDOM.render(<App />,
  // Rendering app component to the 'root' element which is the default ID created with render method
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
