import styled from 'styled-components';

export const Container = styled.div`
  background-color: #353535FF;
  width: 100%;
  padding: 0 8%;
  color: #ffffff;
  min-height: 100vh;
  font-family: sans-serif;
`;

export const ContainerPrincipal = styled.div`
    display: grid;
    grid-template-columns: 18% 82%;
    width: 100%;
    min-height: 85vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
`;

export const ContainerLigas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    min-height: 100%;
    gap: 2rem;
    border-right: 1px solid #555555;
`;

export const ContainerSecundario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    min-height: 100%;
    gap: 2rem;
`;

export const Header = styled.header`
  background-color: #2d2d2d;
  padding: 1rem 1.5rem;
  border-radius: 5px 5px 0 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  background-color: #2d2d2d;
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0 0 5px 5px;
`;

export const Button = styled.button`
  /* Estilos padrão */
  background-color: #fbbf24;
  color: #000000;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &.active {
    border-bottom: 2px solid #fbbf24; /* Realça o botão ativo */
  }

  &:hover {
    background-color: #ffdb6c;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const InactiveButton = styled(Button)`
  /* Estilos para o botão inativo */
  background-color: #2d2d2d;
  color: #9ca3af;
  box-shadow: none;
  border: 1px solid #3b3b3b;

  &.active {
    background-color: #fbbf24;
    color: #000;
    border-bottom: 2px solid #fbbf24;
  }

  &:hover {
    background-color: #3b3b3b;
    color: #fbbf24;
  }
`;


export const Section = styled.section`
  padding: 1rem 1.5rem;
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const NewsCard = styled.div`
  background-color: #2d2d2d;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 8rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
`;

export const TableHeader = styled.th`
  padding: 0.5rem 0;
`;

export const TableCell = styled.td`
  padding: 0.5rem 0;
`;
