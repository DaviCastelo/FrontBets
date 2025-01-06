import api from "@/services/api";

export class TimeApiService {
    static async getLeagueTeams(liga: string) {
      return api.get(`/times?liga=${liga}`);
    }

    static async getTeam(id: number) {
      return api.get(`/times/${id}`);
    }
  }