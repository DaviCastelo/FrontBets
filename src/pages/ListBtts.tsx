import { OddsFixture, OddsLeague, OddsTeam } from "@/common/interfaces/odds";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ListBttsProps {
  bttsTeams: OddsTeam[];
  bttsFixtures: OddsFixture[];
  bttsLeagues: OddsLeague[];
}

export const ListBtts = ({
  bttsTeams,
  bttsFixtures,
  bttsLeagues,
}: ListBttsProps) => {
  return (
    <div className="p-4">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Odds de BTTS</h2>

        <Accordion>
          <AccordionSummary>
            <Typography className="text-lg font-semibold">
              Times com maior tendência de BTTS
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {bttsTeams.map((team) => (
                <li key={team.id} className="p-2 border-b">
                  <p className="font-bold">
                    {team.full_name} ({team.country})
                  </p>
                  <p>Total de jogos: {team.seasonMatchesPlayed_overall}</p>
                  <p>
                    BTTS em {team.seasonOver25Percentage_overall}% dos jogos (
                    {team.seasonOver25Num_overall} de{" "}
                    {team.seasonMatchesPlayed_overall})
                  </p>
                  <p>Odds BTTS Sim: {team.odds_ft_over25}</p>
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
        {/* Melhores Partidas para BTTS */}
        <Accordion>
          <AccordionSummary>
            <Typography className="text-lg font-semibold">
              Melhores Partidas para BTTS
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {bttsFixtures.map((fixture) => (
                <li key={fixture.id} className="p-2 border-b">
                  <p className="font-bold">
                    {fixture.home_name} vs {fixture.away_name}
                  </p>
                  <p>Odds BTTS Sim: {fixture.odds_ft_over}</p>
                  <p>Potencial de BTTS: {fixture.o25_potential}%</p>
                  <p>Progresso: {fixture.progress}%</p>
                  <p>País: {fixture.country}</p>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="p-4">
        {/* Melhores Ligas para BTTS */}
        <Accordion>
          <AccordionSummary>
            <Typography className="text-lg font-semibold">
              Melhores Ligas para BTTS
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {bttsLeagues.map((league) => (
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
