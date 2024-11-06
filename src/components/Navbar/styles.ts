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
  justify-content: flex-start;
  align-items: center;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;

@media screen and (max-width: 850px) {
  width: 100%;
  padding: 0;
  justify-content: space-between;
}
`;

export const Logo = styled.image`
  width: 10rem;
  height: 100%;
`;

export const MenuItem = styled.div`
  font-size: .85rem;
  font-weight: 700;
  padding: .5rem 3.5rem;
  color: #1e2952 !important;
  text-decoration: none;
  @media screen and (max-width: 850px) {
    font-size: 1.4rem;
    font-weight: 700;
    
  }

  @media screen and (max-width: 600px) {
    padding: .2rem;
  }
`;

export const StyledLink = styled.span`
  text-decoration: none;
  color: #dedede;
  letter-spacing: 0rem;
  border-bottom: none;

  &:hover{
    border-bottom: 2px solid #81151f;
  }
`;
export const MenuItems = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;

`;