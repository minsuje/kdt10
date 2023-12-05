const express = require('express');
const app = express();
const PORT = 8000;

const db = require('./models/index');

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/static', express.static(__dirname + '/static'));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);



app.get('*', (req,res)=>{
    res.render('404');
})

db.sequelize.sync({force:false}).then(() =>{
    app.listen(PORT, (req,res) => {
        console.log(`localhost:${PORT}`);
    })
}).catch((err)=>{
    console.log(err);
})

