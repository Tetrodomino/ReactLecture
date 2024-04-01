import {useState} from 'react';
import './App.css';
import Header from '../todo_components/Header';
import TodoList from '../todo_components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody } from 'react-bootstrap';

/* 
  파일 읽기
*/
function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');

  return (
    <div className='card'>
      <Card.Header>
        <Card.Title></Card.Title>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      </Card.Header>
      <Card.Body>
        <TodoList filter={filter} />
      </Card.Body>
    </div>
  );
}

export default App;
