import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  min-height: 93vh;
  background-color: #353535FF;
  
  @media screen and (max-width: 850px) {
    padding-top: 10vh;
  }
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

export const ContainerTitulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    min-height: 100%;
    gap: 2rem;
`;

export const ListaLigas = styled.ul`
    list-style-type: none;
    padding-left: 0;
`;

export const Liga = styled.li`

`;

export const LinkLiga = styled.button`
    color: #FFFFFFFF;
    border: none;
    background-color: transparent;
    padding: 0.5rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    width: 100%;
    text-align: left;
    font-size: 1rem;

    &:hover {
        background-color: #555555;
    }    

`;

export const SpanPrincipal = styled.span`
    color: #FFFFFFFF;
    width: 90%;
    font-size: 2.5rem;
    font-weight: 700;
    z-index: 2;
    letter-spacing: .2rem;
    text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    letter-spacing: .05rem;
  }
`;

export const SpanCampeonatos = styled.span`
    color: #FFFFFFFF;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    z-index: 2;
    letter-spacing: .2rem;
    text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    letter-spacing: .05rem;
  }
`;