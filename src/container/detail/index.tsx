import React, {useEffect, useState} from 'react';
import api from '../../../stubs/api';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const DetailPage = (): React.ReactElement => {
    const [cryptoInfo, setCryptoInfo] = useState<any>(null);
    const [chartData, setChartData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Шаг 1: Авторизация
                const token = await api.login('testUser', 'password123');
                console.log('Успешная авторизация, токен:', token);

                // Шаг 2: Получение информации о Bitcoin
                const info = await api.getInfo('bitcoin');
                setCryptoInfo(info);

                // Шаг 3: Получение графика Bitcoin
                const chart = await api.getChart('bitcoin');
                setChartData(chart);

            } catch (err: any) {
                setError(err.message || 'Ошибка');
                console.error(err);
            }
        };

        fetchData();
    }, []); // Выполняется один раз при монтировании компонента

    // Проверяем, существует ли chartData и имеет ли он правильную структуру
    const prepareChartData = () => {
        if (!chartData || !chartData.prices) {
            return [];
        }
        return chartData.prices.map((priceData: any) => ({
            timestamp: priceData.date,
            price: priceData.price
        }));
    };

    return (
        <div>
            <h1>Detail Page</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}

            {/* Отображение информации о криптовалюте */}
            {cryptoInfo ? (
                <div>
                    <h2>Информация о Bitcoin</h2>
                    <p>{cryptoInfo.description}</p>
                    <a href={cryptoInfo.links.homepage[0]} target="_blank" rel="noopener noreferrer">
                        Перейти на сайт Bitcoin
                    </a>
                </div>
            ) : (
                <p>Загрузка информации о криптовалюте...</p>
            )}

            {/* Отображение графика криптовалюты */}
            {chartData ? (
                <div>
                    <h2>График Bitcoin</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={prepareChartData()}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="timestamp"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="price" stroke="#8884d8"/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <p>Загрузка графика...</p>
            )}
        </div>
    );
};

export default DetailPage;
