// crypto => nodejs의 내장모듈, 설치 X
// 비밀번호가 있다는 가정하에 해쉬를 생성해보자
const crypto = require('crypto');

// 1. crypto "단방향" 암호화 구현
// createHash()
// : 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

// - password를 sha512 알고리즘 방식으로 암호화 하고,
// - base64방식으로 인코딩하여 리턴하는 함수 생성
const createHashedPW = (password) =>{
    // createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
    return crypto.createHash('sha512').update(password).digest('base64');
}

// 첫 번째, 두 번째 값은 같은 알고리즘 같은 값을 사용해서 동일한 해시 값 출력
// 세 번째 해시 값은 다른 값을 출력

// 해시 함수의 한계 : 레인보우 테이블
//  => 암호화된 비번을 빠르게 역추적해서 원본 비번을 찾아낼 수 있음
// console.log(createHashedPW('1234'));
// console.log(createHashedPW('1234'));
// console.log(createHashedPW('2345'));

// ==================================================
// 2. pdkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
// - 비밀번호 기반 키 도출 함수, 주로 비번 저장시 사용
// - buffer 형식의 데이터를 반환 -> toStrinf()을 이용해 문자열로 반환
// 솔트 값과 문자열을 기억해줘야 한다. (솔트는 매번 다른 값이 들어가기 때문에)

// 1. 단방향 암호화 생성 함수
// 1) 임의의 솔트 값을 생성
// 2) 해당 솔트와 제공된 비밀번호를 기반으로 해쉬를 생성
// 3) 생성된 솔트와 해쉬를 반환
function saltAndHashPW(password){
    const salt = crypto.randomBytes(16).toString('base64'); // 임의의 솔트 생성
    const iteration = 100; // 해시 함수를 반복할 횟수
    const keylen = 64; // 생성할 키의 길이
    const algorithm = 'sha512';

    // hash 생성 => salt랑 password를 결합하여 해시 생성
    const hash = crypto.pbkdf2Sync(password,salt,iteration,keylen,algorithm).toString('base64'); // buffer => String으로 변환

    return {salt, hash};
}

// 2. 암호를 비교할 함수 생성
// : inputPW = 제공된 비번, salt, hash를 기반으로 새로운 해시를 생성하고,
// 새로운 해시와 저장된 savedHash를 비교
// 제공된 비번이랑 원래 비번이 같으면 두 해시 값도 일치
function checkPW(inputPW, savedSalt, savedHash){
    const iteration = 100; // 해시 함수를 반복할 횟수
    const keylen = 64; // 생성할 키의 길이
    const algorithm = 'sha512';

    const hash = crypto.pbkdf2Sync(inputPW,savedSalt,iteration,keylen,algorithm).toString('base64');

    return savedHash === hash; // 같다면 true 반환, 다르면 false반환
}

// 사용 예제
const password = '1234!'

// 비번 암호화, 반환 값 받음
const {salt, hash} = saltAndHashPW(password);
console.log(`비번 암호화에 쓰인 salt는 ${salt}, 암호화 된 hash는 ${hash}`);

// 비빌번호 확인
const inputPW = '1234';
const isMatch = checkPW(inputPW,salt,hash); // true or false 반환
console.log(`비밀번호 일치 : ${isMatch}`);