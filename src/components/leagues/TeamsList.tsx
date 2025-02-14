
import { ITime } from "@/common/interfaces/time";
import { useNavigate } from "react-router-dom";

interface TeamsListProps {
  teams: ITime[];
}

export const TeamsList = ({ teams }: TeamsListProps) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teams?.map((team: ITime) => (
        <div
          key={team.id}
          className="bg-card p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => navigate(`/team/${team.id}`)}
        >
          <div className="flex items-center gap-3">
            {team.escudo && (
              <img
                src={team.escudo}
                alt={team.nome}
                className="w-10 h-10 object-contain"
              />
            )}
            <div>
              <h3 className="font-medium text-card-foreground">{team.nome}</h3>
              <p className="text-sm text-muted-foreground">{team.estadio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
