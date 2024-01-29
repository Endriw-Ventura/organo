import './TextField.css'

function TextField(props){
    return(
        <div className='textfield'>
            <label> {props.label} </label>
            <input value={props.valor} onChange={event => props.customEvent(event.target.value)} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField