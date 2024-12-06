import * as S from "./styles";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { FaUserCircle, FaSearch, FaSignOutAlt, FaStar } from "react-icons/fa"; 
import { useState } from "react";
import { useRouter } from "next/router";
import api from "@/services/api";
import RefreshButton from "../RefreshButton";

const NavBar: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const router = useRouter();

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible); 
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); 
  };

  const handleLogout = async () => {
    try {
      await api.post("/logout"); 
      router.push("/login"); 
    } catch (error) {
      console.error("Erro ao fazer logout", error);
    }
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
            <S.MenuItem>
              {searchVisible && (
                <S.SearchBox>
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <FaSearch onClick={handleSearchClick} style={{ cursor: "pointer", color: "#aaa" }} />
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
          <S.MenuItems>
            <S.MenuItem>
              <Link href="/favoritos" style={{ textDecoration: "none" }}>
                <FaStar style={{ cursor: "pointer", color: "white", fontSize: "1.5rem" }} />
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href="/perfil" style={{ textDecoration: "none" }}>
                <S.ProfileButton>
                  Perfil
                  <FaUserCircle />
                </S.ProfileButton>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <FaSignOutAlt
                onClick={handleLogout} 
                style={{ cursor: "pointer", color: "white", marginRight: "2rem", padding: 0 }} 
              />
            </S.MenuItem>
          </S.MenuItems>
        </S.Menu>
      </S.HeaderBox>
    </S.HeaderContainer>
  );
};

export default NavBar;
