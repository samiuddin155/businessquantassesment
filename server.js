const express = require('express');
const colors = require('colors');
const morgan = require("morgan");
const dotenv = require("dotenv");
const mysqlpool = require('./config/db');


//configure 
dotenv.config();

//rest object 
const app = express();

//middlewares 
app.use(express.json());
app.use(morgan("dev"));

//routes for AAPL

app.use('/ticker=AAPL&column=revenue,gp&period=5y',require('./routes/studentsroutes'))
app.use('/ticker=ZS&column=revenue,gp&period=5y',require('./routes/studentsroutes'))

//app.use('/ticker=AAPL&column=revenue,gp&period=5y',require('./routes/studentsroutes'))


app.get("/test",(req,res)=>{
    res.status(200).send("<h1>welcome 222<h1/>");
});

//port 
const PORT = process.env.PORT || 8000;


//conditonally listen
mysqlpool.query('SELECT 1').then(()=>{
    //MY SQL
    console.log('MYSQL DB CONNECTED'.bgCyan.white)

//listen 
app.listen(PORT,()=>{
    console.log(`server runnning on port ${process.env.PORT}`.bgMagenta.white);
});
}).catch((error)=>{
    console.log(error);
});
