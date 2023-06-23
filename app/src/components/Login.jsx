import React, {useState} from 'react'
import LogoDevPlay from "../images/DevPlayLogo.svg"
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Login() {
  const [emailVerifie, setEmailVerifie] = useState()
  const [passwordVerifie, setPasswordVerifie] = useState()
  const [buttonON, setbuttonON] = useState(false)

  const verifieLoginInfos = () => {
    if (emailVerifie !== "" && passwordVerifie !== "") {
      setbuttonON(false)
    } else {
      setbuttonON(true)
    }
  }

  const emailVerifieChanges = (event) => {
    setEmailVerifie(event.target.value);
    verifieLoginInfos();
  }
  const passwordVerifieChanges = (event) => {
    setPasswordVerifie(event.target.value);
    verifieLoginInfos();
  }
  
  // const {loginVerification} = this.state;
  return (
    <LoginStyled>
          <img src={LogoDevPlay} alt="logo" width= "400px" />

      <LabelInfos>Username</LabelInfos>
      <InputLoginInfo type='text'placeholder='Username' value= {emailVerifie} onChange={emailVerifieChanges}/>

      <LabelInfos>Password</LabelInfos>
      <InputLoginInfo type='password' placeholder='Password' value={passwordVerifie} onChange={passwordVerifieChanges}/>
      <p>Esqueceu a senha?</p>
      <ButtonsLogin>

      <ButtonLogin type='get' disabled={buttonON}>
        <Link to="/mainpage" >
        Login
        </Link>
        </ButtonLogin>
      <ButtonLogin type='get'>Cadastre-se</ButtonLogin>
      </ButtonsLogin>
    </LoginStyled>
  )
}

export default Login

const LabelInfos = styled.label`
justify-content: space-between;
display: flex;
width: 300px
`

const InputLoginInfo = styled.input `
border-radius: 10px;
width: 300px;
height: 25px;
background-color: lightgray;
border: 1px solid #1696E0;
`
const ButtonLogin = styled.button`
background-color: lightgray;
color: black;
border-radius: 20px;
width: 100px;
height: 40px;
`

const ButtonsLogin = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 300px;

`

const LoginStyled = styled.div`
background-color: #076094;
color: white;
border: 2px solid black;
border-radius: 20px;
position: absolute;
aling-items: center;
opacity: 1;
display: flex;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
flex-direction: column;
align-items: center;
-webkit-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
-moz-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
padding: 20px;
`