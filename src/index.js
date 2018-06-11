import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

ReactDOM.render(<MainPage />, document.getElementById('root'));
registerServiceWorker();
