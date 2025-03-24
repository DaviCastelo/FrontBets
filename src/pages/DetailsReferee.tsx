import { RefereeDetails } from "@/common/interfaces/referee";
import { fetchRefereeDetails } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

export const DetailsReferee = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: refereeData, isFetching: isFetchingReferee } = useQuery({
    queryKey: ["referee", id],
    queryFn: () => fetchRefereeDetails(id),
    enabled: !!id,
  });

  const handleBack = () => {
    navigate(-1);
  };

  if (isFetchingReferee) return <p>Carregando...</p>;
  if (!refereeData?.data || refereeData.data.length === 0)
    return <p>Nenhum dado encontrado</p>;

  const referee: RefereeDetails = refereeData.data[0];

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={handleBack}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Voltar
      </button>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">{referee.full_name}</h2>
        <p className="text-gray-600">
          {referee.league} ({referee.season})
        </p>
        <p className="text-gray-500">Nacionalidade: {referee.nationality}</p>
        <p className="text-gray-500">Idade: {referee.age} anos</p>
        <p className="text-gray-500">Competições: {referee.league_type}</p>

        <h3 className="text-lg font-semibold mt-4">Estatísticas</h3>
        <p className="text-sm">
          Partidas Apitadas: {referee.appearances_overall}
        </p>
        <p className="text-sm">Empates: {referee.draws_overall}</p>
        <p className="text-sm">Gols nas partidas: {referee.goals_overall}</p>
        <p className="text-sm">
          Média de Gols por Jogo: {referee.goals_per_match_overall}
        </p>
        <p className="text-sm">
          Pênaltis Marcados: {referee.penalties_given_overall}
        </p>
        <p className="text-sm">
          Cartões Amarelos: {referee.yellow_cards_overall || 0}
        </p>
        <p className="text-sm">
          Cartões Vermelhos: {referee.red_cards_overall || 0}
        </p>
      </div>

      <a
        href={referee.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-600 hover:underline"
      >
        Ver mais detalhes
      </a>
    </div>
  );
};
