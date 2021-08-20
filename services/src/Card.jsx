import './App.css';
function Card(props){
    return (

        <div className="card">
        <img src={props.icon} alt=""/>
        <h3>{props.head}</h3>
        <p className="para">{props.para}</p>
        </div>
    );
}
export default Card;