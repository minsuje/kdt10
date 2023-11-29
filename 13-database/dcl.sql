
-- DCL
-- 사용자 권한 부여 명령어
-- GRANT permission_type on dbname.table_name TO username@host IDENTIFIED BY 'my_password' [with grant option]; 

-- 호스트: 로컬 호스트
-- *.* 모든 DB에 모든 테이블
-- grant all privileges on *.* to 'user'@'localhost' IDENTIFIED BY '4321' with grant option;

-- 권환 확인
show grants;


-- 1 . 계정 생성
create user 'user'@'localhost' identified by '4321';

select * from mysql.user; -- 현재 존재하는 계정을 확인할 수 있다.

flush privileges;

grant all privileges on *.* to 'user'@'localhost';

grant all privileges on *.* to 'root'@'%';

-- 권한을 주려 했지만 현재 root가 localhost로 되어 있어서 grant을 부여하는 기능을 사용할 수 없다.
-- 전체 권한을 가진 계정을 먼저 생성
create user 'user2'@'%' identified by '4321';

-- 권한 삭제
revoke privileges on *.* from 'user'@'localhost';

-- 계정 삭제
drop user 'user'@'localhost';

-- 계정 수정 (비밀번호 변경)
alter user 'user'@'localhost' identified by '1234';

-- 저장
flush privileges;