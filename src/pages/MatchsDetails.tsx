import { MatchsDetails } from "@/common/interfaces/matchData";
import { fetchMatchDetails, fetchRefereeDetails } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

export const DetailsMatch = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: matchData, isFetching: isFetchingMatchDetails } = useQuery({
    queryKey: ["matchDetails", id],
    queryFn: () => fetchMatchDetails(id),
    enabled: !!id,
  });

  const handleBack = () => {
    navigate(-1);
  };

  if (isFetchingMatchDetails) return <p>Carregando...</p>;
  if (!matchData?.data || matchData.data.length === 0)
    return <p>Nenhum dado encontrado</p>;

  const matchDetails: MatchsDetails = matchData.data;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <button onClick={handleBack} className="mb-4 text-blue-500">
        ← Voltar
      </button>

      <h2 className="text-2xl font-bold mb-2">
        Detalhes da Partida - Rodada {matchDetails?.game_week ?? ""}
      </h2>
      <p className="text-gray-600">{matchDetails?.season ?? ""}</p>
      <p className="text-gray-500">Status: {matchDetails?.status ?? ""}</p>
      <p className="text-gray-500">
        Estádio: {matchDetails?.stadium_name ?? ""},{" "}
        {matchDetails?.stadium_location ?? ""}
      </p>
      <p className="text-gray-500">
        Público: {matchDetails?.attendance ?? "Não informado"}
      </p>

      <h3 className="text-lg font-semibold mt-4">Placar</h3>
      <p className="text-lg">
        {matchDetails?.homeGoalCount ?? "0"} -{" "}
        {matchDetails?.awayGoalCount ?? "0"}
      </p>

      <h3 className="text-lg font-semibold mt-4">Estatísticas</h3>
      <p className="text-sm">
        Gols no 1º Tempo: {matchDetails?.ht_goals_team_a ?? "0"} -{" "}
        {matchDetails?.ht_goals_team_b ?? "0"}
      </p>
      <p className="text-sm">
        Gols no 2º Tempo: {matchDetails?.goals_2hg_team_a ?? "0"} -{" "}
        {matchDetails?.goals_2hg_team_b ?? "0"}
      </p>
      <p className="text-sm">
        Total de Gols: {matchDetails?.totalGoalCount ?? "0"}
      </p>
      <p className="text-sm">
        Posse de Bola: {matchDetails?.team_a_possession ?? "0"}% -{" "}
        {matchDetails?.team_b_possession ?? "0"}%
      </p>
      <p className="text-sm">
        Finalizações: {matchDetails?.team_a_shots ?? "0"} -{" "}
        {matchDetails?.team_b_shots ?? "0"}
      </p>
      <p className="text-sm">
        Finalizações no Gol: {matchDetails?.team_a_shotsOnTarget ?? "0"} -{" "}
        {matchDetails?.team_b_shotsOnTarget ?? "0"}
      </p>
      <p className="text-sm">
        Escanteios: {matchDetails?.team_a_corners ?? "0"} -{" "}
        {matchDetails?.team_b_corners ?? "0"}
      </p>
      <p className="text-sm">
        Impedimentos: {matchDetails?.team_a_offsides ?? "0"} -{" "}
        {matchDetails?.team_b_offsides ?? "0"}
      </p>
      <p className="text-sm">
        Faltas: {matchDetails?.team_a_fouls ?? "0"} -{" "}
        {matchDetails?.team_b_fouls ?? "0"}
      </p>

      <h3 className="text-lg font-semibold mt-4">Cartões</h3>
      <p className="text-sm">
        Cartões Amarelos: {matchDetails?.team_a_yellow_cards ?? "0"} -{" "}
        {matchDetails?.team_b_yellow_cards ?? "0"}
      </p>
      <p className="text-sm">
        Cartões Vermelhos: {matchDetails?.team_a_red_cards ?? "0"} -{" "}
        {matchDetails?.team_b_red_cards ?? "0"}
      </p>

      <h3 className="text-lg font-semibold mt-4">Odds de Aposta</h3>
      <p className="text-sm">
        Vitória Time A: {matchDetails?.odds_ft_1 ?? "0.00"}
      </p>
      <p className="text-sm">Empate: {matchDetails?.odds_ft_x ?? "0.00"}</p>
      <p className="text-sm">
        Vitória Time B: {matchDetails?.odds_ft_2 ?? "0.00"}
      </p>

      <h3 className="text-lg font-semibold mt-4">Condições Climáticas</h3>
      <p className="text-sm">
        Temperatura: {matchDetails?.weather?.temperature_celcius?.temp ?? "N/A"}
        °C
      </p>
      <p className="text-sm">
        Umidade: {matchDetails?.weather?.humidity ?? "N/A"}%
      </p>
      <p className="text-sm">
        Vento: {matchDetails?.weather?.wind?.speed ?? "N/A"} km/h
      </p>
      <p className="text-sm">
        Condição: {matchDetails?.weather?.type ?? "N/A"}
      </p>
    </div>
  );
};
