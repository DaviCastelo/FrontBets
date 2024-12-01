import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { ILiga } from "@/common/interfaces/liga";
import { ITime } from "@/common/interfaces/time";
import { TimeApiService } from "@/api/time";
import { PartidaApiService } from "@/api/partida";
import { IPartida } from "@/common/interfaces/partida";
import CircularProgress from "@mui/material/CircularProgress";

const CampeonatoInfo: React.FC<ILiga> = ({ nome, id, logo }) => {
  const [times, setTimes] = useState<ITime[]>([]);
  const [fixtures, setFixtures] = useState<IPartida[]>([]);
  const [results, setResults] = useState<IPartida[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("Times"); 

  function formatarData(data: string) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const [ano, mes, dia] = data.split("-"); 
    const mesPorExtenso = meses[parseInt(mes, 10) - 1]; 

    return `${dia} de ${mesPorExtenso}`; 
}

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const response = await TimeApiService.getLeagueTeams(`${nome}`);
        setTimes(response.data);
      } catch (err) {
        setError("Erro ao carregar os times");
      } finally {
        setLoading(false);
      }
    };

    const fetchFixtures = async () => {
      try {
        const response = await PartidaApiService.getPerType(`${id}`, "fixtures");
        setFixtures(response.data);
      } catch (err) {
        setError("Erro ao carregar os jogos futuros");
      } finally {
        setLoading(false);
      }
    };

    const fetchResults = async () => {
      try {
        const response = await PartidaApiService.getPerType(`${id}`, "results");
        setResults(response.data);
      } catch (err) {
        setError("Erro ao carregar os resultados");
      } finally {
        setLoading(false);
      }
    };

    fetchTimes();
    fetchFixtures();
    fetchResults();

  }, [nome, id]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <S.ContainerCampeonato>
      <S.ContainerTitulo>
        <img alt="Logo" src={logo ?? ""} width={94} height={94} style={{ backgroundColor: "white", borderRadius: ".3rem" }}/>
        <S.SpanPrincipal>{times.length > 0 ? times[0].liga : ""}</S.SpanPrincipal>
      </S.ContainerTitulo>
      <S.BarraDeOpcoes>
        <S.Opcoes 
            onClick={() => handleOptionClick("Times")} 
            isSelected={selectedOption === "Times"}
        >
            Times
        </S.Opcoes>
        <S.Opcoes 
            onClick={() => handleOptionClick("Resultados")} 
            isSelected={selectedOption === "Resultados"}
        >
            Resultados
        </S.Opcoes>
        <S.Opcoes 
            onClick={() => handleOptionClick("Próximos jogos")} 
            isSelected={selectedOption === "Próximos jogos"}
        >
            Próximos jogos
        </S.Opcoes>
      </S.BarraDeOpcoes>
      <br />
      {loading && <p><CircularProgress size={24} color="inherit" /></p>}
      {error && <p>{error}</p>}

      {!loading && !error && selectedOption === "Times" && times.length > 0 && (
        <S.ListaTimes>
          {times.map((time) => (
            <S.Time key={time.id}>
              <img src={time.escudo} alt={time.nome} />
              {time.nome}
            </S.Time>
          ))}
        </S.ListaTimes>
      )}
      
      {!loading && !error && selectedOption === "Resultados" && results.length > 0 && (
        <S.ListaJogos>
          {results.map((partida) => (
            <S.Jogo key={partida.id}>
              <span>{formatarData(partida.data)}</span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
                  <img src={partida.time_mandante.escudo} alt={partida.time_mandante.nome} />
                  <span>{partida.time_mandante.nome}</span>
                </div>
                {partida.placar_mandante}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
                  <img src={partida.time_visitante.escudo} alt={partida.time_visitante.nome} />
                  <span>{partida.time_visitante.nome}</span>
                </div>
                {partida.placar_visitante}
              </div>
            </S.Jogo>
          ))}
        </S.ListaJogos>
      )}

      {!loading && !error && selectedOption === "Próximos jogos" && fixtures.length > 0 && (
        <S.ListaJogos>
          {fixtures.map((partida) => (
            <S.Jogo key={partida.id}>
              <span>{formatarData(partida.data)}</span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
                  <img src={partida.time_mandante.escudo} alt={partida.time_mandante.nome} />
                  <span>{partida.time_mandante.nome}</span>
                </div>
                {partida.placar_mandante}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: ".7rem" }}>
                  <img src={partida.time_visitante.escudo} alt={partida.time_visitante.nome} />
                  <span>{partida.time_visitante.nome}</span>
                </div>
                {partida.placar_visitante}
              </div>            
            </S.Jogo>
          ))}
        </S.ListaJogos>
      )}

      {!loading && !error && times.length === 0 && <p>Nenhuma informação encontrada.</p>}
    </S.ContainerCampeonato>
  );
};

export default CampeonatoInfo;