import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/auth.js'

dotenv.config();


const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['https://pfecims.web.app', 'http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200']  //3 react , 8 view, 42 angular
}));


app.use("/user", userRoutes);







const PORT = process.env.PORT || 5000;




mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Starting server at http://localhost:${PORT}`);
    })
})

