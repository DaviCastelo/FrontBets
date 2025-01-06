import React, { useEffect, useState } from "react";
import * as S from "../styles/times";
import { TimeApiService } from "@/api/time";
import { PartidaApiService } from "@/api/partida";
import { ITime } from "@/common/interfaces/time";
import { IPartida } from "@/common/interfaces/partida";
import { FaArrowLeft } from "react-icons/fa";

const Time = ({ id, onBack }: { id: number; onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<string>("Resultados");
  const [teamDetails, setTeamDetails] = useState<ITime>();
  const [matches, setMatches] = useState<IPartida[]>([]);
  const [error, setError] = useState<string | null>(null);

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
    if (id) {
      TimeApiService.getTeam(Number(id))
        .then((response) => {
          setTeamDetails(response.data);
        })
        .catch((err) => {
          setError("Erro ao carregar detalhes do time");
        });

      PartidaApiService.getTeamMatches(String(id), "todas")
        .then((response) => {
          setMatches(response.data.partidas);
          console.log(matches);
        })
        .catch((err) => {
          setError("Erro ao carregar as partidas do time");
        });
    }
  }, [id]);

  const renderContent = () => {
    switch (activeTab) {
      case "Resumo":
        return (
          <S.Section>
            <h2 className="text-lg font-bold mb-4">Resumo do Time</h2>
            {teamDetails ? (
              <div>
                <p className="text-white">Nome: {teamDetails.nome || "Não disponível"}</p>
                <p className="text-white">Estádio: {teamDetails.estadio || "Não disponível"}</p>
              </div>
            ) : (
              <p className="text-white">Carregando informações do time ou dados não encontrados...</p>
            )}
          </S.Section>
        );
      case "Resultados":
        return (
          <S.Section>
            <h2 className="text-lg font-bold mb-4">Resultados Recentes</h2>
            {matches ? (
              matches
                .filter((match) => match.tipo === "results")
                .map((match, index) => (
                  <div key={index} style={{width: "100%"}}>
                    <p style={{color: "white"}}>
                    {formatarData(match.data)} - {match.time_mandante.nome} {match.placar_mandante} - {match.placar_visitante} {match.time_visitante.nome}
                    </p>
                  </div>
                ))
            ) : (
              <p className="text-white">Nenhum resultado encontrado ou partidas indisponíveis.</p>
            )}
          </S.Section>
        );
      case "Próximos Jogos":
        return (
          <S.Section>
            <h2 className="text-lg font-bold mb-4">Próximos Jogos</h2>
            {matches.length > 0 ? (
              matches
                .filter((match) => match.tipo === "fixtures")
                .map((match, index) => (
                  <div key={index} style={{width: "100%"}}>
                    <p style={{color: "white"}}>
                      {formatarData(match.data)} - {match.time_mandante.nome} vs {match.time_visitante.nome}
                    </p>
                  </div>
                ))
            ) : (
              <p className="text-white">Nenhum jogo agendado.</p>
            )}
          </S.Section>
        );
      case "Classificação":
        return (
          <S.Section>
            <h2 className="text-lg font-bold mb-4">Classificação</h2>
            <p className="text-white">(Funcionalidade futura - Classificação do campeonato)</p>
          </S.Section>
        );
      case "Transferências":
        return (
          <S.Section>
            <h2 className="text-lg font-bold mb-4">Transferências</h2>
            <p className="text-white">(Funcionalidade futura - Transferências do time)</p>
          </S.Section>
        );
      case "Elenco":
        return (
          <S.Section>
            <h2 className="text-lg font-bold mb-4">Elenco</h2>
            {teamDetails && teamDetails.jogadores ? (
              <ul>
                {teamDetails.jogadores.map((player: any, index: number) => (
                  <li key={index} className="text-white">
                    {player.nome} - {player.posicao}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white">Carregando elenco ou dados não encontrados...</p>
            )}
          </S.Section>
        );
      default:
        return <p className="text-white">Selecione uma aba para visualizar informações.</p>;
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <div>
            {error ? (
              <h1 className="text-xl font-bold text-red-500">{error}</h1>
            ) : (
              <h1 className="text-xl font-bold">{teamDetails?.nome || "Erro: Nome do time não encontrado"}</h1>
            )}
          </div>
        </S.HeaderContent>
      </S.Header>
      <S.Nav>
        {/* <S.Button
          className={`py-2 px-4 ${activeTab === "Resumo" ? "border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("Resumo")}
        >
          Resumo
        </S.Button> */}
        <S.InactiveButton
          className={`py-2 px-4 ${activeTab === "Resultados" ? "border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("Resultados")}
        >
          Resultados
        </S.InactiveButton>
        <S.InactiveButton
          className={`py-2 px-4 ${activeTab === "Próximos Jogos" ? "border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("Próximos Jogos")}
        >
          Próximos Jogos
        </S.InactiveButton>
        <S.InactiveButton
          className={`py-2 px-4 ${activeTab === "Classificação" ? "border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("Classificação")}
        >
          Classificação
        </S.InactiveButton>
        <S.InactiveButton
          className={`py-2 px-4 ${activeTab === "Transferências" ? "border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("Transferências")}
        >
          Transferências
        </S.InactiveButton>
        <S.InactiveButton
          className={`py-2 px-4 ${activeTab === "Elenco" ? "border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("Elenco")}
        >
          Elenco
        </S.InactiveButton>
      </S.Nav>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <br/>
          <FaArrowLeft style={{cursor: "pointer"}} onClick={onBack}/>
          {renderContent()}
        </>
      )}
    </S.Container>
  );
};

export default Time;
