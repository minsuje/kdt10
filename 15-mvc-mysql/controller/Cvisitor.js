const Visitor = require('../model/Visitor')


exports.main = (req,res) =>{
    res.render('index');
};

// 이전 버전 [before]
// exports.getVisitors = (req, res) => {
//     console.log(Visitor.getVisitors());
//     res.render('visitor', {data: Visitor.getVisitors()})
// }


//[After] , callback 함수를 넘겨준다.
exports.getVisitors = (req, res) =>{
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js > ', result);
        res.render('visitor', {data: result});
    })
}

// post /visitor
exports.post_visitor = (req, res) =>{
    console.log(req.body);
    const {name, comment} = req.body

    Visitor.postVisitor(req.body, (result) => {
        console.log(result);
        res.send({id: result, name : name, comment: comment});
    })
}


