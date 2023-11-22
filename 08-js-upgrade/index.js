// 구조분해 할당

//  1. 배열 구조분해할당
//  순서가 중요함

const arr1 = [1,2,3,4,5];
const arr2 = ['a','b','c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [x,y,z,alpha] = arr2;
console.log(x,y,z,alpha); //alpha는 값이 없다. undefined

const list = ['apple', 'orange'];
const [f1,f2,f3 = 'bannana'] = list
console.log(f1,f2,f3);

let num1 =1, num2 = 3;
console.log('swap 전 >' ,num1,num2);
[num1, num2] = [num2, num1]; // [num1, num2] = [3, 1]
console.log('swap 후 >' ,num1,num2);


//  2. 객체 구조분해 할당
// - 키값과 변수명이 일치
const obj = {
    title : '독전2',
    star : 1,
    content: '제발보지마라,,,'
}

// 구조 분해를 안했다면
console.log(obj.title, obj.star, obj.content);

// 키가 존재하지 않는 경우 대비하여 default값 할당(price = 1000)
const{content, star, title, price = 1000} = obj;
console.log(content,star, title, price);

// 객체 구조분해는 키 값이 중요하다
const {c, s, t} = obj;
console.log(c,s,t); //undefined

//콜론 (:)을 이용해서 새 변수명으로 바꿔서 저장 가능
const {content: c1, star:s1, title: t1} = obj;
console.log(c1,s1,t1);

// -----------------------예시----------------
const info = {
    name: 'web-fullstack',
    time: '5hours',
    content: '배고파,,'
}

function getInfo(lecture){
    // 구조분해할당 사용하여 값 추출
    console.log(lecture)
    const {name, time, content } = lecture;
    // 출력 문장 생성
    const output = `${name} 강의는 ${time}시간에하고 ${content}`
    // 출력 문장 리턴
    return output;
}

const result = getInfo(info);
console.log(result);

// -----------------------------
// 단축 평가
// &&, ||
// A && B : 두 개의 피연산자 모두 true면 true 반환
// A || B : 두 개의 피연산자 중 하나만 true여도 true 반환

console.log(true && true);//true
console.log(false && true); //false


console.log(true || true);//true
console.log(true || false);//true

// &&(논리곱)
const v1 = 5;
const v2 = 7;

// 앞에 값 && 이 treu면은 뒤에 값이 나온다,
const result2 = v1 > v2 && 'v1이 큼'; //false
console.log(result2);

const result3 = v1 < v2 && 'v2가 큼'; //true
console.log(result3);

// || (논리합)
// 앞에 값이 true 여서 뒤에는 검사하지 않음
const result4 = v1 || 100;
console.log(result4); //5

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름x'); //홍길동
console.log(nameEx2 || '이름x'); // 이름x

