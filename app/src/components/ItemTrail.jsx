import styled from "styled-components";
import {Link} from "react-router-dom";
export default function ItemTrail({ course }) {

    return (
        <Wrapper>
            <Link to={`/title/${ course.titleId }`}>
                <Label>{ course.nome }</Label>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  min-width: 150px;
  height: 250px;
  border: 1px solid red;
  cursor: pointer;
  background-color: #1B4669;
`

const Label = styled.p`
  color: white;
  width: 100%;
  text-align: center;
`
