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
`;

export const ContainerPrincipal = styled.div`
  max-width: 900px;
  width: 100%; 
  height: auto; 
  padding: 40px;
  background-color: rgba(85, 85, 85, 0.8); 
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
`;

export const Title = styled.h2`
  text-align: center;
  color: #fff;
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
    color: #ddd;
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
  background-color: #006b2d;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
