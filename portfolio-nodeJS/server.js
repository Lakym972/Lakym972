import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import routes from './app/routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

routes(app);

app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
})