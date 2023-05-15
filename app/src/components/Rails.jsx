import ItemTrail from "./ItemTrail";
import styled from "styled-components";
export default function Trails({ courses }) {
    return (
        <>
            <h1>Front End</h1>
            <Wrapper>
                { Array.isArray(courses) && courses.map((course, index) =>
                    <ItemTrail
                        key={ index }
                        course={ course }
                    />
                )}
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 550px;
  overflow-x: scroll; /* Adiciona scroll horizontal */
  overflow-y: hidden; /* Esconde o scroll vertical */
`

