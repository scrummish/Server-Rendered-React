import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';

import App from './client/App';

const app = express(),
      port = 3000;

app.use(express.static('public'));

app.get('/', (req,res) => {
    const content = renderToString(<App/>);
    res.send('hello');
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});