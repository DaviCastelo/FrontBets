import { TodayMatch } from "@/common/interfaces/todayMatchs";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

interface TodayMatchsListProps {
  todayMatches: TodayMatch[] | null;
}

export const TodayMatchs = ({ todayMatches }: TodayMatchsListProps) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {todayMatches.map((match) => {
        const matchDate = format(
          new Date(match.date_unix * 1000),
          "dd/MM/yyyy HH:mm"
        );

        return (
          <div
            key={match.id}
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg"
            onClick={() => {
              navigate(`/matchs-datails/${match.id}`);
            }}
          >
            <div className="flex items-center mb-2">
              <img
                src={match.home_image}
                alt={match.home_name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div className="font-semibold text-lg">{match.home_name}</div>
            </div>
            <div className="text-sm text-gray-500 mb-2">vs</div>
            <div className="flex items-center mb-2">
              <img
                src={match.away_image}
                alt={match.away_name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div className="font-semibold text-lg">{match.away_name}</div>
            </div>
            <div className="text-sm text-gray-500 mb-2">{matchDate}</div>
            <div className="text-xs text-gray-400 mb-2">
              Stadium: {match.stadium_name}
            </div>
            <div className="text-xs text-gray-400">{match.status}</div>
            <div className="text-xs text-gray-400">
              Odds: {match.odds_ft_1} - {match.odds_ft_x} - {match.odds_ft_2}
            </div>
          </div>
        );
      })}
    </div>
  );
};
