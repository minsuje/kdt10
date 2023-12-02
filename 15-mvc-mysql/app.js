const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/static', express.static(__dirname + '/static'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 라우터 분리
const indexRouter = require('./routes/index');
app.use('/', indexRouter);


// 애러 처리
app.get('*', (req,res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`${PORT} is opening!!`)
})