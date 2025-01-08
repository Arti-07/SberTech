export interface ChartPoint {
    timestamp: string;
    price: number;
}

export interface CryptoInfo {
    name: string;
    description: string;
    links: {
        homepage: string[];
    };
}

export interface Statistics {
    min: number;
    max: number;
    avg: number | null;
    median: number;
}
