'use client';

import React, { useMemo } from 'react';
import { Props } from 'react-apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface CandlestickChartProps {
  series: Props['series'];
  title?: string;
  id?: string;
  height?: number;
  width?: number;
  loading?: boolean;
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  title,
  id,
  loading,
  height = 600,
  width = 1000,
  series = [],
}) => {
  const options: Props['options'] = useMemo(
    () => ({
      chart: {
        id,
        toolbar: {
          show: false,
        },
      },
      title: {
        text: title,
        align: 'left',
      },
      tooltip: {
        enabled: true,
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    }),
    [id, title]
  );

  if (loading || !series?.length || series.every((s) => !(typeof s === 'object' && 'data' in s && s.data?.length))) {
    return null;
  }

  return (
    <Chart
      type='candlestick'
      height={height}
      width={width}
      options={options}
      series={series}
    />
  );
};
