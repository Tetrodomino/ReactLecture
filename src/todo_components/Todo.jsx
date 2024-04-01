import {FaRegTrashAlt} from "react-icons/fa";
import {ListGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default function Todo({todo, onUpdate, onDelete}) { 
    const {id, work, status} = todo;
    
    const handleChange = event => {
        const status = event.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }

    const handleDelete = () => onDelete(todo);
    return (
        <ListGroup.Item >
            <Row>
                <Col sm={8} className="listtext">
                    <label class='labeltop' htmlFor={id}>{work}</label>
                </Col>
                <Col sm={2} className="listmember"> 
                    <input type='checkbox' id={id} checked={status === 'completed'}
                    onChange={handleChange} />
                </Col>
                <Col sm={2} className="listmember">
                    <Button size="sm" onClick={handleDelete}><FaRegTrashAlt /></Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}