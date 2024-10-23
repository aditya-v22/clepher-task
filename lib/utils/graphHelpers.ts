import { CandlestickGraphData, Interval, StockMetaData, TimeSeriesIntradayStockData } from '../typedefs/stock';

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
    const open = parseFloat(entry['1. open']);
    const high = parseFloat(entry['2. high']);
    const low = parseFloat(entry['3. low']);
    const close = parseFloat(entry['4. close']);

    candlestickData.push({
      x: timestamp,
      y: [open, high, low, close],
    });
  }

  candlestickData.sort((a, b) => new Date(a.x).getTime() - new Date(b.x).getTime());

  return candlestickData;
};
