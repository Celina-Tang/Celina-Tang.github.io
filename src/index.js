import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><MainPage /></Router>, document.getElementById('root'));
registerServiceWorker();
