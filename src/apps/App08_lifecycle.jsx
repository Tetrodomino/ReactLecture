import {useEffect, useState} from 'react';
import './App.css';


/* 
  파일 읽기
*/
function App() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleFile = () => {
    fetch('data/products.json')
      .then(res => res.json()) // JSON을 parsing(문자열을 분해하여 tree를 만듦)
      .then(data => {
        console.log('데이터를 네트워크에서 받아옴');
        console.log(data);
      });
    }
    useEffect(() => {
      fetch('data/products.json')
        .then(res => res.json())
        .then(data => {
          console.log('데이터를 네트워크에서 받아옴');
          console.log(data);
          setProducts(data);
        });
      return () => {
        console.log('사라질 때 마지막으로 실행되는 코드')
      }
    }, [checked]); // [] 안에 checked(boolean) 를 넣으면 발동 방식 조절
  return (
    <div className='card'>
      <ul>프로덕트 목록
      {
        products.map((product, index) => {
          <li key={index}>{product}</li>
        })
      }
      </ul>
      <button onClick={handleFile}>파일 읽기</button>
    </div>
  );
}

export default App;
