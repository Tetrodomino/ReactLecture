//import '../apps/App.css';
import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { MdLibraryAdd } from "react-icons/md";
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export default function AddTodo({onAdd}) {  // 함수를 바로 불러오는 법
    const [text, setText] = useState('');
    const handleChange = (event) => setText(event.target.value);
    const handleSubmit = (event) =>  {
        event.preventDefault();
        if (text.trim().length === 0)
        {
            alert('비어있는 값은 넣을 수 없습니다');
            return;
        }
        onAdd({id: uuidv4(), work:text, status:'active'});
        setText('');
    }
    return (
        <div>
            <Form >
                <InputGroup onSubmit={handleSubmit} style={{marginTop: '20px'}}>
                    <Form.Control  placeholder='할 일 입력' value={text} onChange={handleChange}>

                    </Form.Control>
                    <Button><MdLibraryAdd /></Button>
                </InputGroup>
            </Form>
            {/* <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
                <input type='text' placeholder='할 일 입력' value={text} 
                    onChange={handleChange}
                />   
                <button><MdLibraryAdd /></button>
            </form>  */}
        </div>
    );
}