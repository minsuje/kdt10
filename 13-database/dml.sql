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

