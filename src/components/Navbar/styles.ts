import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  background-color: #000;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 850px) {
    position: absolute;
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img`
  width: 10rem;
  height: auto;
`;

export const MenuItem = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem 0rem 0.5rem 3.5rem;
  color: #1e2952 !important;
  text-decoration: none;
  
  @media screen and (max-width: 850px) {
    font-size: 1.4rem;
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    padding: 0.2rem;
  }
`;

export const StyledLink = styled.span`
  text-decoration: none;
  color: #dedede;
  letter-spacing: 0rem;
  border-bottom: none;

  &:hover {
    border-bottom: 2px solid #006b2d;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 2rem;

  &:hover {
    color: #006b2d;
  }

  svg {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 1.5vh;
  background-color: white;
  border-radius: 4px;
  padding: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 101;

  input {
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    width: 180px;  /* Largura do input ajustada */
    border-radius: 4px;
    padding-left: 2rem;  /* Espaçamento à esquerda para a lupa */
  }

  input::placeholder {
    color: #aaa;
  }

  svg {
    position: absolute;
    left: 10px;  /* Coloca a lupa mais à esquerda dentro do campo */
    cursor: pointer;
    color: #aaa;
  }
`;
