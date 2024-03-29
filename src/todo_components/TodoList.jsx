import '../apps/App.css';
import { useEffect, useState } from 'react';

import {v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';
import Todo from './Todo';


export default function TodoList({filter}) { 
    const initData = readFromLocalStorage();
    const [todos, setTodos] = useState(initData);


    // todos의 요소들을 찾아서 update의 id와 같은 것을 찾아 해당 요소를 update로 교체
    const handleUpdate = (update) => 
    setTodos(todos.map(todo => (todo.id === update.id) ? update : todo) );

    // deleted와 id가 같지 않은 것만 남기고 나머지는 삭제
    const handleDelete = (deleted) => setTodos(todos.filter(todo => todo.id !== deleted.id));

    const handleAdd = todo => setTodos([...todos, todo]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const filteredTodos = getFilteredTodos(todos, filter);
  
    return (
        <div>
            <ul>
                {
                    filteredTodos.map(todo => (
                        <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))
                }
            </ul> 
            <AddTodo onAdd={handleAdd}/>        
        </div>
    );
}

function readFromLocalStorage() {
    const todos = localStorage.getItem('todos');
    console.log(todos);
    return todos ? JSON.parse(todos) : [];
}

function getFilteredTodos(todos, filter) {
    if (filter === 'all')
        return todos;
    return todos.filter(todo => todo.status === filter);
}