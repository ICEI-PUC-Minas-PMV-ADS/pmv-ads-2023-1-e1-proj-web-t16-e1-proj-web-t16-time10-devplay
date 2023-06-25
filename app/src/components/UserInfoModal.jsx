import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const UserInfoModal = ({ onClose }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedName = localStorage.getItem('name');

    setUserInfo({
      email: storedEmail,
      name: storedName,
    });
  }, []);

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Informações do Usuário</h2>
        <p><strong>Nome:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserInfoModal;
