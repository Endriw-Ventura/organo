import './Formulario.css'
import TextField from '../TextField'
import DropDownList from '../DropDownList/DropDownList'
import Button from '../Button/Button'
import { useState } from 'react'

function Formulario(props){

const itens = [
    'Programação',
    'UX & Design',
    'Data Science',
    'Front-End',
    'Back-End',
    'Mobile',
    'DevOps',
    'Inovação & Gestão'
]

//hooks
const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')

function onSave(event){
    event.preventDefault();
    props.createUser({
        nome,
        cargo,
        imagem,
        time
    })
}

    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>
                    Preencha os dados para criar o card do colaborador:
                </h2>
                
                <TextField 
                valor = {nome}
                customEvent={valor => setNome(valor)}
                label='Nome' 
                placeholder='Digite o seu nome'/>

                <TextField 
                valor = {cargo}
                customEvent={valor => setCargo(valor)}
                label='Cargo' 
                placeholder='Digite o seu cargo'/>

                <TextField 
                valor = {imagem}
                customEvent={valor => setImagem(valor)}
                label='Imagem' 
                placeholder='Informe a URL da imagem'/>

                <DropDownList
                valor={time}
                customEvent={valor => setTime(valor)}
                label='Time' 
                itens={itens}/>

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Formulario