import api from '@/services/api';
import React, { useState } from 'react'

const RefreshButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const response = await api.post('/scrape-flashscore');
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Erro ao realizar o scraping.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleRefresh} disabled={loading}>
        {loading ? 'Carregando...' : 'Atualizar Partidas'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RefreshButton;