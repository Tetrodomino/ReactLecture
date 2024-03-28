import './App.css';
import Card from '../components/Card2'; // components 폴더의 Card를 호출

function App() {
  const james = {id: 1, name: 'James', job: 'Back-end programmer'};
  const maria = {id: 2, name: 'Maria', job: 'React JS programmer'};

  return (
    // 호출된 Card를 사용하는 법
    <div>
      <Card person={james} />
      <br />
      <Card person={maria} />
    </div>
  );
}

export default App;
