import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import photoRouter from './routers/photoPostRouter';

dotenv.config();

const app: Express = express();
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/photoblog_db';
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api', photoRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

startApp();
