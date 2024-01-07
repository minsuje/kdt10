import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

function UseCallbackEx2({ postId }) {
    const [post, setPost] = useState({});

    // [before]
    // const getPost = async () => {
    //     console.log('data fetching ... ');
    //     // 데이터 요청
    //     const res = await axios.get(
    //         `https://jsonplaceholder.typicode.com/posts/${postId}`
    //     );
    //     // console.log(res);
    //     // console.log(res.data);
    //     setPost(res.data);
    // };

    // async function getPost() {
    //     console.log('data fetching ... ');
    //     // 데이터 요청
    //     const res = await axios.get(
    //         `https://jsonplaceholder.typicode.com/posts/${postId}`
    //     );
    //     // console.log(res);
    //     // console.log(res.data);
    //     setPost(res.data);
    // }

    // [after]
    // useCallback 훅으로 메모리제이션( 캐싱 ) => 의존성 배열에 있는 postId가 변경되지 않는한,
    // 함수는 다시 생성되지 않는다
    // postId만 바뀌기 때문에 []에 postId만 넣는다.
    const getPost = useCallback(async () => {
        console.log('data fetching ... ');
        // 데이터 요청
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        // console.log(res);
        // console.log(res.data);
        setPost(res.data);
    }, [postId]);

    // useEffect 의존성 배열에 '함수'
    // 컴포넌트가 리렌더링  => 함수 재생성 ( 주소값 변경 ) => getPost 재호출
    useEffect(() => {
        getPost();
    }, [getPost]);

    return (
        <>
            <h1>useCallback ex2</h1>
            {post.id ? post.title : '로딩중,,,'}
        </>
    );
}
export default UseCallbackEx2;
