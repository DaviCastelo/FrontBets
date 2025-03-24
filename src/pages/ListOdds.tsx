import { OddsFixture, OddsLeague, OddsTeam } from "@/common/interfaces/odds";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

interface ListOddsProps {
  oddsTeams: OddsTeam[];
  oddsFixtures: OddsFixture[];
  oddsLeagues: OddsLeague[];
}

export const ListOdds = ({
  oddsTeams,
  oddsFixtures,
  oddsLeagues,
}: ListOddsProps) => {
  return (
    <div className="p-4">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Odds de Gols Acima de 2.5</h2>

        <Accordion>
          <AccordionSummary>
            <Typography className="text-lg font-semibold">
              Times com maior tendência de Over 2.5
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {oddsTeams.map((team) => (
                <li key={team.id} className="p-2 border-b">
                  <p className="font-bold">
                    {team.full_name} ({team.country})
                  </p>
                  <p>Total de jogos: {team.seasonMatchesPlayed_overall}</p>
                  <p>
                    Média de gols por jogo: {team.seasonAVG_overall.toFixed(2)}
                  </p>
                  <p>
                    Over 2.5 em {team.seasonOver25Percentage_overall}% dos jogos
                    ({team.seasonOver25Num_overall} de{" "}
                    {team.seasonMatchesPlayed_overall})
                  </p>
                  <p>Odds Over 2.5: {team.odds_ft_over25}</p>
                  <p>
                    Próximo jogo: {team.next_match_team} -{" "}
                    {new Date(team.next_match_date * 1000).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="p-4">
        <Accordion>
          <AccordionSummary>
            <Typography className="text-lg font-semibold">
              Melhores Partidas para Over 2.5
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {oddsFixtures.map((fixture) => (
                <li key={fixture.id} className="p-2 border-b">
                  <p className="font-bold">
                    {fixture.home_name} vs {fixture.away_name}
                  </p>
                  <p>Odds Over 2.5: {fixture.odds_ft_over}</p>
                  <p>Potencial de Over 2.5: {fixture.o25_potential}%</p>
                  <p>Progresso: {fixture.progress}%</p>
                  <p>País: {fixture.country}</p>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="p-4">
        <Accordion>
          <AccordionSummary>
            <Typography className="text-lg font-semibold">
              Melhores Ligas para Odds
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {oddsLeagues.map((league) => (
                <li key={league.league_id} className="p-2 border-b">
                  <p className="font-bold">
                    {league.league_name} ({league.country})
                  </p>
                  <p>BTTS em {league.btts_percentage}% dos jogos</p>
                  <p>Escala Doméstica: {league.domestic_scale}</p>
                  <p>Escala Internacional: {league.international_scale}</p>
                  <p>Início da temporada: {league.starting_year}</p>
                  <p>Término da temporada: {league.ending_year}</p>
                  <p>Status: {league.status}</p>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
