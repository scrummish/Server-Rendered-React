// Entry point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../helpers/createStore';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

const store = createStore();

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                { renderRoutes(Routes) }
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));