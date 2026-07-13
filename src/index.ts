import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo!!!');
});

app.listen(6505, () => {
  console.log('Server activo');
});
