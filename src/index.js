import express from 'express';
import renderer from './helpers/renderer';

const app = express(),
      port = 3000;

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send(renderer());
})

app.listen(port, () => {
    console.log('listening on port ' + port);
});