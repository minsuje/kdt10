import React, { useState } from 'react';
import { useRef } from 'react';
import './Ex2.css';

export default function Ex2() {
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [table, setTable] = useState([]);
    //실습 4
    const [search, setSearch] = useState(true);
    const [searchType, setSearchType] = useState('writer');
    const [input, setInput] = useState();
    const [searchResult, setSearchResult] = useState([]);

    const newOne = () => {
        // if(refFocus1.current.value === '') return refFocus1.current.focus();
        if (writer.trim().length === 0) {
            refFocus1.current.focus();
            return;
        }
        // if(refFocus2.current.value === '') return refFocus2.current.focus();
        if (title.trim().length === 0) {
            refFocus2.current.focus();
            return;
        }
        // if (!title) {
        //     refFocus1.current.focus();
        // }
        const newBook = table.concat({
            writer: writer,
            title: title,
        });

        setTable(newBook);

        setWriter('');
        setTitle('');
    };

    const keyDown = (e) => {
        if (e.key === 'Enter') {
            newOne();
        }
    };

    // 실습 4
    const find = () => {
        const result = table.filter((value) => {
            // value[searchType] key값
            return value[searchType].include(input);
        });
        if (result) {
            setSearch(!search);
        }
        setSearchResult(result);
    };

    // 12시 실습
    const refFocus1 = useRef();
    const refFocus2 = useRef();

    const handleFocus = () => {
        refFocus1.current.focus();
    };
    const handleFocus2 = () => {
        refFocus2.current.focus();
    };

    return (
        <>
            <div className="inputBox">
                작성자 :{' '}
                <input
                    type="text"
                    placeholder="작성자"
                    onChange={(e) => setWriter(e.target.value)}
                    onClick={handleFocus}
                    ref={refFocus1}
                    onKeyDown={keyDown}
                />
                제목 :{' '}
                <input
                    type="text"
                    placeholder="제목"
                    onChange={(e) => setTitle(e.target.value)}
                    onClick={handleFocus2}
                    ref={refFocus2}
                    onKeyDown={keyDown}
                />
                <button onClick={newOne}>작성</button>
            </div>

            <div className="search">
                <select onChange={(e) => setSearchType(e.target.value)}>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>

                <input
                    style={{ width: '500px' }}
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                />

                <button onClick={find}>검색</button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                {table.map((value, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{value.writer}</td>
                            <td>{value.title}</td>
                        </tr>
                    </tbody>
                ))}
            </table>

            <div>
                <h4>{search ? '검색결과가 없습니다' : '검색결과'}</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    {searchResult.map((value, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{value.writer}</td>
                                <td>{value.title}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
}
