import api from "@/services/api";

export class PartidaApiService {
    static async getAll(liga: string) {
      return api.get(`/partidas?id_campeonato=${liga}`);
    }
  
    static async getPerType(liga: string, tipo: string) {
        return api.get(`/partidas?id_campeonato=${liga}&tipo=${tipo}`);
    }
    
    static async getTeamMatches(time: string, tipo: string) {
        return api.get(`/partidas/time?idTime=${time}&tipo=${tipo}`);
    }
    
  }