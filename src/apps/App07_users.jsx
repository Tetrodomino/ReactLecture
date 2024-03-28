import { useState } from 'react';
import './App.css';
import User from '../components/User';
import User2 from '../components/User2';

/*
  유저 관리
*/
function App() {
  const [foods, setFoods] = useState(['피자', '삼겹살', '불고기']);

  return (
    <div className='card'>
      <User />
      <br />
      <User2 />
    </div>
  );
}

export default App;
