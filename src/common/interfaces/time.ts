export interface ITime {
    id: number;
    nome: string;
    liga: string | null;
    estadio: string | null;
    tecnico: string | null;
    escudo: string;
    jogadores: [];
    comentarios: [];
    partidas_mandante: [];
    partidas_visitante: [];
  }