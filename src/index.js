import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components';
import css from './css/style.css';

ReactDOM.render( 
    <BrowserRouter>
        < App />
    </BrowserRouter>,
    document.getElementById('app')
);