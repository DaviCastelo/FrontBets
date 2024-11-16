import React, { useState } from 'react';
import Head from 'next/head';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import * as S from '../styles/trocasenha'; 
import NavBar from '@/components/Navbar';

const trocaSenha = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState(false);
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (novaSenha !== confirmarSenha) {
      setErro('As senhas não coincidem!');
      return;
    }

    console.log('Alterando senha...');
    setErro(''); 
    alert('Senha alterada com sucesso!');
  };

  return (
    <>
      <Head>
        <title>Alterar Senha</title>
        <meta name="description" content="Página para alteração de senha" />
      </Head>
      <NavBar />
      <S.Main>
        <S.ContainerPrincipal>
          <S.Title>Alterar Senha</S.Title>
          <S.FormContainer onSubmit={handleSubmit}>
            <S.FormField>
              <label htmlFor="senhaAtual">Senha Atual*</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={mostrarSenhaAtual ? 'text' : 'password'} 
                  id="senhaAtual"
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                  required
                />
                <span
                  onClick={() => setMostrarSenhaAtual(!mostrarSenhaAtual)} 
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                >
                  {mostrarSenhaAtual ? <FiEyeOff /> : <FiEye />} 
                </span>
              </div>
            </S.FormField>
            <S.FormField>
              <label htmlFor="novaSenha">Nova Senha*</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={mostrarNovaSenha ? 'text' : 'password'} 
                  id="novaSenha"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  required
                />
                <span
                  onClick={() => setMostrarNovaSenha(!mostrarNovaSenha)}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                >
                  {mostrarNovaSenha ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </S.FormField>
            <S.FormField>
              <label htmlFor="confirmarSenha">Confirmar Nova Senha*</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={mostrarConfirmarSenha ? 'text' : 'password'}
                  id="confirmarSenha"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  required
                />
                <span
                  onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)} 
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                >
                  {mostrarConfirmarSenha ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </S.FormField>
            {erro && <S.ErrorMessage>{erro}</S.ErrorMessage>}
            <S.ButtonContainer>
              <S.SaveButton type="submit">Alterar Senha</S.SaveButton>
            </S.ButtonContainer>
          </S.FormContainer>
        </S.ContainerPrincipal>
      </S.Main>
    </>
  );
};

export default trocaSenha;
