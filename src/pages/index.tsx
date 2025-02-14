import { useState } from "react";
import { LeagueSidebar } from "@/components/LeagueSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import {
  fetchStandings,
  fetchTeamsByLeague,
  fetchFixtures,
  fetchResults,
} from "@/services/api";
import { CalendarDays, Trophy, Users } from "lucide-react";
import { ILiga } from "@/common/interfaces/liga";
import { StandingsTable } from "@/components/leagues/StandingsTable";
import { TeamsList } from "@/components/leagues/TeamsList";
import { MatchList } from "@/components/leagues/MatchList";
import { LeagueHeader } from "@/components/leagues/LeagueHeader";
import { EmptyLeagueState } from "@/components/leagues/EmptyLeagueState";
import CircularProgress from "@mui/material/CircularProgress";

const Index = () => {
  const [selectedLeague, setSelectedLeague] = useState<ILiga | undefined>();

  const { data: standings, isFetching: isFetchingStandings } = useQuery({
    queryKey: ["standings", selectedLeague?.id],
    queryFn: () =>
      selectedLeague ? fetchStandings(selectedLeague.id.toString()) : null,
    enabled: !!selectedLeague,
  });

  const { data: results, isFetching: isFetchingResults } = useQuery({
    queryKey: ["results", selectedLeague?.id],
    queryFn: () =>
      selectedLeague
        ? fetchResults(selectedLeague.id.toString(), "results")
        : null,
    enabled: !!selectedLeague,
  });

  const { data: teams, isFetching: isFetchingTeams } = useQuery({
    queryKey: ["teams", selectedLeague?.id],
    queryFn: () =>
      selectedLeague ? fetchTeamsByLeague(selectedLeague.nome) : null,
    enabled: !!selectedLeague,
  });

  const { data: fixtures, isFetching: isFetchingFixtures } = useQuery({
    queryKey: ["fixtures", selectedLeague?.id],
    queryFn: () =>
      selectedLeague
        ? fetchFixtures(selectedLeague.id.toString(), "fixtures")
        : null,
    enabled: !!selectedLeague,
  });

  const loading =
    isFetchingStandings ||
    isFetchingResults ||
    isFetchingTeams ||
    isFetchingFixtures;

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
              <TabsTrigger value="fixtures" className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Próximos Jogos
              </TabsTrigger>
              <TabsTrigger value="results" className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                Resultados
              </TabsTrigger>
            </TabsList>

            {loading ? (
              <div className="flex justify-center items-center h-[50vh]">
                <CircularProgress />
              </div>
            ) : (
              <>
                <TabsContent value="standings" className="animate-fadeIn">
                  {standings && <StandingsTable standings={standings} />}
                </TabsContent>

                <TabsContent value="teams" className="animate-fadeIn">
                  {teams && <TeamsList teams={teams} />}
                </TabsContent>

                <TabsContent value="fixtures" className="animate-fadeIn">
                  {fixtures && <MatchList matches={fixtures} />}
                </TabsContent>

                <TabsContent value="results" className="animate-fadeIn">
                  {results && <MatchList matches={results} />}
                </TabsContent>
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
