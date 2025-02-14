
import { ILiga } from "@/common/interfaces/liga";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, RotateCw } from "lucide-react";
import { scrapeFlashscore } from "@/services/api";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface LeagueHeaderProps {
  selectedLeague: ILiga | undefined;
}

export const LeagueHeader = ({ selectedLeague }: LeagueHeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async () => {
    try {
      setIsUpdating(true);
      await scrapeFlashscore();
      toast({
        title: "Sucesso!",
        description: "As informações foram atualizadas com sucesso.",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível atualizar as informações.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex justify-between items-center mb-6 pt-10 md:pt-0">
      {selectedLeague ? (
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {selectedLeague.nome}
          </h1>
          <p className="text-sm text-muted-foreground">{selectedLeague.pais}</p>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={handleUpdate}
          disabled={isUpdating}
          className="gap-2"
        >
          <RotateCw className={`h-4 w-4 ${isUpdating ? 'animate-spin' : ''}`} />
          Atualizar informações
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      </div>
    </div>
  );
};
