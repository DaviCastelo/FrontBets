export type OddsFixture = {
  avg_potential: number;
  away_name: string;
  country: string;
  home_name: string;
  id: number;
  name: string;
  o25_potential: number;
  odds_ft_over: number;
  progress: number;
};

export type OddsLeague = {
  id: number;
  league_id: number;
  league_name: string;
  name: string;
  name_es: string;
  name_jp: string | null;
  name_kr: string | null;
  name_ru: string;
  name_tr: string;
  country: string;
  country_iso: string;
  division: number;
  domestic_scale: number;
  international_scale: number;
  comp_master_id: number;
  progress: number;
  seasonAVG_overall: number;
  seasonOver25Percentage_overall: number;
  starting_year: number;
  ending_year: number;
  status: string;
  btts_percentage: number;
};

export type OddsTeam = {
  id: number;
  name: string;
  full_name: string;
  country: string;
  country_iso: string;
  name_es: string;
  name_jp: string | null;
  name_kr: string | null;
  name_pt: string;
  name_ru: string;
  name_tr: string;
  next_match_id: number;
  next_match_date: number;
  next_match_team: string;
  odds_ft_over25: number;
  seasonAVG_overall: number;
  seasonMatchesPlayed_overall: number;
  seasonOver25Num_overall: number;
  seasonOver25Percentage_overall: number;
  seasonUnder25Percentage_overall: number;
};

export type OddsResponse = {
  top_fixtures: {
    title: string;
    list_type: "fixtures";
    data: OddsFixture[];
  };
  top_leagues: {
    title: string;
    list_type: "leagues";
    data: OddsLeague[];
  };
  top_teams: {
    title: string;
    list_type: "teams";
    data: OddsTeam[];
  };
};
