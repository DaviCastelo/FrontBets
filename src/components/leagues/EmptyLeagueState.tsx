import { Trophy } from "lucide-react";

export const EmptyLeagueState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-2rem)]">
      <Trophy className="w-16 h-16 text-emerald-500 mb-4" />
      <h2 className="text-xl font-semibold text-foreground">
        Selecione uma Liga
      </h2>
      <p className="text-muted-foreground">
        Escolha uma liga no menu lateral para ver seus detalhes
      </p>
    </div>
  );
};
