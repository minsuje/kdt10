// 구조를 분해할당 : 구조를 분해해서 변수에 할당

// 1. 객체를 구조분해
const cookie = {
    choco: '초코맛',
    vanilla: '바닐라맛',
    mint: '민트맛'
};

console.log(cookie.choco);

// 구조 분해하기
const {mint, choco, vanilla} = cookie;
/*
const cookie = {
    choco : '초코맛',
    vanilla :  '바닐라맛',
    mint : '민트맛'
};
*/

console.log(choco);
console.log(vanilla);
console.log(mint);

// 2. 배열 구조분해
const arr = ['first', 'second'];
const [one,two] = arr;
// const [one, two] = ['first', 'second'];
console.log(one,two);
// const one = arr[0];
// const two = arr[1];