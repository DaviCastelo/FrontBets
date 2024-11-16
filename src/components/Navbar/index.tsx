import * as S from "./styles";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { FaUserCircle, FaSearch } from "react-icons/fa"; // Lupa importada
import { useState } from "react";

const NavBar: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false); // Estado para controlar a visibilidade do campo de pesquisa
  const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar o que está sendo digitado

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible); // Alterna a visibilidade do campo de pesquisa
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Atualiza a query de pesquisa
  };

  return (
    <S.HeaderContainer>
      <S.HeaderBox>
        <S.Menu>
          <S.MenuItems>
            <S.MenuItem>
              <Link href="/">
                <img alt="Logo" src={logo.src} width={54} height={54} />
              </Link>
            </S.MenuItem>

            {/* Campo de pesquisa com lupa dentro */}
            <S.MenuItem>
              {searchVisible && (
                <S.SearchBox>
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <FaSearch onClick={handleSearchClick} style={{ cursor: "pointer", color: "#aaa" }} /> {/* Lupa dentro do input */}
                </S.SearchBox>
              )}
              {!searchVisible && (
                <FaSearch
                  onClick={handleSearchClick}
                  style={{ cursor: "pointer", color: "white" }} // Lupa para abrir o campo de pesquisa
                />
              )}
            </S.MenuItem>
          </S.MenuItems>

          <S.MenuItem>
            <Link href="/perfil">
              <S.ProfileButton>
                Perfil
                <FaUserCircle />
              </S.ProfileButton>
            </Link>
          </S.MenuItem>
        </S.Menu>
      </S.HeaderBox>
    </S.HeaderContainer>
  );
};

export default NavBar;
