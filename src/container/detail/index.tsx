import React, {useEffect, useState} from 'react';
import api from '../../api';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {stripHtml, truncateDescription} from './utils/descriptionUtils';
import {prepareChartData, calculateTrendLine, calculateAveragePrice, calculateStatistics} from './utils/chartUtils';
import {PageContainer, ChartContainer, InfoContainer, CryptoLink, ChartTitle} from './DetailPageStyles';

const DetailPage = (): React.ReactElement => {
    const [cryptoInfo, setCryptoInfo] = useState<any>(null);
    const [chartData, setChartData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cryptoName = 'ethereum';

                await api.login('testUser', 'password123');
                /*
                const token = document.cookie('token');
                if (!token) {
                    throw new Error('Token not found in cookies');
                }
                */
                //console.log('Успешная авторизация, токен:', token);

                const info = await api.getInfo(cryptoName);
                setCryptoInfo({...info, name: cryptoName});

                const chart = await api.getChart(cryptoName);
                setChartData(chart);
            } catch (err: any) {
                setError(err.message || 'Ошибка');
                console.error(err);
            }
        };

        fetchData();
    }, []);

    const formattedData = prepareChartData(chartData);
    const trendLineData = calculateTrendLine(formattedData);
    const averagePrice = calculateAveragePrice(formattedData);
    const statistics = calculateStatistics(formattedData);

    return (
        <PageContainer>
            <ChartContainer>
                <div>
                    <h2 css={ChartTitle}>{cryptoInfo?.name?.toUpperCase() || 'Crypto'}</h2>
                    {chartData ? (
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={formattedData}>
                                <CartesianGrid stroke="#444" strokeDasharray="5 5"/>
                                <XAxis dataKey="timestamp" stroke="#ccc"/>
                                <YAxis domain={['auto', 'auto']} stroke="#ccc"/>
                                <Tooltip contentStyle={{backgroundColor: '#333', border: 'none', color: '#fff'}}/>
                                <Legend wrapperStyle={{color: '#fff'}}/>
                                <Line type="monotone" dataKey="price" stroke="#00ff3c" strokeWidth={2} dot={{r: 3}}/>
                            </LineChart>
                        </ResponsiveContainer>
                    ) : (
                        <p>Loading chart...</p>
                    )}
                    {chartData ? (
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart
                                data={formattedData}
                                style={{backgroundColor: '#1e1e1e', borderRadius: '8px'}}
                                margin={{top: 10, right: 30, left: 20, bottom: 10}}
                            >
                                <CartesianGrid stroke="#444" strokeDasharray="5 5"/>
                                <XAxis dataKey="timestamp" stroke="#ccc"/>
                                <YAxis
                                    domain={[
                                        (dataMin: number) => dataMin * 0.95,
                                        (dataMax: number) => dataMax * 1.05,
                                    ]}
                                    stroke="#ccc"
                                    tick={{fill: '#ccc', fontSize: 12}}
                                    tickFormatter={(value: number) => `$${value.toFixed(2)}`}
                                />
                                <Tooltip
                                    contentStyle={{backgroundColor: '#333', border: 'none', color: '#fff'}}
                                    formatter={(value: number) => `$${value.toFixed(2)}`}
                                />
                                <Legend
                                    wrapperStyle={{color: '#fff', textAlign: 'center', padding: '10px 0'}}
                                    iconType="square"
                                />
                                <Line type="monotone" dataKey="price" stroke="#00ff3c" strokeWidth={2} dot={{r: 3}}/>
                                <Line
                                    type="monotone"
                                    data={trendLineData}
                                    dataKey="price"
                                    stroke="#ff5722"
                                    strokeDasharray="5 5"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                    ) : (
                        <p>Loading chart...</p>
                    )}
                </div>
            </ChartContainer>

            <InfoContainer>
                <h2>About {cryptoInfo?.name || 'Crypto'}</h2>
                <p>{truncateDescription(stripHtml(cryptoInfo?.description || ''))}</p>
                <p className="price">Average Price: ${averagePrice?.toFixed(2)}</p>
                {statistics && (
                    <ul>
                        <li className="price">Min Price: ${statistics.min.toFixed(2)}</li>
                        <li className="price">Max Price: ${statistics.max.toFixed(2)}</li>
                        <li className="price">Median Price: ${statistics.median.toFixed(2)}</li>
                    </ul>
                )}
                <CryptoLink
                    href={cryptoInfo?.links.homepage[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit {cryptoInfo?.name || 'Website'}
                </CryptoLink>
            </InfoContainer>

        </PageContainer>
    );
};
export default DetailPage;
