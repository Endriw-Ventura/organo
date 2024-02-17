import './Card.css'
import { AiFillCloseCircle } from 'react-icons/ai';

function Card({ nome, cargo, imagem, corPrimaria, deleteUser }){
    return(
    <div className='card'>
        <AiFillCloseCircle size={25} className='deletar' onClick={deleteUser}/>
        <div style={{ backgroundColor: corPrimaria }} className='cabecalho'>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>
                {nome}
            </h4>
            <h5>
                {cargo}
            </h5>
        </div>
    </div>    
    )
}

export default Card