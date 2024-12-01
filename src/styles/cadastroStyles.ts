import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  min-height: 90vh;
  background-color: #f5f5f5;
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
  gap: 2rem;
  padding: 2rem;
  background-color: #353535FF;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);


  @media screen and (max-width: 830px) {
    margin-top: 10vh;
  }

  @media screen and (max-width: 600px) {
    margin-top: 10vh;
  }
`;

export const Mensagem = styled.div<{ isSuccess?: boolean }>`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  color: ${(props) => (props.isSuccess ? '#155724' : '#721c24')};
  background-color: ${(props) => (props.isSuccess ? '#d4edda' : '#f8d7da')}; 
  border: 1px solid ${(props) => (props.isSuccess ? '#c3e6cb' : '#f5c6cb')}; 
`;

export const SpanPrincipal = styled.span`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 800px) {
    max-width: 500px;
  }

  @media screen and (max-width: 600px) {
    max-width: 400px;
  }
`;

export const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    flex: 1;
    font-size: 1rem;
    color: #333;
  }

  input,
  select {
    flex: 2;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input:focus,
  select:focus {
    border-color: #006b2d;
    outline: none;
  }


  @media screen and (max-width: 600px) {
    label {
      font-size: .85rem;
    }

    input,
    select {
      flex: 2;
      padding: 0.6rem;
      font-size: .85rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
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

export const BotaoLogin = styled.button`
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
