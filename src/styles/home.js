import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  min-height: 100vh;
  
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
    padding: 0 0 2rem 0;
    background-color: #353535FF;
`;


export const SpanPrincipal = styled.span`
    color: #FFFFFFFF;
    width: 70%;
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