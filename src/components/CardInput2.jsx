import { useState } from 'react';
import '../apps/App.css';

export default function CardInput2(props) {
  const [form, setForm] = useState({name:props.name, email:props.email});
  const handleSubmit = (event) => {
    event.preventDefault(); // submit 버튼을 누르면 페이지가 바뀌는 것을 막음
    console.log(form);
  }
  const handleChange = (event) => {
    const { name, value} = event.target; // input의 값을 가져옴
    setForm({...form, [name]: value}) // input의 값에 따라 form의 값 변경
  }
  return (
    // 버튼을 누르면 이름을 바꾸는 jsx
    <div className="card">
      <div style={{fontSize: '5rem'}}>{form.name}</div>
      <h3>{form.email}</h3>
      <br />
      <form onSubmit={handleSubmit}>
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
