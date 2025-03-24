import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchTeamDetails } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Trophy,
  User,
  Users,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const TeamDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: teamData, isFetching: isFetchingTeam } = useQuery({
    queryKey: ["team", id],
    queryFn: () => fetchTeamDetails(id),
    enabled: !!id,
  });

  const handleBack = () => {
    navigate(-1);
  };

  if (isFetchingTeam) return <p>Carregando...</p>;
  if (!teamData) return <p>Nenhum dado encontrado</p>;
  const team = teamData.data[0];

  return (
    <div className="container mx-auto p-6">
      <Button
        variant="outline"
        onClick={handleBack}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </Button>

      <div className="mb-8 flex items-center gap-4">
        <img
          src={team?.image}
          alt={team?.name}
          className="w-32 h-32 object-contain rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold text-foreground">{team?.name}</h1>
          <p className="text-xl text-muted-foreground">{team?.country}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-500" />
              Informações Gerais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <p>
                  <span className="font-semibold">Estádio:</span>{" "}
                  {team?.season || "Não informado"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <p>
                  <span className="font-semibold">Posição na tabela:</span>{" "}
                  {team?.table_position || "Não informado"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="players" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="players" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Elenco
          </TabsTrigger>
          <TabsTrigger value="matches" className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            Partidas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="players" className="mt-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team?.jogadores.map((player) => (
              <Card
                key={player.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-lg">{player.nome}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="px-2 py-1 bg-muted rounded text-xs">
                          {player.posicao}
                        </span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">
                      {player.numero}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </TabsContent>

        <TabsContent value="matches" className="mt-6">
          {/* <div className="space-y-4">
            {Array.isArray(matches) &&
              matches.map((match) => (
                <Card
                  key={match.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={match.time_mandante.escudo}
                            alt={match.time_mandante.nome}
                            className="w-12 h-12 object-contain"
                          />
                          <span className="font-semibold">
                            {match.time_mandante.nome}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold px-4 py-2 bg-muted rounded-lg">
                            {match.placar_mandante} - {match.placar_visitante}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold">
                            {match.time_visitante.nome}
                          </span>
                          <img
                            src={match.time_visitante.escudo}
                            alt={match.time_visitante.nome}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {format(
                          new Date(match.data),
                          "dd 'de' MMMM 'de' yyyy",
                          {
                            locale: ptBR,
                          }
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div> */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamDetails;
