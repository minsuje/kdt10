const express = require('express');
const app = express();
// console.log(PORT);
// const PORT = process.env.PORT || 8888;
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

const crypto = require('crypto');
const db = require('./models/index');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json())

// 세션은 프로필에서 사용

const indexRouter = require('./routes/user');
app.use('/', indexRouter);

app.get('*', (req, res) => {
    res.render('404');
})

db.sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, (req,res) =>{
        console.log(`http://localhost:${PORT}`);
    })
})