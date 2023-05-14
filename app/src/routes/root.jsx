import Trails from "../components/Rails";
import LogoDevPlay from "../images/DevPlayLogo.svg"
import { FaBars} from 'react-icons/fa'
import { FiUser } from 'react-icons/fi';
import courses from "../data/courses.json";
import styled from "styled-components";

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #076094;
  align-items: center;
`
export default function Root() {
    return (
        <>
            <TopBar>
                <FaBars size= "20px" />

                <img
                    src={ LogoDevPlay }
                    alt="Logo"
                    width= "150px"
                />

                <FiUser size= "20px" />
            </TopBar>

            <main>
                <Trails courses={ courses } />
            </main>
        </>
    );
}
