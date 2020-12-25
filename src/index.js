import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var element = React.createElement('hi', {className:'greeting'}, 'Hello world!');

ReactDOM.render(
element, document.getElementById('root')
);
reportWebVitals();