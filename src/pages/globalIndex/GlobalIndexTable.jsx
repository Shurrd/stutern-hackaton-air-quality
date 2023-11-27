import React, { useMemo, useState } from 'react';
import Table from '../../components/Table/Table';
import { airQualityInfoList } from '../../mockData';
import Pagination from '../../components/Pagination/Pagination';

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
    <div className='mb-9'>
      <div></div>
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
