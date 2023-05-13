
import React from 'react';
import { AiOutlineUser, AiOutlineSearch, AiFillStar, AiOutlinePlaySquare} from 'react-icons/ai';
import '../App.css';

function MainMenu() {
  return (
    <div className="MainMenu">
      <div className="Main-menu">
        <ul>
          <li>
            <a href="root"><AiOutlineUser /><span>Perfil</span></a>
          </li>
          <li>
            <a href="root"><AiOutlinePlaySquare /><span>Continuar Assistindo</span></a>
          </li>
          <li>
            <a href="root"><AiFillStar /><span>Favoritos</span></a>
          </li>
          <li>
            <a href="root"><AiOutlineSearch /><span>Busca</span></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;