import { useEffect, useState } from "react";
import { fetchLeagues } from "@/services/api";
import { Trophy, Menu, X, Search } from "lucide-react";
import { ILiga } from "@/common/interfaces/liga";
import Flag from "react-world-flags";
import { getCode } from "country-list";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Adicione useNavigate para redirecionamento

interface LeagueSidebarProps {
  onSelectLeague: (league: ILiga) => void;
  selectedLeague?: ILiga;
}

export const LeagueSidebar = ({ onSelectLeague, selectedLeague }: LeagueSidebarProps) => {
  const [leagues, setLeagues] = useState<ILiga[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false); // Indicador de carregamento da busca
  const [searchError, setSearchError] = useState<string | null>(null); // Mensagem de erro
  const isMobile = useIsMobile();
  const navigate = useNavigate(); // Hook para redirecionamento

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const getCountryCode = (countryName: string): string => {
    return getCode(countryName) || "";
  };

  useEffect(() => {
    const loadLeagues = async () => {
      try {
        const data = await fetchLeagues();
        setLeagues(data.ligas);
      } catch (error) {
        console.error("Erro ao carregar ligas:", error);
      } finally {
        setLoading(false);
      }
    };

    loadLeagues();
  }, []);

  const handleSelectLeague = (league: ILiga) => {
    onSelectLeague(league);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setIsSearching(true);
      setSearchError(null);
  
      try {
        const response = await axios.get("/api/times", {
          params: { nome: query },
        });
  
        if (Array.isArray(response.data)) {
          setSearchResults(response.data);
        } else {
          setSearchResults([]);
          setSearchError("Nenhum time encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar times:", error);
        setSearchResults([]);
        setSearchError("Erro ao buscar times. Tente novamente.");
      } finally {
        setIsSearching(false);
      }
    } else {
      setSearchResults([]);
    }
  };
  
  

  if (loading) {
    return (
      <div className="w-64 h-screen bg-background border-r border-border p-4 animate-pulse">
        <div className="space-y-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-10 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Botão de toggle para mobile */}
      <Button
        variant="outline"
        size="icon"
        className={`fixed top-4 ${isOpen ? 'left-[256px]' : 'left-4'} z-50 md:hidden lg:hidden transition-all duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed h-full top-0 left-0 md:h-auto lg:h-auto bg-background border-r border-border transition-all duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 md:relative`}
        style={{ width: "256px" }}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-emerald-500" />
            Ligas
          </h2>

          {/* Área de busca por nome do time */}
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar time..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            {isSearching && <p className="text-sm text-muted-foreground mt-2">Buscando...</p>}
            {searchError && <p className="text-sm text-red-500 mt-2">{searchError}</p>}
            {searchResults.length > 0 && (
              <div className="mt-2 border rounded-lg bg-background shadow-lg max-h-60 overflow-y-auto">
                {searchResults.map((team: any) => (
                  <button
                    key={team.id}
                    onClick={() => handleSelectLeague(team)}
                    className="w-full text-left px-3 py-2 hover:bg-muted"
                  >
                    {team.nome}
                  </button>
                ))}
              </div>
            )}
            {searchQuery.length > 2 && searchResults.length === 0 && !isSearching && (
              <p className="text-sm text-muted-foreground mt-2">Nenhum time encontrado.</p>
            )}
          </div>

          {/* Lista de ligas */}
          <div className="space-y-1">
            {leagues.map((league) => (
              <button
                key={league.id}
                onClick={() => handleSelectLeague(league)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedLeague?.id === league.id
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Flag
                    code={getCountryCode(league.pais || "")}
                    style={{ width: 20, height: 15, marginRight: 8 }}
                  />
                  <span className="text-sm font-medium">{league.nome}</span>
                </div>
                <span className="text-xs text-muted-foreground">{league.pais}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};