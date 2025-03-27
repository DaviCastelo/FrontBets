import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import CircularProgress from "@mui/material/CircularProgress";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Index from "./pages";
import { DetailsReferee } from "./pages/DetailsReferee";
import Login from "./pages/login";
import NotFound from "./pages/NotFound";
import { PlayerIndividual } from "./pages/PlayerIndividual";
import Register from "./pages/Register";
import TeamDetails from "./pages/TeamDetails";
import { DetailsMatch } from "./pages/MatchsDetails";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Routes>
      {/* <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
      /> */}
      {/* <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/" replace /> : <Register />}
      /> */}
      <Route
        path="/"
        element={
          
            <Index />
          
        }
      />
      <Route
        path="/team/:id"
        element={
          
            <TeamDetails />
          
        }
      />
      <Route
        path="/player/:id"
        element={
          
            <PlayerIndividual />
          
        }
      />
      <Route
        path="/matchs-datails/:id"
        element={
          
            <DetailsMatch />
          
        }
      />

      <Route
        path="/referee/:id"
        element={
          
            <DetailsReferee />
          
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AuthProvider>
          <TooltipProvider>
            <AppRoutes />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
