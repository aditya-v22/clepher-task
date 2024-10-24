import { CandlestickGraphData, Interval, StockMetaData, TimeSeriesIntradayStockData } from '../typedefs/stock';

const keyMapping = {
  open: '1. open',
  high: '2. high',
  low: '3. low',
  close: '4. close',
};

export const convertToCandlestickData = (
  data: TimeSeriesIntradayStockData,
  interval: Interval = Interval.FiveMin
): CandlestickGraphData[] => {
  const timeSeriesKey = `Time Series (${interval})` as keyof StockMetaData;
  const timeSeries = data[timeSeriesKey as keyof TimeSeriesIntradayStockData];

  if (!timeSeries) {
    console.warn(`No data available for interval: ${interval}`);
    return []; // Return empty if no data exists for the interval
  }

  const candlestickData: CandlestickGraphData[] = [];

  for (const [timestamp, entry] of Object.entries(timeSeries)) {
    const open = parseFloat(entry[keyMapping.open]);
    const high = parseFloat(entry[keyMapping.high]);
    const low = parseFloat(entry[keyMapping.low]);
    const close = parseFloat(entry[keyMapping.close]);

    candlestickData.push({
      x: timestamp,
      y: [open, high, low, close],
    });
  }

  candlestickData.sort((a, b) => new Date(a.x).getTime() - new Date(b.x).getTime());

  return candlestickData;
};
