import './campocadastro.css' 

const CampoCadastro = (props) => {
    return (
        <div className='CadastroControle'>
            <label className='campocadastroformulario' {...props.nome} />
            <input required className='inputcadastrocontrole' placeholder = {props.placeholder} type = {props.type} minlenght = {props.minlenght}/>
        </div>
    )
}

export default CampoCadastro;