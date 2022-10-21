import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootswatch/dist/minty/bootstrap.css'
import './custom.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    </>
);