import {useState} from 'react';
import './App.css';
import Header from '../todo_components/Header';
import TodoList from '../todo_components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

/* 
  파일 읽기
*/
function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');

  return (
    <div className='card' id='backgroundcard'>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
