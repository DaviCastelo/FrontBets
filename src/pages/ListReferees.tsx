import { ListReferee } from "@/common/interfaces/referee";
import { useNavigate } from "react-router-dom";

interface RefereeListProps {
  referees: ListReferee[] | null;
}

export const ListRefeers = ({ referees }: RefereeListProps) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {referees.map((referee) => (
        <div
          key={referee.id}
          className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg cursor-pointer"
          onClick={() => navigate(`/referee/${referee.id}`)}
        >
          <h3 className="text-xl font-semibold">{referee.full_name}</h3>
          <p className="text-sm text-gray-600">{referee.league}</p>
          <p className="text-sm text-gray-500">{referee.season}</p>
          <p className="text-sm">Jogos: {referee.appearances_overall}</p>
          <p className="text-sm">Gols: {referee.goals_overall}</p>
          <p className="text-sm">
            Cartões Amarelos: {referee.yellow_cards_overall}
          </p>
          <p className="text-sm">
            Cartões Vermelhos: {referee.red_cards_overall}
          </p>
        </div>
      ))}
    </div>
  );
};
