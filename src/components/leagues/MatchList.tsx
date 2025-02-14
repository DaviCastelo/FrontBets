import { IPartida } from "@/common/interfaces/partida";

interface MatchListProps {
  matches: IPartida[];
}

function formatarData(data: string) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [ano, mes, dia] = data.split("-");
  const mesPorExtenso = meses[parseInt(mes, 10) - 1];

  return `${dia} de ${mesPorExtenso}`;
}

export const MatchList = ({ matches }: MatchListProps) => {
  return (
    <div className="space-y-4">
      {matches?.map((match: IPartida) => (
        <div
          key={match.id}
          className="bg-card p-4 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={match.time_mandante.escudo}
                alt={match.time_mandante.nome}
                className="w-8 h-8 object-contain"
              />
              <span className="font-medium text-card-foreground">
                {match.time_mandante.nome}
              </span>
              <span className="text-2xl font-bold text-card-foreground">
                {match.placar_mandante.toString() == "-" ? "" : match.placar_mandante} - {match.placar_visitante.toString() == "-" ? "" : match.placar_visitante}
              </span>
              <span className="font-medium text-card-foreground">
                {match.time_visitante.nome}
              </span>
              <img
                src={match.time_visitante.escudo}
                alt={match.time_visitante.nome}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              {formatarData(match.data)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
