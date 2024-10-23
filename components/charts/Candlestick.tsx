'use client';

import React, { useMemo } from 'react';
import Chart, { Props } from 'react-apexcharts';

interface CandlestickChartProps {
  series: Props['series'];
  title?: string;
  id?: string;
  height?: number;
  width?: number;
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  title,
  id,
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
