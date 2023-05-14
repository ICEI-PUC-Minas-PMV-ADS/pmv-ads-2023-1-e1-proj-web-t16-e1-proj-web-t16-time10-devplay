import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ExemploDeThumb from "../../../images/Exemplo2.svg"
import styled from "styled-components";

export default function SidebarVideo({ selectedCourse }) {

  return (
    <VideoMenu>
        <Link to={`/`}>
            <FaTimes
                size={"30px"}
                className="FaTimes"
            />
        </Link>

        <InfoOf>

            <InfoOfTitle>{ selectedCourse.nome }</InfoOfTitle>

            <InfoOfImages
                src={ExemploDeThumb}
                alt="Thumb"
                width="350px"
            />

            <p>{ selectedCourse.autor } - { selectedCourse.duracao }</p>
            <p>{ selectedCourse.descricao }</p>

            <ButtonOfVideoPanel className="buttonOfVideoPanel"> <a href="`/play/1">ASSISTIR</a> </ButtonOfVideoPanel>
            <ButtonOfVideoPanel className="buttonOfVideoPanel">AULAS</ButtonOfVideoPanel>
        </InfoOf>
    </VideoMenu>
  );
};

const VideoMenu = styled.div`
  background-color: #940F13;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  border-left: 1px solid #ddd;
  animation-name: painelOpen;
  animation-duration: 7s;
  animation-fill-mode: forwards; 

  @keyframes painelOpen {
    from {
      opacity: 0;
      width: 0px;
    }
    to {
      opacity: 1;
      width: 500px;
    }
  }

  @keyframes painelOpen {
    from {
      opacity: 0;
      width: 0px;
    }
    to {
      opacity: 1;
      width: 500px;
    }
  }
`

const InfoOf = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const InfoOfTitle = styled.h1`
text-align: center;
font-family: 'Roboto Serif', serif;
`

const InfoOfImages = styled.img`
border-radius: 10px;
  box-shadow: #E0DC16 5px 5px 10px 0px;
`

const ButtonOfVideoPanel = styled.button`
border: 4px solid white;
  background-color: #940F13;
  color: white;
  width: 350px;
  height: 40px;
  margin: 15px;
  border-radius: 7.50px;
  box-shadow: 0 0 5px #FFF, 0 0 15px #FFF, 0 0 30px #FFF;

  &hover: 
  animation-name: buttonOfPainel;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  color: white;

  @keyframes buttonOfPainel {
    0% {
      /* border: 2px; */
      border-color: #4FABE0 #0B92E0 #4FABE0 #3A7EA6;
      box-shadow: 0 0 5px #4FABE0, 0 0 15px #4FABE0, 0 0 30px #4FABE0;  
      border: 4px transparent #4FABE0 #0B92E0 #4FABE0 #3A7EA6;
    }
    25% {
      border-color:  #0B92E0 #4FABE0 #3A7EA6 #4FABE0;
      box-shadow: 0 0 5px #0B92E0, 0 0 15px #0B92E0, 0 0 30px #0B92E0;  
      border: 4px transparent #0B92E0 #4FABE0 #3A7EA6 #4FABE0;
    }
    50% {
      border-color:   #4FABE0 #3A7EA6 #4FABE0 #0B92E0;
      box-shadow: 0 0 5px #4FABE0, 0 0 15px #4FABE0, 0 0 30px #4FABE0;  
      border: 4px transparent #4FABE0 #3A7EA6 #4FABE0 #0B92E0;
    }
    75% {
      border-color:   #3A7EA6 #4FABE0 #0B92E0 #4FABE0;
      box-shadow: 0 0 5px #3A7EA6, 0 0 15px #3A7EA6, 0 0 30px #3A7EA6;  
      border: 4px transparent   #3A7EA6 #4FABE0 #0B92E0 #4FABE0;
    }
    100% {
      border-color: #4FABE0 #0B92E0 #4FABE0 #3A7EA6;
      box-shadow: 0 0 5px #4FABE0, 0 0 15px #4FABE0, 0 0 30px #4FABE0;  
      border: 4px transparent #4FABE0 #0B92E0 #4FABE0 #3A7EA6;
    }
  }
`

const ButtonTagA = styled.a`
text-decoration: none;
  color: white;
`
