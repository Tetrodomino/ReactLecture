import logo from '../logo.svg';
import './App.css';

// 태그 이름은 대문자로 시작
function App() {

  // 내부에 자바스크립트 코드를 사용 가능
  const name = 'James';
  const foods = ['피자', '삼겹살', '불고기'];

  return (
    // return 내부에는 반드시 하나의 태그만 있어야 함
    /*
      ex)
      return (
        <tag1></tag1>
        <tag2></tag2>
      )
      이렇게 하면 오류 발생
        
      return (
        <div>
          <tag1></tag1>
          <tag2></tag2>
        </div>
      )
      이렇게 해야 됨
    */
    <div>
      <h1 style={{backgroundColor:"beige"}}>name: {name}</h1> {/* { } 를 사용하여 변수 사용*/}
      <hr />
      <img src="https://picsum.photos/200/200" className="photo" />
      <br />
      {/* <ul>
        {foods.map(food => {
          <li>{food}</li>
        })}
      </ul> */}
    </div>

    /*
      react에서 특정 태그를 닫는 법
      1. <hr></hr>
      2. <hr />
    */
  );
}

export default App;
