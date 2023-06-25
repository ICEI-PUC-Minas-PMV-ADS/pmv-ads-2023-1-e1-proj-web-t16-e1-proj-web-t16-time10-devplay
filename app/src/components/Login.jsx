import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoDevPlay from "../images/DevPlayLogo.svg"
import programming from "../images/programming.png"
import backend from "../images/backend.png"
import GameConsole from "../images/game-console.png"
import scrum from "../images/scrum.png"
import mobile from "../images/smartphone.png"
import ux from "../images/ux.png"
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const LoginForm = ({ onSwitchForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar se o email e a senha estão corretos
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      alert('Login realizado com sucesso!');
      navigate('/mainpage');
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  return (
    <LoginStyled>
      <FormLogin onSubmit={handleSubmit}>

        <HLogin>Login</HLogin>
        <div>
          <LabelInfos>Email</LabelInfos>
          <InputLoginInfo
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <LabelInfos>Senha</LabelInfos>
          <InputLoginInfo
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <ButtonLogin type='submit'>
          Login
        </ButtonLogin>
        <ALternateLogin>
          Não tem uma conta?{' '}
          <ButtonAlternate type="button" onClick={onSwitchForm}>
            Cadastrar
          </ButtonAlternate>
        </ALternateLogin>
      </FormLogin>
      <LateralInfosLogin>
        <LogoIMg src={LogoDevPlay} alt="logo" width="400px" />
        <HLateral>Acesse agora e descubra uma infinidade de cursos para dar a ignição na sua carreira</HLateral>
        <DivListLateral>
          <ul>
            <LILateral><img src={programming} alt='erro' width={"35px"} />Front-end</LILateral>
            <LILateral><img src={backend} alt='erro' width={"35px"} />Back-end</LILateral>
            <LILateral><img src={mobile} alt='erro' width={"35px"} />Mobile</LILateral>
          </ul>
          <ul>
            <LILateral><img src={scrum} alt='erro' width={"35px"} />Scrum</LILateral>
            <LILateral><img src={GameConsole} alt='erro' width={"35px"} />Game Develop</LILateral>
            <LILateral><img src={ux} alt='erro' width={"35px"} />UX</LILateral>
          </ul>
        </DivListLateral>
        <h1>Let`s code together</h1>
      </LateralInfosLogin>
    </LoginStyled>
  );
};

const LogoIMg = styled.img`
position: absolute;
top: -8%;
`

const LILateral = styled.li`
display: flex;
    text-align: center;
    align-items: center;
    padding: 10px;
    `

const DivListLateral = styled.div`
display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 400px;
    height: 20vh;
`

const HLateral = styled.h2`
text-align: center;
`

const HLogin = styled.h2`
color: black;
`

const LateralInfosLogin = styled.div`
background-color: white;
height: 60vh;
color: black;
width: 30%;
border: 2px solid black;
// border-radius: 20px;
position: absolute;
aling-items: center;
opacity: 1;
display: flex;
position: fixed;
top: 18%;
justify-content: center;
left: 18%;
// transform: translate(-50%, -50%);
flex-direction: column;
align-items: center;
// -webkit-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
// -moz-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
// box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
padding: 20px;
`

const LoginStyled = styled.div`
background-color: #076094;
height: 60vh;
color: white;
width: 30%;
border: 2px solid black;
// border-radius: 20px;
position: absolute;
aling-items: center;
opacity: 1;
display: flex;
position: fixed;
top: 18%;
justify-content: center;
left: 50%;
// transform: translate(-50%, -50%);
flex-direction: column;
align-items: center;
// -webkit-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
// -moz-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
// box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
padding: 20px;
`

const ALternateLogin = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const LabelInfos = styled.label`
  justify-content: space-between;
  display: flex;
  width: 300px;
  color: black;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputLoginInfo = styled.input`
  border-radius: 10px;
  width: 300px;
  height: 25px;
  background-color: lightgray;
  border: 1px solid #1696e0;
`;

const ButtonLogin = styled.button`
  background-color: lightgray;
  color: black;
  border-radius: 20px;
  width: 100px;
  height: 33px;
  font-size: 15px;
`;

const ButtonAlternate = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: lightgray;
  color: black;
  border-radius: 20px;
  width: 100px;
  height: 33px;
  font-size: 15px;
  align-items: center;
`;

const RegisterForm = ({ onSwitchForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar se o email e a senha possuem os caracteres necessários
    if (email.length >= 5 && password.length >= 6) {
      localStorage.setItem('name', name); // Salvar o nome no localStorage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Email ou senha inválidos!');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isFormValid = email !== '' && password !== '';

  return (
    <RegisterDivMain>
      <RegisterStyled>
        <FormRegister onSubmit={handleSubmit}>
          <HLogin>Cadastro</HLogin>
          <div>
            <LabelInfosRegister>Nome</LabelInfosRegister>
            <InputRegisterInfo type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <LabelInfosRegister>Email</LabelInfosRegister>
            <InputRegisterInfo type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <LabelInfosRegister>Senha</LabelInfosRegister>
            <InputRegisterInfo
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <ButtonRegister type="submit" disabled={!isFormValid}>
            Cadastrar
          </ButtonRegister>
          <ALternateRegiter>
            Já tem uma conta?{' '}
            <ButtonAlternateRegister type="button" onClick={onSwitchForm}>
              Fazer login
            </ButtonAlternateRegister>
          </ALternateRegiter>
        </FormRegister>
      </RegisterStyled>
      <LateralInfosRegister>
        <LogoIMg src={LogoDevPlay} alt="logo" width="400px" />
        <HLateral>Acesse agora e descubra uma infinidade de cursos para dar a ignição na sua carreira</HLateral>
        <DivListLateral>
          <ul>
            <LILateral><img src={programming} alt='erro' width={"35px"} />Front-end</LILateral>
            <LILateral><img src={backend} alt='erro' width={"35px"} />Back-end</LILateral>
            <LILateral><img src={mobile} alt='erro' width={"35px"} />Mobile</LILateral>
          </ul>
          <ul>
            <LILateral><img src={scrum} alt='erro' width={"35px"} />Scrum</LILateral>
            <LILateral><img src={GameConsole} alt='erro' width={"35px"} />Game Develop</LILateral>
            <LILateral><img src={ux} alt='erro' width={"35px"} />UX</LILateral>
          </ul>
        </DivListLateral>
          <h1>Let`s code together</h1>
      </LateralInfosRegister>
    </RegisterDivMain>
  );
};

const RegisterDivMain = styled.div`
display:flex;
`


const LateralInfosRegister = styled.div`
background-color: white;
height: 60vh;
color: black;
width: 30%;
border: 2px solid black;
// border-radius: 20px;
position: absolute;
aling-items: center;
opacity: 1;
display: flex;
position: fixed;
top: 18%;
justify-content: center;
left: 50%;
// transform: translate(-50%, -50%);
flex-direction: column;
align-items: center;
// -webkit-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
// -moz-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
// box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
padding: 20px;
`

const RegisterStyled = styled.div`
background-color: #076094;
height: 60vh;
color: white;
width: 30%;
border: 2px solid black;
// border-radius: 20px;
position: absolute;
aling-items: center;
opacity: 1;
display: flex;
position: fixed;
top: 18%;
justify-content: center;
left: 18%;
// transform: translate(-50%, -50%);
flex-direction: column;
align-items: center;
// -webkit-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
// -moz-box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
// box-shadow: 10px 10px 8px -1px rgba(0,0,0,0.37);
padding: 20px;
`

const ALternateRegiter = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const LabelInfosRegister = styled.label`
  justify-content: space-between;
  display: flex;
  width: 300px;
  color: black;
`;

const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputRegisterInfo = styled.input`
  border-radius: 10px;
  width: 300px;
  height: 25px;
  background-color: lightgray;
  border: 1px solid #1696e0;
`;

const ButtonRegister = styled.button`
background-color: lightgray;
color: black;
border-radius: 20px;
width: 100px;
height: 33px;
font-size: 15px;
margin-top: 5px;
`;

const ButtonAlternateRegister = styled.button`
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: lightgray;
color: black;
border-radius: 20px;
width: 100px;
height: 33px;
font-size: 15px;
align-items: center;
`;

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container>
      <CardContainer>
        {isLogin ? (
          <LoginForm onSwitchForm={handleSwitchForm} />
        ) : (
          <RegisterForm onSwitchForm={handleSwitchForm} />
        )}
      </CardContainer>
    </Container>
  );
};

export default LoginPage;
