
import { ILiga } from "./liga";
import { ITime } from "./time";

export interface IPartida {
    id: number;
    data: string;
    time_mandante: ITime;
    time_visitante: ITime;
    placar_mandante: number | null;
    placar_visitante: number | null;
    campeonato: ILiga;
    tipo?: string;
}
