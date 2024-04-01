import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Board() {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/board/${text}`);

        setText('');
    }

    return (
        <div style={{margin: '20px'}}>
            Board page
            <form onSubmit={handleSubmit}>
                <input type="text" name="bid" value={text} placeholder="id 입력"
                onChange={e => {setText(e.target.value)}} />
            </form>
        </div>
    )
}