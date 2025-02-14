
import axios from "axios";

const api = axios.create({
  baseURL: "https://bet-api-2.vercel.app/api/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchLeagues = async () => {
  const response = await api.get("/ligas");
  return response.data;
};

export const fetchTeamsByLeague = async (league: string) => {
  const response = await api.get(`/times?liga=${league}`);
  return response.data;
};

export const fetchTeamDetails = async (id: string) => {
  const response = await api.get(`/times/${id}`);
  return response.data;
};

export const fetchTeamMatches = async (teamId: string, tipo: string) => {
  const response = await api.get(`/partidas/time?idTime=${teamId}&tipo=${tipo}`);
  return response.data.partidas;
};

export const fetchStandings = async (leagueId: string) => {
  const response = await api.get(`/classificacoes/${leagueId}`);
  return response.data;
};

export const fetchFixtures = async (leagueId: string, tipo: string) => {
  const response = await api.get(`/partidas??id_campeonato=${leagueId}&tipo=${tipo}`);
  return response.data;
};

export const fetchResults = async (leagueId: string, tipo: string) => {
  const response = await api.get(`/partidas??id_campeonato=${leagueId}&tipo=${tipo}`);
  return response.data;
};

export const scrapeFlashscore = async () => {
  const response = await api.post("/scrape-flashscore");
  return response.data;
};

export const login = async (credentials: { email: string; password: string }) => {
  const response = await api.post("/login", credentials);
  return response.data;
};

export default api;
