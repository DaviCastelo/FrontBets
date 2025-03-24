import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PlayerIndividualType } from "@/common/interfaces/player";
import { fetchPlayerDetails } from "@/services/api";

export const PlayerIndividual = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: playerData, isFetching: isFetchingPlayer } = useQuery({
    queryKey: ["player", id],
    queryFn: () => fetchPlayerDetails(id),
    enabled: !!id,
  });

  const handleBack = () => {
    navigate(-1);
  };

  if (isFetchingPlayer) return <p>Carregando...</p>;
  if (!playerData?.data || playerData.data.length === 0)
    return <p>Nenhum dado encontrado</p>;

  const player: PlayerIndividualType = playerData.data[0];

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={handleBack}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Voltar
      </button>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{player.full_name}</h1>

        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Nome Conhecido:</strong> {player.known_as}
          </p>
          <p>
            <strong>Idade:</strong> {player.age}
          </p>
          <p>
            <strong>Posição:</strong> {player.position}
          </p>
          <p>
            <strong>Nacionalidade:</strong> {player.nationality}
          </p>
          <p>
            <strong>Clube:</strong> {player.club_team_id}
          </p>
          <p>
            <strong>Liga:</strong> {player.league} ({player.league_type})
          </p>
          <p>
            <strong>Temporada:</strong> {player.season} ({player.starting_year}{" "}
            - {player.ending_year})
          </p>
          <p>
            <strong>Minutos Jogados:</strong> {player.minutes_played_overall}
          </p>
          <p>
            <strong>Minutos Jogados em Casa:</strong>{" "}
            {player.minutes_played_home}
          </p>
          <p>
            <strong>Minutos Jogados Fora:</strong> {player.minutes_played_away}
          </p>
        </div>

        <a
          href={player.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-600 hover:underline"
        >
          Ver mais detalhes
        </a>
      </div>
    </div>
  );
};
