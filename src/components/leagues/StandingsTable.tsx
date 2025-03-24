import { IStanding } from "@/common/interfaces/standing";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StandingsTableProps {
  standings: IStanding[];
}

export const StandingsTable = ({ standings }: StandingsTableProps) => {
  return (
    <div className="bg-card rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>J</TableHead>
            <TableHead>V</TableHead>
            <TableHead>E</TableHead>
            <TableHead>D</TableHead>
            <TableHead>Pts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {standings?.map((standing, index) => (
            <TableRow key={standing.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium flex flex-row gap-2">
                {/* Nome do time */}
                {standing.name || "Desconhecido"}
              </TableCell>
              <TableCell>{standing.matchesPlayed}</TableCell>
              <TableCell>{standing.seasonWins_overall}</TableCell>
              <TableCell>{standing.seasonDraws_overall}</TableCell>
              <TableCell>{standing.seasonLosses_overall}</TableCell>
              <TableCell className="font-bold">{standing.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
