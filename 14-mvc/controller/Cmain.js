// [After] Model 연결
const Comment = require('../model/Comment');


// [Before] Model 연결 전
// (임시) DB로부터 받아온 데이터 댓글 목록
// const comments = [ {
//     id:1,
//     userid: 'helloword',
//     date: '2022-11-31',
//     comment: '반가워요'
// },{
//     id:2,
//     userid: 'Hi',
//     date: '2023-11-31',
//     comment: '안녕'
// }, {
//     id:3,
//     userid: 'bye',
//     date: '2021-11-31',
//     comment: '잘가'
// },{
//     id:4,
//     userid: 'good',
//     date: '2024-11-31',
//     comment: '잘했어'
// }];


// GET /
exports.main = (req,res) =>{
    res.render('index');
};

// GET /comments
exports.comments = (req, res)=>{
    // console.log(comments) // {},{},{},{}
    // console.log('comments',{commentInfos: comments}); //commentInfos 키값, comments value값
    // res.render('comments',{commentInfos: comments});

    // -- controller---
    console.log(Comment.commentInfos());
    res.render('comments',{commentInfos: Comment.commentInfos()});


};

// GET /comment/:id
exports.comment = (req,res) =>{
    // ========= 3 ==========
    const comments = Comment.commentInfos(); // model 연결 후 추가
    // ======================

    // req.query : /comment?id=1
    // ':'뒤에 변수 이름을 붙인다.
    console.log(req.params); // { id : '1' } : 라우트 매개변수에 대한 정보가 담겨있음
    console.log('id >', req.params.id);

    const commentId = req.params.id; // 댓글 아이디, url로 들어온 매개변수

    console.log(comments[commentId - 1]);

    // err처리, 존재하지 않는 댓글 id 접속시 404 페이지
    if(commentId < 1 || commentId > comments.length) {
        return res.render('404');
    }

    console.log(typeof commentId); // string

    // err처리 => :id 변수에 숫자가 아닌 값(commentID가 아닌 값)이 온다면 404페이지
    if(isNaN(commentId)) {
        return res.render(404)
    }
    // 배열의 index번호로 접근
    res.render('comment', { commentInfo: comments[commentId - 1]});
}