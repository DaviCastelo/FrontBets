import { Player } from "@/common/interfaces/player";
import { useNavigate } from "react-router-dom";

interface PlayerListProps {
  players: Player[] | null;
}

export const ListPlayers = ({ players }: PlayerListProps) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {players.map((player) => (
        <div
          key={player.id}
          className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg"
          onClick={() => {
            navigate(`/player/${player.id}`);
          }}
        >
          <p className="mt-2 text-center text-sm font-semibold">
            {player.full_name || "Nome desconhecido"}
          </p>
        </div>
      ))}
    </div>
  );
};
