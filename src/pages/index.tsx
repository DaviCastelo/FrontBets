import { ILiga } from "@/common/interfaces/liga";
import { EmptyLeagueState } from "@/components/leagues/EmptyLeagueState";
import { LeagueHeader } from "@/components/leagues/LeagueHeader";
import { StandingsTable } from "@/components/leagues/StandingsTable";
import { TeamsList } from "@/components/leagues/TeamsList";
import { LeagueSidebar } from "@/components/LeagueSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  fetchBtts,
  fetchMatchesLeague,
  fetchOdd,
  fetchPlayersLeague,
  fetchRefereesLeague,
  fetchStandings,
  fetchStateOfLeague,
  fetchTeamsByLeague,
  fetchTodayMatches,
} from "@/services/api";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import { CalendarDays, Trophy, Users } from "lucide-react";
import { useState } from "react";
import { ListPlayers } from "./ListPlayers";
import { ListRefeers } from "./ListReferees";
import { Match } from "./Match";
import { StateLeague } from "./StateOfLeague";
import { TodayMatchs } from "./TodayPages";
import { ListOdds } from "./ListOdds";
import { ListBtts } from "./ListBtts";

const Index = () => {
  const [selectedLeague, setSelectedLeague] = useState<ILiga | undefined>();

  const { data: queryStandings, isFetching: isFetchingStandings } = useQuery({
    queryKey: ["standings", selectedLeague?.season],
    queryFn: () => {
      const seasonId = localStorage.getItem("selectedSeasonId");
      return seasonId ? fetchStandings(Number(seasonId)) : null;
    },
    enabled: !!selectedLeague || !!localStorage.getItem("selectedSeasonId"),
  });

  const { data: querytodayMatches, isFetching: isTodayMatches } = useQuery({
    queryKey: ["todayMatches"],
    queryFn: fetchTodayMatches,
  });

  const { data: isTeam, isFetching: isFetchingTeams } = useQuery({
    queryKey: ["teams", selectedLeague?.season],
    queryFn: () => {
      const seasonId = localStorage.getItem("selectedSeasonId");
      return seasonId ? fetchTeamsByLeague(Number(seasonId)) : null;
    },
    enabled: !!selectedLeague || !!localStorage.getItem("selectedSeasonId"),
  });

  const { data: isRefereeLeague, isFetching: isFetchingReferreLeague } =
    useQuery({
      queryKey: ["leagueReferee", selectedLeague?.season],
      queryFn: () => {
        const seasonId = localStorage.getItem("selectedSeasonId");
        return seasonId ? fetchRefereesLeague(Number(seasonId)) : null;
      },
      enabled: !!selectedLeague || !!localStorage.getItem("selectedSeasonId"),
    });

  const { data: isPlayers, isFetching: isFetchingPlays } = useQuery({
    queryKey: ["leaguePlayer", selectedLeague?.season],
    queryFn: () => {
      const seasonId = localStorage.getItem("selectedSeasonId");
      return seasonId ? fetchPlayersLeague(Number(seasonId)) : null;
    },
    enabled: !!selectedLeague || !!localStorage.getItem("selectedSeasonId"),
  });

  const { data: isMatchesLeague, isFetching: isFetchingMatchesLeague } =
    useQuery({
      queryKey: ["matchesLeague", selectedLeague?.season],
      queryFn: () => {
        const seasonId = localStorage.getItem("selectedSeasonId");
        return seasonId ? fetchMatchesLeague(Number(seasonId)) : null;
      },
      enabled: !!selectedLeague || !!localStorage.getItem("selectedSeasonId"),
    });

  const { data: isStateOfLeague, isFetching: isFetchingStateOfLeague } =
    useQuery({
      queryKey: ["statesOfLeague", selectedLeague?.season],
      queryFn: () => {
        const seasonId = localStorage.getItem("selectedSeasonId");
        return seasonId ? fetchStateOfLeague(Number(seasonId)) : null;
      },
      enabled: !!selectedLeague || !!localStorage.getItem("selectedSeasonId"),
    });

  const { data: queryOdds, isFetching: isOdds } = useQuery({
    queryKey: ["odds"],
    queryFn: fetchOdd,
  });

  const { data: queryBtts, isFetching: isbtts } = useQuery({
    queryKey: ["btts"],
    queryFn: fetchBtts,
  });

  const loading =
    isFetchingPlays ||
    isFetchingStandings ||
    isFetchingTeams ||
    isTodayMatches ||
    isFetchingStateOfLeague ||
    isFetchingMatchesLeague ||
    isFetchingReferreLeague ||
    isOdds ||
    isbtts;

  const teams = isTeam?.data ?? [];

  const standings = queryStandings?.data?.all_matches_table_home ?? [];

  const leaguePlayer = isPlayers?.data ?? [];

  const matchesLeague = isMatchesLeague?.data ?? [];

  const todayMatches = querytodayMatches?.data ?? [];

  const statesOfLeague = isStateOfLeague?.data ?? [];

  const leagueReferee = isRefereeLeague?.data ?? [];

  const oddsTeams = queryOdds?.data?.top_teams?.data ?? [];
  const oddsFixtures = queryOdds?.data?.top_fixtures?.data ?? [];
  const oddsLeagues = queryOdds?.data?.top_leagues?.data ?? [];

  const bttsTeams = queryBtts?.data?.top_teams?.data ?? [];
  const bttsFixtures = queryBtts?.data?.top_fixtures?.data ?? [];
  const bttsLeagues = queryBtts?.data?.top_leagues?.data ?? [];

  return (
    <div className="flex min-h-screen bg-background">
      <LeagueSidebar
        onSelectLeague={setSelectedLeague}
        selectedLeague={selectedLeague}
      />
      <main className="flex-1 p-6 animate-fadeIn">
        <LeagueHeader selectedLeague={selectedLeague} />

        {selectedLeague ? (
          <Tabs defaultValue="standings" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger
                value="standings"
                className="flex items-center gap-2"
              >
                <Trophy className="w-4 h-4" />
                Classificação
              </TabsTrigger>
              <TabsTrigger value="teams" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Times
              </TabsTrigger>
              <TabsTrigger
                value="leaguePlayer"
                className="flex items-center gap-2"
              >
                <CalendarDays className="w-4 h-4" />
                Jogadores da Liga
              </TabsTrigger>
              <TabsTrigger
                value="leagueReferee"
                className="flex items-center gap-2"
              >
                <CalendarDays className="w-4 h-4" />
                Arbitros da Liga
              </TabsTrigger>
              <TabsTrigger
                value="todayMatches"
                className="flex items-center gap-2"
              >
                <CalendarDays className="w-4 h-4" />
                Jogos de Hoje
              </TabsTrigger>
              <TabsTrigger
                value="matchesLeague"
                className="flex items-center gap-2"
              >
                <CalendarDays className="w-4 h-4" />
                Resultados
              </TabsTrigger>

              <TabsTrigger
                value="statesOfLeague"
                className="flex items-center gap-2"
              >
                <CalendarDays className="w-4 h-4" />
                States da Liga
              </TabsTrigger>

              <TabsTrigger value="fixtures" className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Próximos Jogos
              </TabsTrigger>

              <TabsTrigger value="odds" className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Over 2.5 Stats
              </TabsTrigger>

              <TabsTrigger value="btts" className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                BTTS Stats
              </TabsTrigger>
              {/* <TabsTrigger value="results" className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Resultados
              </TabsTrigger> */}
            </TabsList>

            {loading ? (
              <div className="flex justify-center items-center h-[50vh]">
                <CircularProgress />
              </div>
            ) : (
              <>
                <TabsContent value="standings" className="animate-fadeIn">
                  {<StandingsTable standings={standings} />}
                </TabsContent>

                <TabsContent value="teams" className="animate-fadeIn">
                  {<TeamsList teams={teams} />}
                </TabsContent>

                <TabsContent value="leaguePlayer" className="animate-fadeIn">
                  {<ListPlayers players={leaguePlayer}></ListPlayers>}
                </TabsContent>

                <TabsContent value="matchesLeague" className="animate-fadeIn">
                  {<Match matchs={matchesLeague}></Match>}
                </TabsContent>

                <TabsContent value="todayMatches" className="animate-fadeIn">
                  {<TodayMatchs todayMatches={todayMatches}></TodayMatchs>}
                </TabsContent>

                <TabsContent value="statesOfLeague" className="animate-fadeIn">
                  {<StateLeague statesOfLeague={statesOfLeague}></StateLeague>}
                </TabsContent>

                <TabsContent value="leagueReferee" className="animate-fadeIn">
                  {<ListRefeers referees={leagueReferee}></ListRefeers>}
                </TabsContent>

                <TabsContent value="odds" className="animate-fadeIn">
                  {
                    <ListOdds
                      oddsTeams={oddsTeams}
                      oddsFixtures={oddsFixtures}
                      oddsLeagues={oddsLeagues}
                    />
                  }
                </TabsContent>

                <TabsContent value="btts" className="animate-fadeIn">
                  {
                    <ListBtts
                      bttsTeams={bttsTeams}
                      bttsFixtures={bttsFixtures}
                      bttsLeagues={bttsLeagues}
                    ></ListBtts>
                  }
                </TabsContent>

                {/* <TabsContent value="fixtures" className="animate-fadeIn">
                  {fixtures && <MatchList matches={fixtures} />}
                </TabsContent> */}

                {/* <TabsContent value="results" className="animate-fadeIn">
                  {results && <MatchList matches={results} />}
                </TabsContent> */}
              </>
            )}
          </Tabs>
        ) : (
          <EmptyLeagueState />
        )}
      </main>
    </div>
  );
};

export default Index;
