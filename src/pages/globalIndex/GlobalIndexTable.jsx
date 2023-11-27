import React, { useMemo, useState } from 'react';

import { FiInfo } from 'react-icons/fi';

import Table from '../../components/Table/Table';
import { airQualityInfoList } from '../../mockData';
import Pagination from '../../components/Pagination/Pagination';
import Searchbar from '../../components/SearchBar/Searchbar';

export const initialQuery = {
  paginate: true,
  per_page: 10,
  page: 1,
  search: '',
  // start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
  end_date: '',
  currency: '',
};
const GlobalIndexTable = () => {
  const [query, setQuery] = useState(initialQuery);

  const TableHeader = useMemo(
    () => [
      {
        title: 'City',
        key: 'city',
      },
      {
        title: 'PM2.5 AQI',
        key: 'aqi',
      },
      {
        title: 'Health Impact',
        key: 'health_impact',
      },
      {
        title: 'Last Update',
        key: 'last_update',
      },
      {
        title: 'Measurement',
        key: 'measurement',
      },
    ],
    []
  );
  return (
    <div className='mb-9 mt-[22px] px-[30px] py-[18px] rounded-lg border-2 border-[#D0D5DD] bg-white'>
      <div className='flex justify-between'>
        <div className='flex gap-2.5 items-center justify-center'>
          <p className='text-[#11263c] sm:text-lg font-bold'>AQI DATA</p>
          <FiInfo size={18} color='#D0D1D2' />
        </div>
        <div>
          <Searchbar placeholder={'Search location'} />
        </div>
      </div>{' '}
      <Table header={TableHeader} column={airQualityInfoList} />
      <div className='pt-2'>
        <Pagination
          query={query}
          setQuery={setQuery}
          count={Response?.meta?.total}
        />
      </div>
    </div>
  );
};

export default GlobalIndexTable;
