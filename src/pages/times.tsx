import React, { useEffect, useState } from "react";
import * as S from "../styles/times";
import NavBar from "@/components/Navbar";
import { useRouter } from "next/router";
import { TimeApiService } from "@/api/time";
import { PartidaApiService } from "@/api/partida";


const TimesPage = () => {
  const router = useRouter();
  const { id, nome } = router.query; // Captura os query params da URL
  const [activeTab, setActiveTab] = useState<string>("Resumo"); // Aba ativa
  const [teamDetails, setTeamDetails] = useState<any>(null); // Detalhes do time
  const [matches, setMatches] = useState<any[]>([]); // Partidas do time
  const [error, setError] = useState<string | null>(null); // Erros da API

  // Obtém os detalhes do time e suas partidas
  useEffect(() => {
    if (id) {
      // Obtém detalhes do time
      TimeApiService.getTeam(Number(id))
        .then((response) => {
          console.log("Detalhes do time:", response.data); // Debug
          setTeamDetails(response.data);
        })
        .catch((err) => {
          console.error("Erro ao carregar detalhes do time:", err);
          setError("Erro ao carregar detalhes do time");
        });

      // Obtém partidas do time
      PartidaApiService.getTeamMatches(String(id), "todas")
        .then((response) => {
          console.log("Partidas do time:", response.data); // Debug
          setMatches(response.data.partidas);
        })
        .catch((err) => {
          console.error("Erro ao carregar partidas do time:", err);
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
                <p className="text-white">Capacidade: {teamDetails.capacidade || "Não disponível"}</p>
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
            {matches.length > 0 ? (
              matches
                .filter((match) => match.tipo === "finalizados")
                .map((match, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-md mb-2">
                    <p className="text-white">
                      {match.timeCasa} {match.placarCasa} - {match.placarVisitante} {match.timeVisitante}
                    </p>
                  </div>
                ))
            ) : (
              <p className="text-white">Nenhum resultado encontrado ou partidas indisponíveis.</p>
            )}
          </S.Section>
        );
      case "Calendário":
        return (
          <S.Section>
            <h2 className="text-lg font-bold mb-4">Calendário de Jogos</h2>
            {matches.length > 0 ? (
              matches
                .filter((match) => match.tipo === "agendados")
                .map((match, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-md mb-2">
                    <p className="text-white">
                      {match.data} - {match.timeCasa} vs {match.timeVisitante}
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
      {/* Navbar */}
      <NavBar />

      {/* Header */}
      <S.Header>
        <S.HeaderContent>
          <div>
            {error ? (
              <h1 className="text-xl font-bold text-red-500">{error}</h1>
            ) : (
              <h1 className="text-xl font-bold">{nome || teamDetails?.nome || "Erro: Nome do time não encontrado"}</h1>
            )}
            <p className="text-sm">ID do Campeonato: {id}</p>
          </div>
        </S.HeaderContent>
      </S.Header>

      {/* Navigation Tabs */}
      <S.Nav>
        <S.Button
          className={`py-2 px-4 ${activeTab === "Resumo" ? "border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("Resumo")}
        >
          Resumo
        </S.Button>
        <S.InactiveButton
          className={`py-2 px-4 ${activeTab === "Resultados" ? "border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("Resultados")}
        >
          Resultados
        </S.InactiveButton>
        <S.InactiveButton
          className={`py-2 px-4 ${activeTab === "Calendário" ? "border-b-2 border-yellow-500" : ""}`}
          onClick={() => setActiveTab("Calendário")}
        >
          Calendário
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

      {/* Content Section */}
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        renderContent()
      )}
    </S.Container>
  );
};

export default TimesPage;
