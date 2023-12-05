// Before
// const Visitor = require('../model/Visitor')

//After
// models: models/index에서 export한 db
const models = require('../models/index');
// models안에 있는 Visitor를 사용
const Visitor = models.Visitor;
// Controller에서 DB에 쿼리를 직접 전송함


exports.main = (req,res) =>{
    res.render('index');
};


//[After] , callback 함수를 넘겨준다.
exports.getVisitors = (req, res) =>{
    //[before]
    // Visitor.getVisitors((result) => {
    //     // 모델의 rows를 result라는 변수명으로 받음
    //     console.log('Cvisitor.js > ', result);
    //     res.render('visitor', {data: result});
    // })
     //[After]
    // SELECT * FROM visitor
    Visitor.findAll().then((result) => {
        console.log('findAll > ', result);
        res.render('visitor', {data:result});
    })
}

// post /visitor
exports.post_visitor = (req, res) =>{
    console.log('req.body >>> : ',req.body);
    const {name, comment} = req.body

    // Visitor.postVisitor(req.body, (result) => {
    //     // result : rews.insertId => ex) 3
    //     // DB에 생긴 id값을 id에 넘겨줌
    //     console.log(result);
    //     res.send({id: result, name : name, comment: comment});
    // })
     //[After]
    Visitor.create({
        name: name,
        comment: comment
    }).then((result) => {
        console.log('create > ', result);
        res.send(result);
    })
}

// get /visitor => localhost:PORT/visitor?id=n
exports.getVisitor = (req,res) =>{
    console.log(req.query); //{ id : '1' }
    console.log(req.query.id);

    // [before]
    // Visitor.getVisitor(req.query.id, (result) => {
    //     console.log('get_visitor Cvisitor.js > ', result);
    //     res.send(result);
    // })
    // [After]
    //Select * from visitor wher id = ? , limit1
    Visitor.findOne({
        where: {id:req.query.id}
    }).then((result) =>{
        console.log('findOne > ', result);
        res.send(result);
    })
}

// get /visitor/:id => localhost:PORT/visitor/:id
// 주의:  params사영시 라우터 정의 순서에 주의해야 함
exports.getVisitor2 = (req,res) =>{
    console.log(req.params); //{ id : '1' }
    console.log(req.params.id);

    //[Before]
    // Visitor.getVisitor(req.params.id, (result) => {
    //     // result : rows[0] => { id : 1, name : ~~~~~}
    //     console.log('get_visitor2 Cvisitor.js > ', result);
    //     res.send(result);
    // })

    //[After]
    Visitor.findOne({
        where: {id:req.params.id}
    }).then((result) =>{
        console.log('findOne2 > ', result);
        res.send(result);
    })
}

// PATCH / visitor 
exports.patch_visitor= (req,res) => {
    console.log(req.body);
    
    //[before]
    // Visitor.patchVisitor(req.body, (result) => {
    //     console.log('patchVisitor Cvisitor.js > ', result);
    //     res.send('수정 성공!');
    // })
    

    //[After]
    // UPDATE visitor SET name = ? , cooment = ? where id =?
    Visitor.update({
        name : req.body.name,
        comment: req.body.comment
    },{
        where: {
            id : req.body.id
        }
    }
    ).then((result) => {
        console.log('update >', result);
        res.send('수정성공');
    })
}

// DELETE /visitor
exports.delete_visitor = (req, res)=> {
    console.log(req.body);
    console.log(req.body.id);

    // [before]
    // Visitor.deleteVisitor(req.body.id,(result) =>{
    //     console.log('deleteVisitor Cvisitor.js > ',result);
    //     res.send('삭제성공');
    // })
    
    // [After]
    // Delete FROM visitor where id = ?
    Visitor.destroy({
        where: {
            id: req.body.id
        }
    }).then((result) => {
        console.log('destroy > ', result);
        res.send('삭제성공');
    })
}

