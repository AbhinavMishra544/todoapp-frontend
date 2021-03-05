import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';
import { BrowserRouter } from 'react-router-dom'

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.getElementById('root')
);
