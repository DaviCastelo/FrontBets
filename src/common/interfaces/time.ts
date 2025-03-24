import React, { createContext, ReactNode, useContext, useState } from "react";
// export interface ITime {
//   id: number;
//   nome: string;
//   liga: string | null;
//   estadio: string | null;
//   tecnico: string | null;
//   escudo: string;
//   jogadores: {
//     id: number;
//     nome: string;
//     posicao: string;
//     numero: string;
//   }[];
//   comentarios: {
//     id: number;
//     texto: string;
//     autor: string;
//     data: string;
//   }[];
//   partidas_mandante: {
//     id: number;
//     data: string;
//     placar_mandante: number;
//     placar_visitante: number;
//     time_visitante_id: number;
//     time_mandante_id: number;
//     campeonato_id: number;
//     tipo: "fixtures";
//   }[];
//   partidas_visitante: {
//     id: number;
//     data: string;
//     placar_mandante: number;
//     placar_visitante: number;
//     time_visitante_id: number;
//     time_mandante_id: number;
//     campeonato_id: number;
//     tipo: "fixtures";
//   }[];
// }

export interface ITime {
  id: number;
  name: string;
  cleanName: string;
  english_name: string;
  shortHand: string;
  country: string;
  continent: string | null;
  founded: string;
  image: string;
  flag_element: string | null;
  season: string;
  seasonClean: string | null;
  url: string;
  table_position: number;
  performance_rank: number;
  risk: number;
  season_format: string;
  competition_id: number;
  full_name: string;
  alt_names: string[];
  official_sites: string[];
}
