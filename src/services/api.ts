import axios from "axios";

const api = axios.create({
  baseURL: "https://bet-web-nod.vercel.app/api",
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
  const response = await api.get("/leagues");
  return response.data;
};

export const fetchTeamsByLeague = async (seasonId: number) => {
  const response = await api.get(`/league-teams`, {
    params: { season_id: seasonId },
  });
  return response.data;
};

export const fetchTeamDetails = async (teamId: string) => {
  const response = await api.get(`/individual-team`, {
    params: { team_id: teamId },
  });
  return response.data;
};

export const fetchPlayerDetails = async (playerId: string) => {
  const response = await api.get(`/player`, {
    params: { player_id: playerId },
  });
  return response.data;
};

export const fetchRefereeDetails = async (refereeId: string) => {
  const response = await api.get(`/referee`, {
    params: { referee_id: refereeId },
  });
  return response.data;
};

export const fetchMatchDetails = async (matchId: string) => {
  const response = await api.get(`/match-details`, {
    params: { match_id: matchId },
  });
  return response.data;
};

export const fetchTodayMatches = async () => {
  const response = await api.get(`/today-matches`);
  return response.data;
};

export const fetchStandings = async (seasonId: number) => {
  const response = await api.get(`/league-table`, {
    params: { season_id: seasonId },
  });
  return response.data;
};

export const fetchCountry = async () => {
  const response = await api.get(`/country`);
  return response.data;
};

export const fetchOdd = async () => {
  const response = await api.get(`/odds`);
  return response.data;
};

export const fetchBtts = async () => {
  const response = await api.get(`/btts`);
  return response.data;
};

export const fetchLeagueSeason = async (seasonId: number) => {
  const response = await api.get(`/league-season`, {
    params: { season_id: seasonId },
  });
  return response.data;
};

export const fetchPlayersLeague = async (seasonId: number) => {
  const response = await api.get(`/league-players`, {
    params: { season_id: seasonId },
  });
  return response.data;
};

export const fetchRefereesLeague = async (seasonId: number) => {
  const response = await api.get(`/league-referees`, {
    params: { season_id: seasonId },
  });
  return response.data;
};

export const fetchMatchesLeague = async (seasonId: number) => {
  const response = await api.get(`/league-matches`, {
    params: { season_id: seasonId },
  });
  return response.data;
};

export const fetchStateOfLeague = async (seasonId: number) => {
  const response = await api.get(`/league-season`, {
    params: { season_id: seasonId },
  });
  return response.data;
};

export const fetchFixtures = async (leagueId: string, tipo: string) => {
  const response = await api.get(
    `/partidas??id_campeonato=${leagueId}&tipo=${tipo}`
  );
  return response.data;
};

export const fetchResults = async (leagueId: string, tipo: string) => {
  const response = await api.get(
    `/partidas??id_campeonato=${leagueId}&tipo=${tipo}`
  );
  return response.data;
};

export const scrapeFlashscore = async () => {
  const response = await api.post("/scrape-flashscore");
  return response.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/login", credentials);
  return response.data;
};

export default api;
