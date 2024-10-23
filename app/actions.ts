import { getTimeSeriesIntradayData } from '@/lib/apis/timeSeriesIntraday';

export const fetchTimeSeriesIntradayData = async () => {
  return await getTimeSeriesIntradayData();
};
