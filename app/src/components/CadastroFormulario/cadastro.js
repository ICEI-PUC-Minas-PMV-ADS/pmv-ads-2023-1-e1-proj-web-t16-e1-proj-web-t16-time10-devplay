import CampoCadastro from '../CampoCadastro/campocadastro';
import './cadastro.css'

const Cadastro = () => {
    return (
        <div className='Cadastro'>
            <form className='CadastroFormulario' cadastro-form>
                <h2 className='CadastroFormularioCabecalho'>PREENCHA OS SEUS DADOS E INICIE A SUA JORNADA!</h2>
                <CampoCadastro label = "Nome" placeholder = "Digite aqui o seu nome" type = "text" minlenght = "8"/>
                <CampoCadastro label = "Email" placeholder = "Digite aqui o seu e-mail" type="email"/>
                <CampoCadastro label = "Senha" placeholder = "Digite aqui a sua senha" type="password" />
                <CampoCadastro label = "ConfirmaSenha" placeholder = "Confirme a sua senha" type="password" />
                <div className='CheckboxTermos'>
                    <input required classname="CheckboxInput" type = "checkbox"/>
                    <h2 className='CheckboxTituloTermos'>Eu aceito os termos de uso.</h2>
                </div>
                <div className='BotaoCadastro'>
                    <button classname="BotaoEnviarCadastro">
                        <h2 className='TextoBotaoCadastro'>FINALIZAR CADASTRO</h2>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Cadastro;