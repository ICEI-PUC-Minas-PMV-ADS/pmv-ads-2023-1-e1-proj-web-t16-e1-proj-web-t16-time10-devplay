import './container.css'
import icone__24__horas from '../../img/24-hours-support.png'
import buffer from '../../img/buffer.png'
import coding from '../../img/coding.png'


const Container = () => {
    return (
        <>
            <div className='container'>
                <div className="container__bloco">
                    <img src= {icone__24__horas} className="container__imagem"></img>
                    <p className="texto__container">Estude quando quiser</p>
                </div>
                <div className="container__bloco">
                    <img src= {buffer} className="container__imagem"></img>
                    <p className="texto__container">Estude no seu ritmo</p>
                </div>
                <div className="container__bloco">
                    <img src= {coding} className="container__imagem"></img>
                    <p className="texto__container">Evolua a sua jornada</p>
                </div>
            </div>    
        </>
    )
}

export default Container;