// 클래스
// : 객체를 생성하는 템플릿 => 객체를 만들기 위해 사용

// 집 이라는 클래스
/*
    속성 :
    만들어진 연도, 집의 이름, 창문 갯수
    메소드:
    창문 갯수 출력하는 메소드, 집의 이름 출력하는 메소드 등
*/

// 클래스 정의
class House {
    // 생성자 함수를 사용
    // : 클래스를 이용해 객체를 생성할 때만다 속성을 초기화
    constructor(year, name, window){
        this.year = year;
        this.name = name;
        this.window = window;
    }

    //메소드 1 : 집의 나이를 출력
    getAge(){
        console.log(`${this.name}는 건축한지 ${2023 - this.year}년 됐다!`);
    }

    //  메소드 2 : 창문 갯수 출력
    getWindow(){
        console.log(`${this.name}의 창문 갯수는 ${2023 - this.window}개다!`);
    }
}

// 클래스(틀)을 이용해서 객체를 만들기
const house1 = new House(2010, '아파트', '10');
console.log('house1 > ', house1);
console.log(house1.name);
house1.getAge();

const house2 = new House(2012, '빌라', 20);
house2.getAge();

// 실습
class Shape {
    constructor(width, heigth){
        this.width = width;
        this.heigth = heigth;
    }

    getArea(){
        return this.width * this.heigth;
    }
}
let rec1 = new Shape(3,4)
console.log(rec1.getArea());


// 3. 클래스 상속
// 부모 클래스 : House
// 자식 클래스 : Apartment
class Apartment extends House{
    constructor(year, name, window, floor){
        // 부모 객체에서 상속받음 => 상속받은 부모 클래스의 생성자를 호출
        super(year, name, window);// 부모로 부터 받은애는 super()를 사용해서 표시
        this.floor = floor;
    }
    getFloor() {
        return `${this.year}년에 지어진 ${this.name}아파트의 총 층수는 ${this.floor}`;
    }

    // 오버라이딩
    // 부모 클래스에 정의되어 있는 메소드를 이름은 동일하게 쓰되, 내용은 다르게
    getAge(){
        console.log(`${2023 - this.year}년된 아파트는 총 ${this.floor}층이다~!`)
    }
}

const apt1 = new Apartment(2022, '레미안', 100, 30);
console.log(apt1);
apt1.getAge();
console.log(apt1.getFloor());
// apt1.getFloor();

class Rectangle extends Shape{
    constructor(width, heigth){
        super(width, heigth);
        // diagonal
    }

    getDia(){
        return Math.sqrt((this.width)*(this.width)) + Math.sqrt((this.heigth)*(this.heigth)); 
    }
}
let math1 = new Rectangle(10, 10);
console.log(math1.getArea()); //넓이
console.log(math1.getDia()); //대각선

class Triangle extends Shape {
    constructor(width, heigth, ){
        this.Area1 = Area1;
        this.Area2 = Area2;
        this.Area3 = Area3;
    }


}