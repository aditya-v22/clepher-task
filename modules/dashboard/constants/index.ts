import { Interval } from '@/lib/typedefs/stock';

export const intervalOptions = Object.values(Interval).map((interval) => ({
  value: interval,
  label: interval,
}));
