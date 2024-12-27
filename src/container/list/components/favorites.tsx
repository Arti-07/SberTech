import React, { useEffect, useState } from "react";
import FavoriteCard from "./favorite_card";
import api from "../../../api";
import { useTheme } from "@mui/material/styles";

interface CryptoData {
    name: string;
    imageUrl: string;
    price: number;
}

const Favorites = () => {
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const { palette } = useTheme(); // Получаем текущую тему

    const cryptoList = ["bitcoin", "tether", "ethereum", "solana", "dogecoin"];

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const allCryptoData = await api.getListings();
                const filteredData = allCryptoData.filter((crypto: any) =>
                    cryptoList.includes(crypto.name.toLowerCase())
                );

                const detailedDataPromises = filteredData.map(async (crypto: any) => {
                    const data = await api.getTicker(crypto.id, "USD");
                    // В зависимости от темы формируем путь к картинке
                    const themePath = palette.mode === 'dark' ? 'dark' : 'light';
                    const imageUrl = require(`../logo/${themePath}/${crypto.name.toLowerCase()}.png`);

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
