import { ILiga } from "@/common/interfaces/liga";
import api from "@/services/api";

export class LigaApiService {
  static async getAll() {
    return api.get(`/ligas`);
  }
}