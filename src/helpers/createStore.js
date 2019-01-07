// Second redux store for the server side
// Neccessary to have some sort of detection for all 
// the initial data load before rendering the app 

import { createStore, applyMiddleware } from 'redux';
import reducers from '../client/reducers';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return store;
}