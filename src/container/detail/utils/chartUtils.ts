export const prepareChartData = (chartData: any[]): any[] => {
    if (!chartData || !Array.isArray(chartData)) {
        return [];
    }
    return chartData
        .filter((_, index) => index % 10 === 0) // Отображать только каждую 10-ю точку
        .map((priceData: any) => ({
            timestamp: new Date(priceData.date).toLocaleTimeString(),
            price: priceData.price,
        }));
};

export const calculateTrendLine = (data: any[]): any[] => {
    if (!data || data.length < 2) return [];
    const n = data.length;

    const meanX = data.reduce((sum, _, index) => sum + index, 0) / n;
    const meanY = data.reduce((sum, point) => sum + point.price, 0) / n;

    let numerator = 0;
    let denominator = 0;
    data.forEach((point, index) => {
        numerator += (index - meanX) * (point.price - meanY);
        denominator += (index - meanX) ** 2;
    });

    const slope = numerator / denominator;
    const intercept = meanY - slope * meanX;

    return data.map((_, index) => ({
        timestamp: data[index].timestamp,
        price: slope * index + intercept,
    }));
};

export const calculateAveragePrice = (data: any[]): number | null => {
    if (!data || data.length === 0) return null;
    const total = data.reduce((sum, point) => sum + point.price, 0);
    return total / data.length;
};

export const calculateStatistics = (data: any[]) => {
    if (!data || data.length === 0) return null;

    const prices = data.map(point => point.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const avg = calculateAveragePrice(data);

    prices.sort((a, b) => a - b);
    const mid = Math.floor(prices.length / 2);
    const median =
        prices.length % 2 !== 0 ? prices[mid] : (prices[mid - 1] + prices[mid]) / 2;

    return {min, max, avg, median};
}
