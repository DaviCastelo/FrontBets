import { StateOfLeague } from "@/common/interfaces/liga";

interface PlayerListProps {
  statesOfLeague: StateOfLeague[] | null;
}

export const StateLeague = ({ statesOfLeague }: PlayerListProps) => {
  const leaguesArray = Array.isArray(statesOfLeague)
    ? statesOfLeague
    : [statesOfLeague];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {leaguesArray.map((league) => (
        <div
          key={league.id}
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          {league.image && (
            <img
              src={league.image}
              alt={league.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border border-gray-300"
            />
          )}

          <h3 className="text-lg font-bold text-gray-800">{league.name}</h3>
          <p className="text-sm text-gray-500 italic">{league.english_name}</p>

          <div className="mt-4 space-y-1 text-center text-gray-700">
            <p>
              <strong>País:</strong> {league.country}{" "}
              {league.iso && (
                <img
                  src={`https://flagcdn.com/w40/${league.iso.toLowerCase()}.png`}
                  alt={league.country}
                  className="inline w-5 h-3 ml-1"
                />
              )}
            </p>
            <p>
              <strong>Temporada:</strong> {league.starting_year} -{" "}
              {league.ending_year}
            </p>
            <p>
              <strong>Divisão:</strong> {league.division}
            </p>
            <p>
              <strong>Clubes:</strong> {league.clubNum}
            </p>
            <p>
              <strong>Formato:</strong> {league.format}
            </p>
            <p>
              <strong>Status:</strong> {league.status}
            </p>
          </div>

          {/* Estatísticas */}
          <div className="mt-4 w-full">
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Progresso:</strong> {league.progress}%
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Rodada:</strong> {league.round} /{" "}
                {league.total_game_week}
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Total de Gols:</strong> {league.total_goals}
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Gols Casa:</strong> {league.home_teams_goals}
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Gols Fora:</strong> {league.away_teams_goals}
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Cartões Médios:</strong> {league.cardsAVG_overall}
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Escanteios Médios:</strong> {league.cornersAVG_overall}
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Vitórias Casa:</strong> {league.homeWinPercentage}%
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Vitórias Fora:</strong> {league.awayWinPercentage}%
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <strong>Empates:</strong> {league.drawPercentage}%
              </div>
            </div>
          </div>

          {league.footystats_url && (
            <a
              href={league.footystats_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Ver detalhes
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
