import logo from '../logo.svg';
import './App.css';
import Card from '../components/Card'; // components 폴더의 Card를 호출

function App() {

  return (

    // 호출된 Card를 사용하는 법
    <div>
      <Card />
      <br />
      <Card />
    </div>
  );
}

export default App;
