import { useState } from 'react';
import './App.css';

function App() {
  // 변수를 그냥 증가시키면 실제 창에서는 반영되지 않으므로
  // 변수 증가를 창에 변경시켜면 useState 방식이 필요
  const [count, setCount] = useState(0); // count가 원래 변수, setCount는 count를 설정해주는 함수
  const [numbers, setNumbers] = useState([]);
  const handleClick = () => {
    setCount(count + 1);
    let newNumbers = [...numbers, count + 1];
    setNumbers(newNumbers);
    // setNumbers(numbers.push(count+1)); 
    console.log(count);
  }

  return (
    <div>
      <div style={{fontSize: '5rem'}}>{count}</div>
      <h3>{numbers}</h3>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}

export default App;
