import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express(),
      port = 3000;

app.use(express.static('public'));

app.get('/', (req,res) => {
    const store = createStore();

    res.send(renderer(req, store));
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});