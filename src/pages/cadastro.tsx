import React, { useState } from 'react';
import Head from 'next/head';
import * as S from '../styles/cadastroStyles';
import NavBar from '@/components/Navbar';
import api from '../services/api';
import router from 'next/router';

const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState(''); 
  const [mensagem, setMensagem] = useState<string | null>(null);

  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setMensagem('As senhas não coincidem.');
      return;
    }

    try {
      const response = await api.post('/register', {
        name: nomeCompleto,
        email,
        cargo,
        password,
        password_confirmation: passwordConfirm, 
      });

      setMensagem('Cadastro realizado com sucesso! Redirecionando...');
      setTimeout(() => {
        router.push('/login'); 
      }, 2000);
    } catch (error: any) {
      setMensagem(
        error.response?.data?.message || 'Ocorreu um erro ao realizar o cadastro.'
      );
    }
  };

  const goToLogin = () => {
    router.push('/login');
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
          {mensagem && <S.Mensagem>{mensagem}</S.Mensagem>} 
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
                <option value="dono">Dono</option>
                <option value="dev">Dev</option>
                <option value="visitante">Visitante</option>
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
            <S.FormField>
              <label htmlFor="passwordConfirm">Confirme sua senha:</label>
              <input
                type="password"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
                placeholder="Confirme sua senha"
              />
            </S.FormField>
            <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>
          </S.FormContainer>
          <S.BotaoCadastro onClick={goToLogin} style={{ marginTop: '1rem' }}>
            Fazer Login
          </S.BotaoCadastro>
        </S.ContainerPrincipal>
      </S.Main>
    </>
  );
};

export default Cadastro;