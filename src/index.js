// babel-polyfill used for modern js like async await
import "@babel/polyfill";
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';

const app = express(),
      port = 3000;

app.use(express.static('public'));

app.get('/', (req,res) => {
    // Create the server side store to fill with the initial data
    // that will be fetched
    const store = createStore();

    // Checks to see what routes require outside data 
    // and makes the request for the data
    const promises = matchRoutes(Routes, req.path).map(({ route })=>{
        return route.loadData ? route.loadData(store) : null;
    });

    // Once all the promises have been fullfilled render the app
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    })
})

app.listen(port, () => {
    console.log('listening on port: ' + port);
});