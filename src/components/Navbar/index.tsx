import * as S from "./styles";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { FaUserCircle, FaSearch } from "react-icons/fa"; 
import { useState } from "react";

const NavBar: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible); 
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); 
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
                  style={{ cursor: "pointer", color: "white" }} 
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
