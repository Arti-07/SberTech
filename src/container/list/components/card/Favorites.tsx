import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";
import api from "../../../../api";
import { useTheme } from "@mui/material/styles";

interface CryptoData {
    name: string;
    id: number;
    imageUrl: string;
    price: number;
}

const Favorites = () => {
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const { palette } = useTheme();

    const cryptoList = ["bitcoin", "tether", "ethereum", "solana", "dogecoin"];

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const allCryptoData = await api.getListings();
                const filteredData = allCryptoData.filter((crypto: CryptoData) =>
                    cryptoList.includes(crypto.name.toLowerCase())
                );

                const detailedDataPromises = filteredData.map(async (crypto: CryptoData) => {
                    const data = await api.getTicker(crypto.id, 'USD');
                    const themePath = palette.mode === 'dark' ? 'dark' : 'light';
                    const imageUrl = await import(
                        `../../logo/${themePath}/${crypto.name.toLowerCase()}.png`
                        ).then(module => module.default);

                    return {
                        name: crypto.name,
                        imageUrl,
                        price: data?.price || 0,
                    };
                });

                const detailedData = await Promise.all(detailedDataPromises);
                setCryptoData(detailedData);
            } catch (error) {
                console.error("Failed to fetch crypto data", error);
            }
        };

        fetchCryptoData();
    }, [palette.mode]);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "10px",
                padding: "20px",
            }}
        >
            {cryptoData.map((crypto) => (
                <FavoriteCard
                    key={crypto.name}
                    title={crypto.name}
                    imageUrl={crypto.imageUrl}
                    price={crypto.price}
                />
            ))}
        </div>
    );
};

export default Favorites;
