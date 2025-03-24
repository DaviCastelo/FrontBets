export type MatchData = {
  id: number;
  home_name: string;
  away_name: string;
  homeID: number;
  awayID: number;
  roundID: number;
  competition_id: number;
  season: string;
  status: string;
  game_week: number;
  date_unix: number;
  homeGoals: number[];
  awayGoals: number[];
  homeGoalCount: number;
  awayGoalCount: number;
  totalGoalCount: number;
  team_a_shots: number;
  team_b_shots: number;
  team_a_shotsOnTarget: number;
  team_b_shotsOnTarget: number;
  team_a_shotsOffTarget: number;
  team_b_shotsOffTarget: number;
  team_a_possession: number;
  team_b_possession: number;
  team_a_yellow_cards: number;
  team_b_yellow_cards: number;
  team_a_red_cards: number;
  team_b_red_cards: number;
  team_a_fouls: number;
  team_b_fouls: number;
  team_a_corners: number;
  team_b_corners: number;
  team_a_offsides: number;
  team_b_offsides: number;
  odds_ft_1: number;
  odds_ft_x: number;
  odds_ft_2: number;
  odds_ft_over_1_5: number;
  odds_ft_under_1_5: number;
  odds_ft_over_2_5: number;
  odds_ft_under_2_5: number;
  odds_ft_over_3_5: number;
  odds_ft_under_3_5: number;
  stadium_name: string;
  refereeID: number;
  home_url: string;
  away_url: string;
  home_image: string;
  away_image: string;
  match_url: string;
};

export type MatchsDetails = {
  id: number;
  homeID: number;
  awayID: number;
  season: string;
  status: string;
  roundID: number;
  game_week: number;
  revised_game_week: number;
  homeGoals: string[];
  awayGoals: string[];
  homeGoalCount: number;
  awayGoalCount: number;
  totalGoalCount: number;
  team_a_corners: number;
  team_b_corners: number;
  totalCornerCount: number;
  team_a_offsides: number;
  team_b_offsides: number;
  team_a_yellow_cards: number;
  team_b_yellow_cards: number;
  team_a_red_cards: number;
  team_b_red_cards: number;
  team_a_shotsOnTarget: number;
  team_b_shotsOnTarget: number;
  team_a_shotsOffTarget: number;
  team_b_shotsOffTarget: number;
  team_a_shots: number;
  team_b_shots: number;
  team_a_fouls: number;
  team_b_fouls: number;
  team_a_possession: number;
  team_b_possession: number;
  refereeID: number;
  coach_a_ID: number;
  coach_b_ID: number;
  stadium_name: string;
  stadium_location: string;
  team_a_cards_num: number;
  team_b_cards_num: number;

  odds_ft_1: number;
  odds_ft_x: number;
  odds_ft_2: number;

  overallGoalCount: number;
  ht_goals_team_a: number;
  ht_goals_team_b: number;
  goals_2hg_team_a: number;
  goals_2hg_team_b: number;
  GoalCount_2hg: number;
  HTGoalCount: number;
  date_unix: number;
  winningTeam: number;
  no_home_away: number;
  btts_potential: number;
  btts_fhg_potential: number;
  btts_2hg_potential: number;
  goalTimingDisabled: number;
  attendance: number;

  lineups: {
    team_a: Array<{
      player_id: number;
      shirt_number: number;
      player_events: Array<{
        event_type: string;
        event_time: string;
      }>;
    }>;
  };

  bench: {
    team_a: Array<{
      player_in_id: number;
      player_in_shirt_number: number;
      player_out_id: number;
      player_out_time: string;
    }>;
    team_b: Array<{
      player_in_id: number;
      player_in_shirt_number: number;
      player_out_id: number;
      player_out_time: string;
    }>;
  };

  // Goals and cards details
  team_a_goal_details: Array<{
    player_id: number;
    time: string;
    extra: null;
    assist_player_id: number;
  }>;

  trends: {
    home: [string, string][];
    away: [string, string][];
  };

  h2h: {
    team_a_id: number;
    team_b_id: number;
    previous_matches_results: {
      team_a_win_home: number;
      team_a_win_away: number;
      team_b_win_home: number;
      team_b_win_away: number;
      draw: number;
      team_a_wins: number;
      team_b_wins: number;
      totalMatches: number;
      team_a_win_percent: number;
      team_b_win_percent: number;
    };
    betting_stats: {
      over05: number;
      over15: number;
      // ... (adicionar todas as propriedades de estatísticas)
    };
    previous_matches_ids: Array<{
      id: number;
      date_unix: number;
      team_a_id: number;
      team_b_id: number;
      team_a_goals: number;
      team_b_goals: number;
    }>;
  };

  // Weather data
  weather: {
    coordinates: {
      lat: number;
      lon: number;
    };
    temperature: {
      temp: number;
      unit: string;
    };
    humidity: string;
    wind: {
      degree: number;
      speed: string;
    };
    type: string;
    temperature_celcius: {
      temp: number;
      unit: string;
    };
    clouds: string;
    code: string;
    pressure: number;
  };
};
