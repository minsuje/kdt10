// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

app.get('/',(req,res) => {
    console.log(process.env.NAME);
    console.log(process.env.NODE_ENV);
    res.send('Hello World');
})

app.listen(PORT, (req,res) =>{
    console.log(`http://localhost${PORT}`);
})
