import { MatchData } from "@/common/interfaces/matchData";
import { useNavigate } from "react-router-dom";

interface PlayerListProps {
  matchs: MatchData[] | null;
}

export const Match = ({ matchs }: PlayerListProps) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {matchs.map((match) => (
        <div
          key={match.id}
          className="flex flex-col p-4 bg-white shadow-lg rounded-2xl border border-gray-200"
          onClick={() => {
            navigate(`/matchs-datails/${match.id}`);
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center">
              <img
                src={match.home_image}
                alt={match.home_name}
                className="w-14 h-14 object-contain"
              />
              <span className="text-lg font-semibold">{match.home_name}</span>
            </div>

            <div className="text-xl font-bold">
              {" "}
              {match.homeGoalCount} - {match.awayGoalCount}{" "}
            </div>

            <div className="flex flex-col items-center">
              <img
                src={match.away_image}
                alt={match.away_name}
                className="w-14 h-14 object-contain"
              />
              <span className="text-lg font-semibold">{match.away_name}</span>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm mb-4">
            {match.stadium_name} - {match.season}
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="font-medium">Posse:</span>{" "}
              {match.team_a_possession}% / {match.team_b_possession}%
            </div>
            <div>
              <span className="font-medium">Finalizações:</span>{" "}
              {match.team_a_shots} / {match.team_b_shots}
            </div>
            <div>
              <span className="font-medium">Cartões:</span>{" "}
              {match.team_a_yellow_cards} / {match.team_b_yellow_cards}
            </div>
            <div>
              <span className="font-medium">Escanteios:</span>{" "}
              {match.team_a_corners} / {match.team_b_corners}
            </div>
          </div>

          <a
            href={`/matchs-datails/${match.id}`}
            className="mt-4 text-blue-600 font-medium hover:underline text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver detalhes
          </a>
        </div>
      ))}
    </div>
  );
};
