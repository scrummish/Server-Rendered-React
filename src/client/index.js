// Entry point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Routes from './Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));