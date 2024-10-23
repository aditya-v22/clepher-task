import { Dashboard } from '@/modules/dashboard/components';
import { fetchTimeSeriesIntradayData } from './actions';

export default async function Home() {
  const stockData = await fetchTimeSeriesIntradayData();

  return (
    <div className='p-10'>
      <h1 className='text-2xl font-semibold text-gray-800 text-center'>Welcome to Clepher</h1>

      <Dashboard stockData={stockData} />
    </div>
  );
}
