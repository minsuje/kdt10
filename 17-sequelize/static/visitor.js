const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#button-group')

// 폼의 등록 버튼 클릭시
// -- 테이블에 데이터 추가
function insert(){
    const form = document.forms['visit'];

    if(form.name.value.length === 0 || form.comment.value.length === 0){
        alert('이름 또는 방명록 기입해주세요');
        return;
    }

    // name 10글자 유효성 검사
    if(form.name.value.length > 10){
        alert('이름은 10글자 미만입니다!');
        return;
    }

    axios({
        method : 'post',
        url: '/visitor',
        data: {
            name : form.name.value,
            comment : form.comment.value
        }
        }).then((res) => {
            console.log('res.data >> : ',res.data);
            const data = res.data;

            // 새로고침 안해도 보이게 만들기
            const html = `
                    <tr id="tr_${data.id}">
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.comment}</td>
                    <td><button type="button"  onclick="editVisitor(${data.id})>수정</button></td>
                    <td><button type="button" onclick="deleteVisitor(this, ${data.id})">삭제</button></td>
            `

            // //insertAdjacentHTML: 특정 요소에 html 추가
            tbody.insertAdjacentHTML('beforeend', html)
            
            form.reset();
        })
}

// 폼의 수정 버튼 클릭시 동작
// - form input에 값을 넣기
// - 변경과 취소 버튼 보이기

function editVisitor(id){
    // (1)  form에 input값 넣기 (DB에서 값을 받아서)
    // axios로 요청 보냄
    axios({
        method: 'get',
        // 1) req.query(서버 -> /visitor)로 받기 -> url에 직접 넣기 : `visitor?id=${id}`
        url: `/visitor?id=${id}`,
        // 2) params 이용 -> req.query(서버 -> /visitor) 서버에서 받으면 된다
        // url '/visitor,
        // params: {
            // id: id
        // }

        // ver.2 ) (서버 -> ) req.params -> /visitor/:id
        // url: /visitor/${:id}

    }).then((res) => {
        console.log('editVisitor get data > ', res.data);
        // { id : 1, name: ~~~~}
        const{name, comment} = res.data;
        const form = document.forms['visit'];

        form.name.value = name;
        form.comment.value = name;
    })


    // (2) 변경, 취소 방식

    const html = `
    <button type="button" onclick="editDo(${id})">변경</button>
    <button type="button" onclick="editCancle()">취소</button>
    `
    btnGroup.innerHTML = html;
}

// 수정 -> 버튼 변경 나오니까, 버튼 클릭 시
// - 데이터 변경 
function editDo(id){
    const form = document.forms['visit'];

    axios({
        method: 'PATCH',
        url: '/visitor',
        data: {
            id : id,
            name : form.name.value,
            comment: form.comment.value
        }
    }).then((res) => {
        console.log(res.data);

        // 새로고침 없이 바로 값이 보이게 하기 위해 만듬
        const children = document.querySelector(`#tr_${id}`).children;
        console.log(children);
        children[1].textContent = form.name.value;
        children[2].textContent = form.comment.value;

        //입력창 초기화, 등록 버튼 보이기
        // form의 input value들을 초기화
        // form.reset();
        editCancle();
    })
}

// 취소 버튼 클릭시 -> input 초기화, 등록 버튼 보이기
function editCancle(){
    const form = document.forms['visit'];
    //input초기화
    form.reset();

    // or form.name.value = '';

    // 등록 버튼 보이기
    const html = `<button type='button' onclick='insert()'>등록</button>`
    btnGroup.innerHTML = html;
}

// 삭제 버튼 클릭시 -> DB에 삭제, 테이블에서 해당 행 삭제

function deleteVisitor(obj, id){
    console.log('obj > ', obj); // 버튼 태그
    console.log('id > ', id);
    
    // console.log(confirm('정말 삭제하시겠습니까?')); // true, false
    // if문 안에 조건이 참일 때 함수를 끝내겠다
    // 안에 조건이 참이려면 cofirm 에서 취소 버튼을 눌러야 해요
    if(!confirm('정말 삭제하시겠습니까?')) return;

    axios({
        method: 'DELETE',
        url: '/visitor',
        data: {
            id: id
        }
    }).then((res) => {
        console.log(res.data);

        // 1) parantElemnt 두번 해서 직접 접근
        // obj.parentElemnet.parentElemnet.remove();

        // 2) closest() 메서드
        obj.closest(`#tr_${id}`).remove();
    })
}