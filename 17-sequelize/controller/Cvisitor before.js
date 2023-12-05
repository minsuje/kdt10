// Before
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
    // 컨트롤러 -> 모델 -> DB -> 모델 반환 -> 컨틀롤러 반환 -> 응답
    // 콜백함수를 써준 이유 : 비동기처리 하기 위하여, 
    // 1) Visitor.getVisitors() // 함수 호출
    // 2) 모델에서 데이터값 받은 후에 콜백 함수 실행
    Visitor.getVisitors((result) => {
        // 모델의 rows를 result라는 변수명으로 받음
        console.log('Cvisitor.js > ', result);
        res.render('visitor', {data: result});
    })
}

// post /visitor
exports.post_visitor = (req, res) =>{
    console.log('req.body >>> : ',req.body);
    const {name, comment} = req.body
    // post, get 등 요청 시 컨트롤러에서 모델에 필요한 값을 넘겨줘야 함
    // Visitor.postVisitor(view에서 받아온 데이터, 콜백함수) 호출
    Visitor.postVisitor(req.body, (result) => {
        // result : rews.insertId => ex) 3
        // DB에 생긴 id값을 id에 넘겨줌
        console.log(result);
        res.send({id: result, name : name, comment: comment});
    })
}

// get /visitor => localhost:PORT/visitor?id=n
exports.getVisitor = (req,res) =>{
    console.log(req.query); //{ id : '1' }
    console.log(req.query.id);

    //모델에 함수를 호출
    Visitor.getVisitor(req.query.id, (result) => {
        // result : rows[0] => { id : 1, name : ~~~~~}
        console.log('get_visitor Cvisitor.js > ', result);
        res.send(result);
    })
}

// get /visitor/:id => localhost:PORT/visitor/:id
// 주의:  params사영시 라우터 정의 순서에 주의해야 함
exports.getVisitor2 = (req,res) =>{
    console.log(req.params); //{ id : '1' }
    console.log(req.params.id);

    //모델에 함수를 호출
    Visitor.getVisitor(req.params.id, (result) => {
        // result : rows[0] => { id : 1, name : ~~~~~}
        console.log('get_visitor2 Cvisitor.js > ', result);
        res.send(result);
    })
}

// PATCH / visitor 
exports.patch_visitor= (req,res) => {
    console.log(req.body);

    Visitor.patchVisitor(req.body, (result) => {
        console.log('patchVisitor Cvisitor.js > ', result);
        res.send('수정 성공!');
    })
}

// DELETE /visitor
exports.delete_visitor = (req, res)=> {
    console.log(req.body);
    console.log(req.body.id);

    Visitor.deleteVisitor(req.body.id,(result) =>{
        console.log('deleteVisitor Cvisitor.js > ',result);
        res.send('삭제성공');
    })
}

