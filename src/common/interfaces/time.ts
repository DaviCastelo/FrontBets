export interface ITime {
  id: number;
  nome: string;
  liga: string | null;
  estadio: string | null;
  tecnico: string | null;
  escudo: string;
  jogadores: {
    id: number;
    nome: string;
    posicao: string;
    numero: string;
  }[];
  comentarios: {
    id: number;
    texto: string;
    autor: string;
    data: string;
  }[];
  partidas_mandante: {
    id: number;
    data: string;
    placar_mandante: number;
    placar_visitante: number;
    time_visitante_id: number;
    time_mandante_id: number;
    campeonato_id: number;
    tipo: "fixtures";
  }[];
  partidas_visitante: {
    id: number;
    data: string;
    placar_mandante: number;
    placar_visitante: number;
    time_visitante_id: number;
    time_mandante_id: number;
    campeonato_id: number;
    tipo: "fixtures";
  }[];
}
