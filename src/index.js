import express from 'express';

const app = express(),
      port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log('listening on port ' + port);
});