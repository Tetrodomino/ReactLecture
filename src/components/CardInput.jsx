import { useState } from 'react';
import '../apps/App.css';

export default function CardInput(procs) {
  const [name, setName] = useState(procs.name);
  const [content, setContent] = useState('');

  return (
    // 버튼을 누르면 이름을 바꾸는 jsx
    <div className="card">
      <div style={{fontSize: '5rem'}}>{name}</div>
      <h3>{content}</h3>
      <button onClick={() => {
        const newName = prompt('이름을 입력: ');
        setName(newName);
      }}>이름 바꾸기</button> <br />
      <input type="text" onChange={event => {
        setContent(event.target.value);
      }} />
    </div>
  );
}
