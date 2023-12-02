const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/static', express.static(__dirname + '/static'));

const indexRouter = require('./routes/user');
app.use('/user', indexRouter);



app.get('*', (req,res)=>{
    res.render('404');
})

app.listen(PORT, (req,res) => {
    console.log(`localhost:${PORT}`);
})

