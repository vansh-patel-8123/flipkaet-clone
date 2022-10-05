import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './defaultData.js';

const app = express();

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORLD;

const PORT = 8000;

connection(username,password);

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));

app.get('/' ,(req,res) => res.send(`abcd`));

DefaultData();