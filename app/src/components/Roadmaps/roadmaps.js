import './roadmaps.css'
import programming from '../../img/programming.png'
import backend from '../../img/backend.png'
import ux from '../../img/ux.png'
import smartphone from '../../img/smartphone.png'
import scrum from '../../img/scrum.png'
import game from '../../img/game-console.png'

const Roadmaps = () => {
    return(
        <section className="roadmaps">
            <h3 className="roadmaps__titulo">Você pode escolher assistir </h3>
            <ul className="roadmaps__lista">
                <li className="roadmaps__item">
                    <p className="roadmaps__texto">Front-End</p>
                    <img src= {programming} className ="roadmaps__logo" alt="roadmaps__imagem "></img>
                </li>
                <li className="roadmaps__item">
                    <p className="roadmaps__texto">Back-End</p>
                    <img src= {backend} className ="roadmaps__logo" alt="roadmaps__imagem"></img>
                </li>
                <li className="roadmaps__item">
                    <p className="roadmaps__texto">UX & Design</p>
                    <img src={ux} className ="roadmaps__logo" alt="roadmaps__imagem"></img>
                </li>
                <li className="roadmaps__item">
                    <p className="roadmaps__texto">Mobile</p>
                    <img src= {smartphone} className ="roadmaps__logo" alt="roadmaps__imagem"></img>
                </li>
                <li className="roadmaps__item">
                    <p className="roadmaps__texto">Metodologias</p>
                    <img src= {scrum} className ="roadmaps__logo" alt="roadmaps__imagem"></img>
                </li>
                <li className="roadmaps__item">
                    <p className="roadmaps__texto">Games</p>
                    <img src= {game} className ="roadmaps__logo" alt="roadmaps__imagem"></img>
                </li>
            </ul>
        </section>
    )
}

export default Roadmaps;