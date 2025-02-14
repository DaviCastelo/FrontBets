
import { ITime } from "./time";

export interface IStanding {
  campeonato_id: number;
  created_at: string;
  derrotas: number;
  empates: number;
  id: number;
  jogos: number;
  pontos: number;
  posicao: number;
  time: ITime;
  time_id: number;
  updated_at: string;
  vitorias: number;
}
