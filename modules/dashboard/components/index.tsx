'use client';

import { Interval, TimeSeriesIntradayStockData } from '@/lib/typedefs/stock';
import { convertToCandlestickData } from '@/lib/utils/graphHelpers';
import React, { useCallback, useMemo, useState } from 'react';
import { CandlestickChart } from '@/components/charts/Candlestick';
import { Form } from './Form';
import { getTimeSeriesIntradayData } from '@/lib/apis/timeSeriesIntraday';
import { Loader } from 'lucide-react';

interface DashboardProps {
  stockData: TimeSeriesIntradayStockData;
}

export const Dashboard: React.FC<DashboardProps> = ({ stockData }) => {
  const [timeSeriesIntradayData, setTimeSeriesIntradayData] = useState<TimeSeriesIntradayStockData>(stockData);
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState<Interval>(Interval.FiveMin);

  const candlestickData = useMemo(
    () => convertToCandlestickData(timeSeriesIntradayData, interval) || [],
    [timeSeriesIntradayData, interval]
  );

  const fetchTimeSeriesIntradayData = useCallback(
    async (interval: Interval) => {
      if (loading) {
        return null;
      }

      setLoading(true);

      const data = await getTimeSeriesIntradayData(interval);

      setInterval(interval);
      setTimeSeriesIntradayData(data);
      setLoading(false);
    },
    [loading]
  );

  return (
    <div className='flex flex-col gap-10 items-center mt-20'>
      <Form
        interval={interval}
        loading={loading}
        onIntervalChange={fetchTimeSeriesIntradayData}
      />

      {loading && (
        <div className='h-[600px] w-[1000px] flex justify-center items-center'>
          <Loader
            size={24}
            className='animate-spin text-indigo-500'
          />
        </div>
      )}

      {!loading && !candlestickData.length && (
        <div className='h-[600px] w-[1000px] flex justify-center items-center text-lg font-semibold text-gray-600'>
          No data available
        </div>
      )}

      <CandlestickChart
        loading={loading}
        id='time-series-intraday-chart'
        series={[
          {
            name: 'time-series-intraday',
            data: candlestickData,
          },
        ]}
      />
    </div>
  );
};
