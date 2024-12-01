import styled from "styled-components";

export const ContainerCampeonato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    min-height: 100%;
    padding: 0 8%;
`;

export const BarraDeOpcoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    width: 100%;
    background-color: #292929;
    border-radius: 0px 0px 5px 5px;
`;

export const Opcoes = styled.button<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    color: #FFFFFFFF;
    font-weight: 500;
    text-align: center;
    border: none;
    background-color: transparent;
    border-bottom: ${(props) => (props.isSelected ? "3px solid #FFFFFF" : "none")};

    &:hover {
        cursor: pointer;
        background-color: #555;
    }
`;

export const ContainerTitulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 2rem;
    background-color: #292929 !important;
    padding: 1.2rem .7rem;
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid #555;
`;

export const ListaTimes = styled.ul`
    list-style-type: none;
    padding-left: 0;
    background-color: #292929;
    border-radius: 5px;
    width: 40%;
`;

export const Time = styled.li`
    color: #FFFFFFFF;
    border-bottom: 1px solid #555;
    padding: .75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    &:hover {
        cursor: pointer;
        background-color: #555;
    }
`;

export const ListaJogos = styled.ul`
    list-style-type: none;
    padding-left: 0;
    background-color: #292929;
    border-radius: 5px;
    width: 40%;
`;

export const Jogo = styled.li`
    color: #FFFFFFFF;
    border-bottom: 1px solid #555;
    padding: .75rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;

    &:hover {
        cursor: pointer;
        background-color: #555;
    }
`;

export const SpanPrincipal = styled.span`
    color: #FFFFFFFF;
    width: 100%;
    font-size: 1.8rem;
    font-weight: 700;
    z-index: 2;
    letter-spacing: .2rem;

  @media screen and (max-width: 800px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    letter-spacing: .05rem;
  }
`;
