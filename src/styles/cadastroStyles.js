import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  min-height: 100vh;
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
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SpanPrincipal = styled.span`
  color: #FFFFFFFF;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #006b2d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d20;
  }
`;
