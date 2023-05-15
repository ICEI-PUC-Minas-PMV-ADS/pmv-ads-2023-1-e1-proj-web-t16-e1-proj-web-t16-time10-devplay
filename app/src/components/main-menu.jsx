import { AiOutlineUser, AiOutlineSearch, AiFillStar, AiOutlinePlaySquare} from 'react-icons/ai';
import styled from "styled-components";

export default function MainMenu({ menuVisibility }) {
  return (
    <>
      <Wrapper className={ menuVisibility ? "" : "activated" }>
        <List>
          <Item>
            <Anchor href="root"><AiOutlineUser /><span>Perfil</span></Anchor>
          </Item>
          <Item>
            <Anchor href="root"><AiOutlinePlaySquare /><span>Continuar Assistindo</span></Anchor>
          </Item>
          <Item>
            <Anchor href="root"><AiFillStar /><span>Favoritos</span></Anchor>
          </Item>
          <Item>
            <Anchor href="root"><AiOutlineSearch /><span>Busca</span></Anchor>
          </Item>
        </List>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #E0DC16;
  width: 200px;
  height: 100vh;
  padding: 20px;
  position: absolute;
  top: 70px;
  left: 0;

  &.activated {
    left: -250px;
  }
`

const List = styled.ul `
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  margin-bottom: 10px;
`

const Anchor = styled.a`
  color: #1696E0;
  text-decoration: none;
  
  :hover {
    color: #E10109;
  }
`
