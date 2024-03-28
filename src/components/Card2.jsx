import '../apps/App.css';

export default function Card2(props) { // File 이름과 동일해야 함
    return (
        <div className="card">
            <h1 style={{backgroundColor:"beige"}}>name: {props.person.name}</h1> 
            <hr />
            <img src={`https://picsum.photos/200/200?q=${props.person.id}`} className="photo" />
            <br />
            <h3>job: {props.person.job}</h3>
        </div>
    );
}