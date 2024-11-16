import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  min-height: 90vh;

  @media screen and (max-width: 850px) {
    padding-top: 10vh;
  }
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
  gap: 3rem;
  padding: 2rem;
  background-color: #353535FF;
`;

export const SpanPrincipal = styled.span`
  color: #FFFFFFFF;
  width: 70%;
  font-size: 2.5rem;
  font-weight: 700;
  z-index: 2;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
  }
`;

export const BotaoCadastro = styled.button`
  color: #FFFFFFFF;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #006b2d;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  z-index: 2;
  letter-spacing: 0.1rem;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
  }
`;


export const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #006b2d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d20;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  label {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;

    &:focus {
      border-color: #006b2d;
      outline: none;
    }
  }

  button {
    padding: 1rem;
    background-color: #006b2d;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s;
    margin-top: 1rem;  

    &:hover {
      background-color: #026c2eff;
    }
  }
  
`;
