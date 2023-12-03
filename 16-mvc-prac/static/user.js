
function singUP(){
    const form = document.forms['newUser'];

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
    })
}

function login(){
    const form = document.forms['logIn'];
    
    axios({
        method: 'post',
        url: '/user/singin',
        data: {
            id: form.id.value,
            pw: form.pw.value,
        }
    }).then((res)=>{
        console.log('로그인 함수 리턴 값 >',res.data)
    })
}