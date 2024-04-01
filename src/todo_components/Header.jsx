//import '../apps/App.css';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';


export default function Header({filters, filter, onFilterChange}) { 
    return (
        <header>
            <ButtonGroup aria-label='Basic example'>
                {
                    filters.map((value, index) => (
                        <Button key={index} variant="secondary" onClick={() => onFilterChange(value)}>
                            {value}
                        </Button>
                    ))
                }
            </ButtonGroup>
            <hr />
        </header>
    );
}