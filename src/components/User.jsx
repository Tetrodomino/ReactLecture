import { useState } from 'react';
import '../apps/App.css';

export default function User(props) {
    const initUsers = [{id:1, name:'admin', email:'admin@human.com'}
    , {id:2, name:'james', email:'james@naver.com'}
    ]
    const [users, setUsers] = useState(initUsers);
    // const handleSubmit = (event) => {
    //     event.preventDefault(); // submit 버튼을 누르면 페이지가 바뀌는 것을 막음
    //     console.log(form);
    // }
    // const handleChange = (event) => {
    //     const { name, value} = event.target; // input의 값을 가져옴
    //     setForm({...form, [name]: value}) // input의 값에 따라 form의 값 변경
    // }
    return (
        // 버튼을 누르면 이름을 바꾸는 jsx
        <div className="card">
            <h1>사용자 목록</h1>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                }
            </table>
            <br />
            <button onClick={() => {
                const id = prompt('Id 값을 입력');
                const name = prompt('이름 값을 입력');
                const email = prompt('이메일 값을 입력');
                setUsers([...users, {id, name, email}]);
            }}>
                추가
            </button>
            {/* 리스트 내 항목 제거 */}
            <button onClick={() => {
                const id = prompt('Id 값을 입력');
                const newUsers = users.filter(user => user.id != id);
                setUsers(newUsers);
            }}>
                삭제
            </button>
        </div>
    );
}
