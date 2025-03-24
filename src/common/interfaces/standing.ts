import { ITime } from "./time";

// export interface IStanding {
//   campeonato_id: number;
//   created_at: string;
//   derrotas: number;
//   empates: number;
//   id: number;
//   jogos: number;
//   pontos: number;
//   posicao: number;
//   time: ITime;
//   time_id: number;
//   updated_at: string;
//   vitorias: number;
// }

export interface IStanding {
  id: number;
  name: string;
  position: number;
  seasonGoals: number;
  seasonGoals_home: number;
  seasonGoals_away: number;
  seasonConceded: number;
  seasonConceded_home: number;
  seasonConceded_away: number;
  seasonGoalDifference: number;
  seasonWins_overall: number;
  seasonWins_home: number;
  seasonWins_away: number;
  seasonDraws_overall: number;
  seasonDraws_home: number;
  seasonDraws_away: number;
  seasonLosses_overall: number;
  seasonLosses_home: number;
  seasonLosses_away: number;
  matchesPlayed: number;
  points: number;
  zone: {
    name: string;
    number: number;
  };
  wdl_record: string;
  url: string;
  cleanName: string;
  shortHand: string;
}
