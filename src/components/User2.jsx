import { useState } from 'react';
import '../apps/App.css';

export default function User(props) {
    const initUsers = [{id:1, name:'admin', email:'admin@human.com'}
    , {id:2, name:'james', email:'james@naver.com'}
    ]
    const [users, setUsers] = useState(initUsers);
    const [form, setForm] = useState({id: '', name: '', email: ''});
    const handleSubmit = (event) => {
        event.preventDefault(); // submit 버튼을 누르면 페이지가 바뀌는 것을 막음
        const user = users.find(val => val.id == form.id);
        if (user)
        {
            setUsers(users.map(u => (u.id == form.id) ? form : u))
        }
        else
        {
            setUsers([...users, form]);
        }
    }
    const handleChange = (event) => {
        const { name, value} = event.target; // input의 값을 가져옴
        setForm({...form, [name]: value}) // input의 값에 따라 form의 값 변경
    }
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
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>id: </label>
                <input type="text" id="id" name="id" value={form.id}
                onChange={handleChange}
                /> <br />
                <label htmlFor='name'>이름: </label>
                <input type="text" id="name" name="name" value={form.name}
                onChange={handleChange}
                /> <br />
                <label htmlFor='email'>이메일: </label>
                <input type="text" id="email" name="email" value={form.email}
                onChange={handleChange}
                /><br />
                <button>제출</button>
            </form>
        </div>
    );
}
