// promise(프로미스) 객체
/**
 * - 비동기 함수를 동기처리하기 위해 만든 객체
 * - 미래에 성공 / 실패에 대한 결과 값을 '약속' 한다는 의미
 * - 성공과 실패를 분리해서 반환한다.
 * - 성공에 대한 결과는 then이라는 메서드로,
 * - 실패에 대한 결과는 catch라는 메서드로 처리
 * - resolved : 성공
 * - rejected : 실패
 */

// //  1. promise 생성코드
// function promise1(flag){
//     // 프로미스 객체를 생성하여 반환
//     return new Promise(function(resolved, rejected){
//         if(flag){
//             resolved(`현재 프로미스의 상태는 fulfilled(이행), then메서드로 연결! flag : ${flag}`);
//         }else {
//             rejected(`현재 프로미스의 상태는 rejected(거절), catch메서드로 연결! flag : ${flag}`);
//         }
//     })
// }

// // 2. promise 사용하는 코드
// promise1(5 < 3).then((result) => {
//     console.log('result :', result);
// }).catch((error) => {
//     console.log('error :', error);
// });

// // ----------- promise 예제 ------------
// // index.js에서 "콜백함수"를 이용해서 동기처리한 코드를
// // "promise"를 이용해 동기처리

// function goMart(){
//         console.log('마트에 와서 어떤 음료를 살지 고민중,,,')
//     }
    
//     function pickDrink(){
//         return new Promise(function(resolved, rejected){
//             // 3초 고민(3초 후 실행)
//         setTimeout(function(){
//             console.log('좋아 골랐어!')
//             product = '콜라'
//             price = 2600;
//             const money = 2000;

//             if(price < money){
//                 rejected();
//             } else{
//                 resolved();
//             }

//             // resolved(); // 성공을 의미하는 resolve 실행
//         }, 3000);
//         })
//     }
    
//     function pay(product, price){
//         console.log(`상풍명 : ${product}, 가격 : ${price}`);
//     }
    
//     let product, price;
//     goMart();
//     pickDrink().then(() => {
//         pay(product, price);
//     }).catch(()=>{
//         console.log('돈이 모잘라요 ㅠㅠ');
//     })
    
//     // --------------------- 프로미스 체이닝 ----------------------

//     // 함수를 이용해서 (4+3)*2-1 = 13 을 연산하기!

//     // 1. 콜백 함수라면?
//     function add(n1, n2, cb){
//         setTimeout(function(){
//             const result = n1 + n2;
//             cb(result); // mul(result) 목적
//         }, 1000);
//     }
//     function mul(n, cb){
//         setTimeout(function(){
//             const result = n*2;
//             cb(result); // sub(result) 목적
//         },700);

//     }
//     function sub(n, cb){
//         setTimeout(function(){
//             const result =n - 1;
//             cb(result);
//         },500)
//     }

// add(4,3,function(result1){
//     console.log('add result :', result1);
//     mul(result1, function(result2){
//         console.log('mul result :', result2);
//         sub(result2, function(result3){
//             console.log('sub result : ', result3);
//         })
//     })
// })

// // 2. 프로미스 체이닝이라면?

// function addPromise(n1, n2){
//     return new Promise(function(resolv, reject){
//         setTimeout(function(){
//             const result = n1 + n2;
//             resolv(result);
//         }, 1000);

//     })
// }
// function mulPromise(n){
//     return new Promise(function(resolv, reject){
//         setTimeout(function(){
//             const result = n*2;
//             // resolv(result);
//             reject('의도적으로');
//         },700);
//     })

// }
// function subPromise(n){
//     return new Promise(function(resolv){
//         setTimeout(function(){
//             const result =n - 1;
//             resolv(result);
//         },500)

//     })
// }

// addPromise(4,3).then(function(result1){
//     console.log('add result :', result1);
//     return mulPromise(result1);
// }).then(function(result2){
//     console.log('mul result :', result2);
//     return subPromise(result2);
// }).then(function(result3){
//     console.log('sub result :', result3);
// }).catch(function(err){
//     console.log(err);
// })


// 실습1 callback -> promise
// function call(name, cb){
//     setTimeout(function(){
//         console.log(name);
//         cb(name);
//     },1000);
// }
// function back(cb){
//     setTimeout(function(){
//         console.log('back');
//         cb('back')
//     },1000)
// }

// function hell(cb){
//     setTimeout(function(){
//         cb("callback hell");
//     },1000);
// }

// call('kim', function(name){
//     console.log(name+'반가워');
//     back(function(txt){
//         console.log(txt+'을 실행했구나');
//         hell(function(message){
//             console.log('여기는'+message);
//         });
//     });
// });

// 
function call(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(name);
            resolve(name);
        },1000);
    })
}
function back(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('back');
            resolve('back')
        },2000)
    })
}

function hell(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("callback hell");
        },1000);
    })
}

// call('minsu').then(function(A){
//     console.log(A + '반가워');
//     return back();
// }).then(function(B){
//     console.log(B+'을 실행했구나');
//     return hell();
// }).then(function(C){
//     console.log('여기는'+ C);
// })

// 화살표 함수 버전
// call('minsu').then((A) => {
//     console.log(A + '반가워');
//     return back();
// }).then((B) => {
//     console.log(B+'을 실행했구나');
//     return hell();
// }).then((C) => {
//     console.log('여기는'+ C);
// })

//  실습2 exec 함수를 만들어 실행
async function exec(){
    let user = await call('minsu');
    console.log(user + '님 환영합니다.');
    let useing = await back();
    console.log(useing+'을 실행했구나');
    let Hell = await hell();
    console.log(Hell);
}
exec();