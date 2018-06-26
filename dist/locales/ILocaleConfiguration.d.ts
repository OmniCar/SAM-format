export interface ILocaleConfiguration {
    currency: {
        symbol: string;
        name: {
            long: string;
            short: string;
        };
        numDecimals: number;
    };
    date: {
        format: string;
        name: {
            long: string;
            short: string;
        };
    };
    mileage: {
        name: {
            long: string;
            short: string;
        };
        numDecimals: number;
    };
    separators: {
        thousand: string;
        decimal: string;
        minute: string;
    };
}
