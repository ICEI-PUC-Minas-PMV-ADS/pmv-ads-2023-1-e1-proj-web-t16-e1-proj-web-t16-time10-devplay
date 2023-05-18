import Trails from "../components/Rails";
import MainMenu from "../components/main-menu";
import LogoDevPlay from "../images/DevPlayLogo.svg"
import { FaBars} from 'react-icons/fa'
import { FiUser } from 'react-icons/fi';
import courses from "../data/courses.json";
import styled from "styled-components";
import SidebarVideo from "../components/Sidebar";
import { useLoaderData } from "react-router-dom";
import {useState} from "react";
import Banner from "../components/Banner/banner.js";
import Container from "../components/Container/container";
import Roadmaps from "../components/Roadmaps/roadmaps";
import SeparadorSecao from "../components/SeparadorSecao/separador";
import Cadastro from "../components/CadastroFormulario/cadastro";

export async function loader({ params }) {
    const selectedCourse = courses.find(course => course.titleId === parseInt(params.titileId));
    return { selectedCourse }
}
export default function Root() {
    const [menuVisibility, setMenuVisibility ] = useState(false);
    const { selectedCourse } = useLoaderData() || {};

    return (
        <>
            <TopBar>
                <FaBars
                    size= "20px"
                    onClick={ ()=> setMenuVisibility(!menuVisibility) }
                />

                <img
                    src={ LogoDevPlay }
                    alt="Logo"
                    width= "150px"
                />

                <FiUser size= "20px" />
            </TopBar>

            <main>
                <MainMenu menuVisibility={ menuVisibility } />
                <Trails courses={ courses } />
            </main>

            { selectedCourse &&
                <SidebarVideo selectedCourse={ selectedCourse } />
            }

            <banner>
                <Banner />
            </banner>

            <container>
                <Container />
            </container>
            
            <roadmaps>
                <Roadmaps />
            </roadmaps>

            <separadorsecao>
                <SeparadorSecao />
            </separadorsecao>
            
            <cadastro>
                <Cadastro />
            </cadastro>
        </>
    );
}

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #076094;
  align-items: center;
`
