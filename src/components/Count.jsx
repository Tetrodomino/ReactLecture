import '../apps/App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Count() {
    const [number, setNumber] = useState(1);

    const addCount = () => {
        if (number >= 10)
            setNumber(1);
        else
            setNumber(number + 1);
    }
    const resetCount = () => {
        setNumber(1)
    }
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {number}
            </h1>
            <div style={{display:'flex', justifyContent: 'center'}}>
                <Button variant="primary" onClick={addCount} style={{marginRight: 10}}>
                    증가시키기
                </Button>
                <Button variant="primary" onClick={resetCount} style={{marginLeft: 10, marginRight: 15}}>
                    리셋하기
                </Button>
            </div>
        </div>
    );
}