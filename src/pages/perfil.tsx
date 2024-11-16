import React, { useState } from 'react';
import Head from 'next/head';
import * as S from '../styles/perfil';
import NavBar from '@/components/Navbar';
import { useRouter } from 'next/router';

const Perfil = () => {
  const [login, setLogin] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');
  const [cargo, setCargo] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const router = useRouter(); 

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Perfil salvo com sucesso');
  };

  const handlePasswordChange = () => {
    router.push('/trocaSenha');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Head>
        <title>Meu Perfil</title>
        <meta name="description" content="Página de perfil do usuário" />
      </Head>
      <NavBar />
      <S.Main>
        <S.ContainerPrincipal>
          <S.Title>Meu Perfil</S.Title>
          
          <S.ProfileImageContainer>
            <label htmlFor="profile-image-upload">
              <S.ProfileImage
                src={profileImage || '/Design sem nome (35).png'}
                alt="Profile"
              />
            </label>
            <input
              type="file"
              id="profile-image-upload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </S.ProfileImageContainer>
          
          <S.FormContainer onSubmit={handleSave}>
            <S.FormField>
              <label htmlFor="login">Login*</label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </S.FormField>
            <S.FormField>
              <label htmlFor="nome">Nome*</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </S.FormField>
            <S.FormField>
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </S.FormField>
            <S.FormField>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </S.FormField>
            <S.FormField>
              <label htmlFor="celular">Celular</label>
              <input
                type="text"
                id="celular"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </S.FormField>
            <S.FormField>
              <label htmlFor="cargo">Cargo</label>
              <select
                id="cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              >
                <option value="Informante">Informante</option>
                <option value="Supervisão">Supervisão</option>
              </select>
            </S.FormField>
            
            <S.ButtonContainer>
              <S.PasswordButton type="button" onClick={handlePasswordChange}>
                Alterar senha
              </S.PasswordButton>
              <S.SaveButton type="submit">Salvar</S.SaveButton>
            </S.ButtonContainer>
          </S.FormContainer>
        </S.ContainerPrincipal>
      </S.Main>
    </>
  );
};

export default Perfil;
