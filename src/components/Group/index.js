import Card from '../Card'
import './Group.css'

function Group({ corSecundaria, corPrimaria, nome, itens }){
return(
    itens.length > 0 && <section className='group' style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ borderBottomColor: corPrimaria }}>{nome}</h3>
        <div className='groupup'>
         {itens.map(user => <Card nome={user.nome} cargo={user.cargo} imagem={user.imagem}/>)}
        </div>
    </section>
)
}

export default Group