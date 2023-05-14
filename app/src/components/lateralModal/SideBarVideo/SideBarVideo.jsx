import React from "react";
import { FaTimes } from "react-icons/fa";
import ExemploDeThumb from "../../../images/Exemplo2.svg"

const SidebarVideo = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };
  return (
    <div className="VideoMenu" sideBarVideo={active}>
      <FaTimes size={"30px"} onClick={closeSidebar} className="FaTimes" />
      <div className="infosof">
      <h1>Página de teste de Funcionalidade</h1>
      <img
        src={ExemploDeThumb}
        alt="Thumb"
        width="350px"
      />
      <button className="buttonOfVideoPanel"> <a href="`/play/1">ASSISTIR</a> </button>
      <button className="buttonOfVideoPanel">AULAS</button>
      </div>
    </div>
  );
};

export default SidebarVideo;
