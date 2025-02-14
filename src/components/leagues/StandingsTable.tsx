
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
          {standings?.map((standing: IStanding, index: number) => (
            <TableRow key={standing.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium flex flex-row gap-2">
                <img
                  src={standing.time.escudo}
                  alt={standing.time.nome}
                  className="w-6 h-6 object-contain"
                />
                {standing.time.nome}
              </TableCell>
              <TableCell>{standing.jogos}</TableCell>
              <TableCell>{standing.vitorias}</TableCell>
              <TableCell>{standing.empates}</TableCell>
              <TableCell>{standing.derrotas}</TableCell>
              <TableCell className="font-bold">{standing.pontos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
