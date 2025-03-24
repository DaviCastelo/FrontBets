import { ITime } from "@/common/interfaces/time";
import { useNavigate } from "react-router-dom";

interface TeamsListProps {
  teams: ITime[] | null;
}

export const TeamsList = ({ teams }: TeamsListProps) => {
  const navigate = useNavigate();

  const teamsToDisplay = teams ?? [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teamsToDisplay.length > 0 ? (
        teamsToDisplay.map((team: ITime) => (
          <div
            key={team.id}
            className="bg-card p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => {
              navigate(`/team/${team.id}`);
            }}
          >
            <div className="flex items-center gap-3">
              {team.image && (
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-10 h-10 object-contain"
                />
              )}
              <div>
                <h3 className="font-medium text-card-foreground">
                  {team.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {team.founded
                    ? `Founded: ${team.founded}`
                    : "Year Founded: N/A"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {team.country ? `Country: ${team.country}` : "Country: N/A"}
                </p>
                {team.official_sites && team.official_sites.length > 0 && (
                  <a
                    href={team.official_sites[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Official Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No teams available</p>
      )}
    </div>
  );
};
