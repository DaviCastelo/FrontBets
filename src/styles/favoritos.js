import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  font-family: sans-serif;
  padding: 2rem;
`;

export const Header = styled.header`
  background-color: #2d2d2d;
  padding: 1rem 1.5rem;
  border-bottom: 2px solid #28a745;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #28a745;
`;

export const FavoritesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const FavoriteItem = styled.div`
  background-color: #2d2d2d;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 250px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamName = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const RemoveButton = styled.button`
  background-color: #28a745;
  color: #1a1a1a;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #28a745;
  }
`;

export const NoFavoritesMessage = styled.p`
  color: #9ca3af;
  font-size: 1rem;
  text-align: center;
`;

export const TeamImage = styled.img`
  width: 150px; 
  height: auto; 
  max-height: 150px; 
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  object-fit: contain; 
`;

