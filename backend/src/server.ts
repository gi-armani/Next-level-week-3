import express from 'express';
import path from 'path';
import 'express-async-errors';

import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/upload', express.static(path.join(__dirname, '..', 'uploads')))


app.listen(3333);