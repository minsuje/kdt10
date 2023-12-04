function singUP(){
    const form = document.forms['newUser'];

    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }

    axios({
        method: 'post',
        url: '/user/singup',
        data: {
            id : form.id.value,
            pw : form.pw.value,
            name: form.name.value
        }
    }).then((res) => {
        console.log('res.data >> :', res.data);
        const {data} = res;

        if(!data.isLogin){
            alert('이미 존재하는 회원입니다! 아이디를 확인해주세요 :)');
            form.reset(); // form 초기화
        }else{
            alert('회원가입 성공');
            document.location.href = '/user/singin';
        }
    })
}

// function login(){
//     const form = document.forms['logIn'];
    
//     axios({
//         method: 'post',
//         url: '/user/singin',
//         data: {
//             id: form.id.value,
//             pw: form.pw.value,
//         }
//     }).then((res)=>{       
//         console.log('로그인 함수 리턴 값 >',res.data);
//         if(res.data.result){
//             alert('로그인 성공');
//             const form = document.forms['hidden-form'];
//             form.id.value = res.data.id;
//             form.submit();
//         }else{
//             alert('로그인 실패');
//         }
//     })
// }

async function login(){
    const form = document.forms['logIn'];
    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }

    try{
        let res = await axios({
            method: 'post',
            url: '/user/singin',
            data: {
                id : form.id.value,
                pw: form.pw.value
            }
        })
        console.log(res.data)
        const { data } = res;

        if(data.isLogin){
            alert('로그인 성공')
            
            //프로필 페이지 요청 보내기
            const form_info = document.forms['hidden-form'];
            form_info.id.value = form.id.value;
            form_info.submit()
        } else{
            alert('로그인 실패!');
            form.reset();
        }
    }
    catch(err){
        console.log(err);
    }
}

function Edit(){
    const form = document.forms['PROFILE'];

    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }

    axios({
        method: 'patch',
        url: '/user/profile/edit',
        data : {
            id: form.id.value,
            pw: form.pw.value,
            name: form.name.value
        }
    }).then((res) => {
        console.log(res);
    })
}

function Delete(){
    const form = document.forms['PROFILE'];

    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }

    axios({
        method: 'delete',
        url: '/user/profile/delete',
        data:{
            id: form.id.value
        }
    }).then((res) => {
        console.log(res);
        alert('회원 탈퇴 성공!');

        //회원 탈퇴 했으면 프로필 페이지 x => 메인 페이지로 이동
        document.location.href = '/user';
    }).catch((err) => {
        console.log(err);
    })
}