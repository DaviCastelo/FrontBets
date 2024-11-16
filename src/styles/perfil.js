import styled from 'styled-components';

export const Main = styled.main`
  padding: 0;
  background-image: url('/Sem nome (750 x 500 px).png');
  background-size: cover; /* Faz a imagem cobrir toda a área */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Impede que a imagem se repita */
  height: 100vh; /* Garante que a imagem ocupe toda a altura da tela */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Cor de texto branca para contraste */
`;

export const ContainerPrincipal = styled.div`
  max-width: 900px; /* Aumentando a largura do container */
  width: 100%; /* Garantir que o container ocupe toda a largura disponível */
  height: auto; /* Permitir que a altura seja ajustada automaticamente */
  padding: 40px; /* Aumentando o padding para dar mais espaço interno */
  background-color: rgba(85, 85, 85, 0.8); /* Fundo translúcido para garantir a legibilidade */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adicionando sombra para destaque */
`;

export const Title = styled.h2`
  text-align: center;
  color: #28a745;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    color: #ddd; /* Cor de texto para os rótulos */
  }

  input, select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #28a745;
    border-radius: 4px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PasswordButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
