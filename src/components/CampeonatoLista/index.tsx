import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { ILiga } from "@/common/interfaces/liga";
import CircularProgress from "@mui/material/CircularProgress";
import { LigaApiService } from "@/api/liga";
import Flag from "react-world-flags";
import { getCode } from "country-list";

const CampeonatoLista = ({ onLigaSelect }: { onLigaSelect: (liga: { nome: string; id: number; logo: string }) => void }) => {
    const [ligas, setLigas] = useState<ILiga[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const formatarParaURL = (texto: string): string => {
        return encodeURIComponent(texto);
    };

    useEffect(() => {
        const fetchLigas = async () => {
            try {
                const response = await LigaApiService.getAll();
                setLigas(response.data.ligas);
                setLoading(false);
            } catch (err) {
                setError("Erro ao carregar as ligas");
                setLoading(false);
            }
        };

        fetchLigas();
    }, []);

    const handleLigaClick = (liga: ILiga) => {
        const nomeCodificado = formatarParaURL(liga.nome || "");
        const ligaSelecionada = { nome: nomeCodificado, id: liga.id, logo: liga.logo ?? "" };
        onLigaSelect(ligaSelecionada); 
    };

    const getCountryCode = (countryName: string): string => {
        return getCode(countryName) || "";
    };

    return (
        <>
            <S.SpanCampeonatos>Campeonatos</S.SpanCampeonatos>
            {loading && <p style={{ color: "white" }}><CircularProgress size={24} color="inherit" /></p>}
            {error && <p>{error}</p>}
            {!loading && !error && ligas.length > 0 && (
                <S.ListaLigas>
                    {ligas.map((liga) => (
                        <S.Liga key={liga.id}>
                            <S.LinkLiga onClick={() => handleLigaClick(liga)}>
                                <Flag
                                    code={getCountryCode(liga.pais || "")}
                                    style={{ width: 20, height: 15, marginRight: 8 }}
                                />
                                {liga.nome}
                            </S.LinkLiga>
                        </S.Liga>
                    ))}
                </S.ListaLigas>
            )}
            {!loading && !error && ligas.length === 0 && <p>Nenhuma liga encontrada.</p>}
        </>
    );
};

export default CampeonatoLista;