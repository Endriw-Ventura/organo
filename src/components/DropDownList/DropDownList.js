import './DropDownList.css'

function DropDownList(props){
    return(
       <div className='dropdownlist'>
        <label>
            {props.label}
        </label>
        <select value={props.valor} onChange={event => props.customEvent(event.target.value)}>
        {
            props.itens.map(item => <option key={item}>{item}</option>)
        }
        </select>
       </div>
    )
}

export default DropDownList