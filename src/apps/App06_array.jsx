import { useState } from 'react';
import './App.css';

function App() {
  const [foods, setFoods] = useState(['피자', '삼겹살', '불고기']);

  return (
    <div className='card'>
      <ul>내가 좋아하는 음식</ul>
      {
        // 리액트에서 배열의 요소를 하나씩 출력하는 방법
        foods.map((food, idx) => (
          <li key={idx}>{food}</li>
        ))
      }
      <button onClick={() => {
        const item = prompt('좋아하는 음식 입력');
        setFoods([...foods, item]);
      }}>메뉴 추가</button>
    </div>
  );
}

export default App;
