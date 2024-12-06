import React from 'react';
import * as S from '../styles/favoritos'; // Importa os estilos
import NavBar from '@/components/Navbar';

const Favoritos: React.FC = () => {
  const timesFavoritos = [
    { nome: 'Flamengo', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/1200px-Flamengo_braz_logo.svg.png' },
    { nome: 'Palmeiras', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png' },
    { nome: 'São Paulo', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/2054px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png' },
    { nome: 'Fortaleza', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Fortaleza_EC_2018.png/1200px-Fortaleza_EC_2018.png' }
  ];

  return (
    <S.Container>
      <NavBar />
      <S.Header>
        <S.HeaderContent>
          <S.Title>Meus Times Favoritos</S.Title>
        </S.HeaderContent>
      </S.Header>
      <S.FavoritesList>
        {timesFavoritos.length > 0 ? (
          timesFavoritos.map((time, index) => (
            <S.FavoriteItem key={index}>
              <S.TeamName>{time.nome}</S.TeamName>
              <S.TeamImage src={time.imagem} alt={`Logo do ${time.nome}`} />
              <S.RemoveButton>Remover</S.RemoveButton>
            </S.FavoriteItem>
          ))
        ) : (
          <S.NoFavoritesMessage>Nenhum time favorito encontrado.</S.NoFavoritesMessage>
        )}
      </S.FavoritesList>
    </S.Container>
  );
};

export default Favoritos;
