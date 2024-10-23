import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { intervalOptions } from '../constants';
import { Interval } from '@/lib/typedefs/stock';

interface FormProps {
  interval: Interval;
  loading?: boolean;
  onIntervalChange?: (interval: Interval) => void;
}

export const Form: React.FC<FormProps> = ({ onIntervalChange, loading, interval }) => {
  return (
    <div className='w-[1000px] flex justify-between items-center gap-10'>
      <p className='text-lg font-semibold text-gray-700'>{`Time Series Intraday - Interval (${interval})`}</p>

      <Select
        value={interval}
        onValueChange={(newInterval) => onIntervalChange?.(newInterval as Interval)}
        disabled={loading}
      >
        <SelectTrigger className='max-w-40'>
          <SelectValue placeholder='Select Interval' />
        </SelectTrigger>
        <SelectContent>
          {intervalOptions.map((interval) => (
            <SelectItem
              key={interval.value}
              value={interval.value}
            >
              {interval.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
