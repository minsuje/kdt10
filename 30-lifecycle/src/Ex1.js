import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Post() {
    const [visible, setVisible] = useState(true);
    const [postList, setPostList] = useState([]);
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => console.log(json));

    useEffect(() => {
        // api 이용
        // getPosts 함수 만든 이유 : useEffect 사용할 때 비동기 작업을 함수로 래핑한 다음 useEffect 에서 함수 호출
        const getPosts = async () => {
            const result = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            console.log(result);
            setPostList(result.data.slice(0, 100));
        };

        const time = setTimeout(() => {
            setPostList(fakePosts);
            setVisible(false);
        }, 2000);

        return () => {
            clearTimeout(time);
        };
    }, []);

    const fakePosts = [
        {
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
        },
        {
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
        },
        {
            id: 3,
            title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
        },
        {
            id: 4,
            title: 'eum et est occaecati',
            body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
        },
        {
            id: 5,
            title: 'nesciunt quas odio',
            body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque',
        },
        {
            id: 6,
            title: 'dolorem eum magni eos aperiam quia',
            body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
        },
        {
            id: 7,
            title: 'magnam facilis autem',
            body: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
        },
        {
            id: 8,
            title: 'dolorem dolore est ipsam',
            body: 'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
        },
        {
            id: 9,
            title: 'nesciunt iure omnis dolorem tempora et accusantium',
            body: 'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas',
        },
        {
            id: 10,
            title: 'optio molestias id quia eum',
            body: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
        },
    ];
    return (
        <>
            {visible ? (
                <h1>Loding...</h1>
            ) : (
                <div>
                    {postList.map((post) => (
                        <div key={post.id}>
                            <p>
                                No .{post.id} - {post.title}
                            </p>
                            <br />
                            <p>{post.body}</p> <br />
                            {/* {post.body.slice(0, 120)}... */}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
