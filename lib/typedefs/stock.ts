export interface StockMetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Interval': string;
  '5. Output Size': string;
  '6. Time Zone': string;
}

export interface TimeSeriesIntradayEntry {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export interface TimeSeriesIntradayStockData {
  'Meta Data': StockMetaData;
  'Time Series (1min)'?: {
    [timestamp: string]: TimeSeriesIntradayEntry;
  };
  'Time Series (5min)'?: {
    [timestamp: string]: TimeSeriesIntradayEntry;
  };
  'Time Series (15min)'?: {
    [timestamp: string]: TimeSeriesIntradayEntry;
  };
  'Time Series (30min)'?: {
    [timestamp: string]: TimeSeriesIntradayEntry;
  };
  'Time Series (60min)'?: {
    [timestamp: string]: TimeSeriesIntradayEntry;
  };
}

export interface CandlestickGraphData {
  x: string;
  y: [number, number, number, number];
}

export enum Interval {
  OneMin = '1min',
  FiveMin = '5min',
  FifteenMin = '15min',
  ThirtyMin = '30min',
  OneHour = '60min',
}
