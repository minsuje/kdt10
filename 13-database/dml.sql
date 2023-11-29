create table customer(
	custid char(10) primary key,
    custname varchar(10) not null,
    addr char(10) not null,
    phone char(11),
    birth date
);

desc customer;

insert into customer (custid, custname, addr, phone, birth) values('lucky', '강해원', '미국 뉴욕', '01010102020', '1999-01-01');

insert into customer (addr, custid, custname, phone, birth) values('대한민국 부산', 'happy', '이지은', '01010102020', '1999-01-01');

insert into customer (custid, custname, addr, phone, birth) values('apple', '이지은', '대한민국 광주', '01010102020', '1999-01-01');


-- 여러 튜플 동시에 추가

insert into customer values('banana', '바나나', '미국 뉴욕', '01010102020', '1999-01-01'),
('kiwi', '키위', '미국 뉴욕', '01010102020', '1999-01-01'),
('orange', '오렌지', '미국 뉴욕', '01010102020', '1999-01-01'),
('star', '김스타', '미국 뉴욕', '01010102020', '1999-01-01')  ;

-- select 조회

select * from customer;

select custid from customer;

drop table customer;

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('jisu', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');


-- where 조건
-- 비교: = , <>, <, <= , >, >=
-- 범위 : BETWEEN a AND B
-- 집합 : IN, NOT IN
-- 패던 : LIKE
-- NULL : IS NULL, IS NOT NULL
-- 복합 조건 : AND, OR, NOT

-- where
-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
select birth from customer where custname='강해린';

-- 고객 이름이 강해린이 아닌 고객의 생일
select birth from customer where custname!='강해린';

-- 사전순으로 박민지 보다 뒤에 위치한 모든 고객의 정보를 검색
select * from customer where custname > '박민지';


-- 범위
-- 1995년 이상 2000년 이하 출생 고객 검색
select * from customer where birth BETWEEN '1995-01-01' AND '2000-12-31';
select * from customer where birth >= '1995-01-01' AND birth <= '2000-12-31';

-- 집합 
-- 주소가 서울이거나 런던인 고객 검색
select * from customer where addr in ('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울' or addr = '영국 런던';

-- 주소가 서울이거나 런던이 아닌 고객
select * from customer where addr not in ('대한민국 서울', '영국 런던');


-- 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색 
select * from customer where addr like '미국 로스앤젤레스';

-- 주소가 '미국'이 포함되어 있는 고객
-- %: 0개 이상의 문자열을 의미
select * from customer where addr like '미국%';

-- 고객 이름에 두번째 글자가 '지'인 고객
-- _: 임의의 한글자 (하나의) 문자를 의미
select * from customer where custname like '_지%';
select * from customer where custname like '_지'; -- 형지

-- 고객 이름에 세번째 글자가 '수'인 고객 검색
select * from customer where custname like '__수%';
select * from customer where custname like '%수'; -- 이름이 몇자든, 마지막 글자가 '수'를 의미

-- 복합 조건(AND, OR, NOT)
-- 주소지가 대한민국이고 2000년생 이후 출생인 고객 검색
select * from customer where addr like '대한민국%' and birth >= '2000-01-01';
select * from customer where addr like '미국%' or addr like '영국%';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
select * from customer where phone not like '%4';


-- < order by >
-- order by [기준값]: default 값은 pk 기준으로 오름차순 정렬
select * from customer;
select * from customer order by custname;
select * from customer order by custname desc;

-- where 절과 order by 함께 사용하는 경우 ( 단, 이때 order by가 where보다 뒤에 있어야한다. )
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순
select * from customer where birth >= '2000-01-01' order by addr desc;

-- ordrt by를 where보다 앞에 사용하면 에러!!(포지션이 아니다)
-- select * from customer  order by addr desc where birth >= '2000-01-01';

-- 2000년생 이후 출생자 중에서 주소를 기준으로 오름차순, 아이디를 기준으로 내림차순 검색
-- 주소를 먼저 오름차순으로 놓고 그 상태에서 아이디를 내림 차순으로 검색
select * from customer where birth >= '2000-01-01' order by addr, custid desc;

-- <LIMIT>
-- 행의 개수를 제한
select * from customer limit 3;
select * from customer where birth >= '2000-01-01' limit 3;


-- customer 테이블과 관계를 같고 있는 order 테이블
-- 외래키 갖고 있게 만들 것

-- 외래키 제약 조건
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블 : 기본키를 갖고 있는 테이블 (customer)
-- 참조 테이블 : 외래키가 있는 테이블 (orders)
-- 형식 : FOREIGN KEY (열 이름) REFERENCES 기준 테이블(열 이름)
-- on update cascade : 기준 테이블의 데이터가 변경되면, 참조 테이블의 데이터도 변경된다.
-- on delete cascade : 기준 테이블의 데이터가 삭제되면, 참조 테이블의 데이터도 삭제된다.

create table orders(
	orderid int primary key auto_increment,
    custid char(10) not null, -- FK
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    FOREIGN KEY (custid) references customer(custid) on update cascade on delete cascade
);

-- 테이블을 삭제할 경우 삭제 순서!!!
-- customer table과 orders table은 custid를 기준으로 "관게" 를 맺음
-- customer table 존재하는 회원만 orders table에 데이터를 추가할 수 있음
-- 만약애 orders 테이블이 있는데, customer 테이블을 삭제(drop)하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에, 알 수X
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블 (참조 테이블) 먼저 삭제
-- (1) orders table 삭제 => (2) customer table 삭제

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- <집계 함수>
-- 계산하여 어떤 값을 리턴하는 '함수'
-- group by 절과 같이 쓰이는 케이스가 많음

select * from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색 + 의미 있는 열 이름으로 변경
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 삼품 최고가 검색
-- total_amount, avg_amount, min_price, max_price

select sum(amount) as 'total_amount', avg(amount) as 'avg_amount',
min(price) as 'min_price' , max(price) as 'max_price' from orders;
-- select min(price) as 'min_price' from orders;
-- select max(price) as 'max_price' from orders;

-- 주문 테이블에서 총 주문 건수(=orders 튜플 개수)
select count(*) from orders;

-- 주문 테이블에서 주문한 고객 수(중복 없이, distinct : 중복 제거)
select count(distinct custid) from orders;

-- < GROUP BY >
-- "~별로"
-- 고객 별로 주문한 주문 건수 검색
select custid, count(*) from orders group by custid;

-- 고객 별로 주문한 상품의 총 수량
select custid, sum(amount) from orders group by custid;

-- 고객 별로 주문한 주문한 총 주문액 구하기
select custid, sum(price * amount) from orders group by custid;

-- 상품별로 판매 개수 구하기
select prodname, sum(amount) from orders group by prodname;

-- < HAVING >
-- GROUP BY 절 이후에 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서, 고객별로 주문한 상품 총 수량을 구하기
select custid, sum(amount), sum(price * amount) from orders group by custid having sum(price*amount) >= 10000;

-- 위랑 동일한 조건 + 단, custid가 'bunny'인 고객은 제외
-- where + group by + having 모두 사용한 예시 ( 순서 주의 )
select custid, sum(amount), sum(price * amount) from orders 
where custid!='bunny' group by custid having sum(price*amount) >= 10000;

select custid, sum(amount), sum(price * amount) from orders group by custid 
having sum(price*amount) >= 10000 and custid != 'bunny';

-- where로 총 주문액 검사 ( err code 1111. 발생!! where절은 개별 행에 대한 조건을 검사함 )
select custid, sum(amount), sum(price * amount) from orders where sum(price*amount) >= 10000 group by custid;

-- GROUP BY 주의 사항
-- SELECT 절에서 GROUP BY 에서 사용한 속성과 집계함수만 사용 가능

/*
    where vs having

    having
    - 그룹에 대해서 필터림(그래서 group by 함께 쓰임)
    - group by 보다 뒤에 위치
    - 집계 함수랑 같이 사용가능

    where
    - 각각의 행을 필터링
    - group by 보다 앞에 위치
    - 집계 함수 사용 불가

*/

-- UPDATE
-- 수정 : update 테이블명 set 필드1=값1 where 필드2=조건2
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경
update customer set addr='대한민국 서울' where custid='happy';
select * from customer where custid='happy';


-- DELETE
-- 삭제 : delete from 테이블명 where 필드1=값1
-- custid가 happy인 고객의 정보를 테이블에서 삭제
delete from customer where custid='happy';

-- 고객 테이블에서 'kiwi' 고객을 삭제했을 때, 주문 테이블에서 'kiwi'고객의 주문 정보가 함께 삭제되는지?
delete from customer where custid='kiwi';

select * from orders;
select * from orders where custid='kiwi';

-- 실습3

create table user(
	id VARCHAR(10) not null PRIMARY KEY,
    pw VARCHAR(20) not null,
    name VARCHAR(5) not null,
    gender ENUM('F','M','') default '',
    birthday DATE not null,
    age int(3) not null default 0
);

desc user;

-- 실습 4

insert into user values('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', '33');
insert into user values('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', '31');
insert into user values('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', '53');
insert into user values('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', '39');
insert into user values('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', '47');
insert into user values('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', '22');
insert into user values('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', '24');

drop table user;

select * from user;

-- 실습 5

-- 1. 모든 회원목록을 가져오는데, 이때 birtday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오기
select * from user order by birthday;

-- 2. 회원 목록 중 gender 컬럼의 값이 'M'인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오기
select * from user where gender='M' order by name desc;

-- 3. 1990년대 태어난 회원 id, name 컬럼을 가져와 목록으로 보여주기
select id, name from user where birthday >= '1990-01-01' and birthday <= '1999-12-31';

-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오기
select * from user where birthday like '%-06-%' order by birthday;

-- 5. gender 컬럼의 값이 'M'이고, 1970년대에 태어난 회원의 목록을 가져오기
select * from user where gender='M' And birthday like '197%';

-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오기
select * from user order by age desc limit 3;

-- 7. 모든 회원 목록 중 나이가 25 이상 50이하 회원의 목록을 출력
select * from user where age >='25' and age <='50';
select * from user where age between 25 and 50;


-- 8. id 컬럼의 값이 hong1234인 레코드의 pw 컬럼의 값을 12345678로 변경
update user set pw='12345678' where id='hong1234';
select * from user where id='hong1234';

-- 9. id 컬럼의 값이 jungkrat인 레코드를 삭제하시오
delete from user where id='jungkrat';
select * from user where id='jungkrat';


-- JOIN
select * from customer, orders;

-- customer, order 테이블의 행 개수 구하기
select count(*) from customer; -- 14
select count(*) from orders; -- 16
select count(*) from customer, orders; -- 224 = 14*16
-- => cross join

-- 공통된 값만 가지고 오고 싶다.
-- where 절을 이용해서 조인 조건 추가
-- 테이블이름.속성 : 어느 테이ㅂㄹ의 속성인지 가르킴
-- INNER JOIN
select * from customer, orders where customer.custid = orders.custid;

select * from customer inner join orders on customer.custid = orders.custid;

select * from customer, orders where customer.custid = orders.custid order by customer.custname;

-- '고객 이름'과 고객이 주문한 '상품명', '상품 가격' 조회
select custname, prodname, price from customer, orders where customer.custid = orders.custid;
select custname, prodname, price from customer inner join orders on customer.custid = orders.custid;

-- 고객 이름별로 주문한 제품 총 구매액을 구매액 기준으로 오름차순 정렬
select custname, sum(price*amount) as 'total_amount' from customer inner join orders on customer.custid = orders.custid 
group by custname order by total_amount;


-- outer join
-- outer join은 공통된 부분만 결합하는 inner join과 다르게 공통되지 않은 row도 유지한다.
-- 이때 왼쪽 테이블의 row를 유지하면 LEFT OUTER JOIN,
-- 오른쪽 테이블의 row를 유지하면 RIGHT OUTER JOIN 이다.

-- teaches 테이블 생성
create table teaches(
	id int primary key,
    course varchar(7),
    semester varchar(7),
    year varchar(7)
);

create table instructor(
	id int primary key,
    name varchar(7),
    dept_name varchar(7),
    salaty int
);

insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');   
insert into teaches values (6, '알고리즘', '가을', '2023');

select * from instructor;

select * from teaches;

-- left outer join
select * from instructor I left outer join teaches T ON I.id = T.id;
select * from teaches T left outer join instructor I ON I.id = T.id;

-- right outer join
select * from instructor I right outer join teaches T ON I.id = T.id;
select * from teaches T right outer join instructor I ON I.id = T.id;
