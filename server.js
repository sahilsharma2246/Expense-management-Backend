const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

//configure dotenv
dotenv.config();

//db call
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
//user routes
app.use('/api/v1/users', require('./routes/userRoutes'));

//transaction routes
app.use('/api/v1/transections', require('./routes/transRoutes'));


//port

const PORT = process.env.PORT;

//listen port

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})