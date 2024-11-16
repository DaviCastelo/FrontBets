import styled from 'styled-components';

export const Main = styled.main`
  padding: 0;
  background-image: url('/Sem nome (750 x 500 px).png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Sobreposição escura */
    z-index: 0;
  }
`;

export const ContainerPrincipal = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1; /* Garante que o conteúdo fique acima da sobreposição */
`;

export const Title = styled.h2`
  text-align: center;
  color: #28a745;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    margin-bottom: 5px;
    color: #ddd;
  }

  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #28a745;
    border-radius: 4px;
    width: 100%;
  }

  span {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(50%);
    cursor: pointer;
    color: black; /* Aqui é onde definimos a cor do ícone de olho */
    z-index: 1; /* Garante que o ícone fique acima do campo */
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SaveButton = styled.button`
  background-color: #006b2d;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;
