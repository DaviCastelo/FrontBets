import React, { useState } from 'react';
import Head from 'next/head';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Importando os ícones de olho
import * as S from '../styles/trocasenha'; // Certifique-se de que o caminho está correto
import NavBar from '@/components/Navbar';

const trocaSenha = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState(false);  // Estado para mostrar/ocultar senha
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);  // Estado para mostrar/ocultar nova senha
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);  // Estado para mostrar/ocultar confirmar senha

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificando se as senhas coincidem
    if (novaSenha !== confirmarSenha) {
      setErro('As senhas não coincidem!');
      return;
    }

    // Lógica para alterar a senha no backend
    console.log('Alterando senha...');
    setErro(''); // Limpando erro se não houver
    alert('Senha alterada com sucesso!');
    // Aqui você faria a chamada ao backend para alterar a senha
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
                  type={mostrarSenhaAtual ? 'text' : 'password'} // Condicionando a visualização da senha
                  id="senhaAtual"
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                  required
                />
                <span
                  onClick={() => setMostrarSenhaAtual(!mostrarSenhaAtual)} // Alternando o estado ao clicar
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                >
                  {mostrarSenhaAtual ? <FiEyeOff /> : <FiEye />} {/* Exibindo ícone conforme o estado */}
                </span>
              </div>
            </S.FormField>
            <S.FormField>
              <label htmlFor="novaSenha">Nova Senha*</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={mostrarNovaSenha ? 'text' : 'password'} // Condicionando a visualização da senha
                  id="novaSenha"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  required
                />
                <span
                  onClick={() => setMostrarNovaSenha(!mostrarNovaSenha)} // Alternando o estado ao clicar
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                >
                  {mostrarNovaSenha ? <FiEyeOff /> : <FiEye />} {/* Exibindo ícone conforme o estado */}
                </span>
              </div>
            </S.FormField>
            <S.FormField>
              <label htmlFor="confirmarSenha">Confirmar Nova Senha*</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={mostrarConfirmarSenha ? 'text' : 'password'} // Condicionando a visualização da senha
                  id="confirmarSenha"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  required
                />
                <span
                  onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)} // Alternando o estado ao clicar
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                >
                  {mostrarConfirmarSenha ? <FiEyeOff /> : <FiEye />} {/* Exibindo ícone conforme o estado */}
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
