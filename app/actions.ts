import { getTimeSeriesIntradayData } from '@/lib/apis/timeSeriesIntraday';
import { Interval } from '@/lib/typedefs/stock';

export const fetchTimeSeriesIntradayData = async (interval?: Interval) => {
  return await getTimeSeriesIntradayData(interval);
};
