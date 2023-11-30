// (임시) DB로부터 받아온 데이터 댓글 목록 (가정)

// 함수 호출시 배열 리턴
exports.commentInfos = () =>{
    return [ {
        id:1,
        userid: 'helloword',
        date: '2022-11-31',
        comment: '반가워요'
    },{
        id:2,
        userid: 'Hi',
        date: '2023-11-31',
        comment: '안녕'
    }, {
        id:3,
        userid: 'bye',
        date: '2021-11-31',
        comment: '잘가'
    },{
        id:4,
        userid: 'good',
        date: '2024-11-31',
        comment: '잘했어'
    }];
    
}