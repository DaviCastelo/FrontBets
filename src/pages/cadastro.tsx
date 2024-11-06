import React, { useState } from 'react';
import Head from 'next/head';
import * as S from '../styles/cadastroStyles';
import NavBar from '@/components/Navbar';
import axios from 'axios';

const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/cadastro', { nomeCompleto, email, cargo, password });
      console.log('Cadastro bem-sucedido:', response.data);
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Cadastro</title>
        <meta name="description" content="Página de cadastro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <S.Main>
        <S.ContainerPrincipal>
          <S.SpanPrincipal>Cadastro</S.SpanPrincipal>
          <S.FormContainer onSubmit={handleCadastro}>
            <S.FormField>
              <label htmlFor="nomeCompleto">Nome Completo:</label>
              <input
                type="text"
                id="nomeCompleto"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
                required
                placeholder="Digite seu nome completo"
              />
            </S.FormField>
            <S.FormField>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Digite seu e-mail"
              />
            </S.FormField>
            <S.FormField>
              <label htmlFor="cargo">Cargo:</label>
              <select
                id="cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                required
              >
                <option value="" disabled>
                  Selecione seu cargo
                </option>
                <option value="Informante">Informante</option>
                <option value="Supervisão">Supervisão</option>
              </select>
            </S.FormField>
            <S.FormField>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Digite sua senha"
              />
            </S.FormField>
            <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>
          </S.FormContainer>
        </S.ContainerPrincipal>
      </S.Main>
    </>
  );
};

export default Cadastro;
