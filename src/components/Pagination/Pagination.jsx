import React from 'react';
import { getPaginationData } from '../../utils';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({ query, setQuery, count, per_page }) => {
  const { total_pages } = getPaginationData({
    total_records: count,
    records_per_page: per_page,
  });

  return (
    <div className='flex gap-3 justify-between mr-[50px] items-center text-grey-text'>
      <div
        className='text-[#667085] p-2 px-3 rounded-lg cursor-pointer  flex gap-2 items-center justify-center'
        onClick={() => {
          query.page > 1 && setQuery({ ...query, page: query.page - 1 });
        }}
      >
        <FaArrowLeft size={20} />
        <p>Previous</p>
      </div>
      <p>
        <select
          className='appearance-none  bg-inherit focus:outline-none'
          onChange={(e) => setQuery({ ...query, per_page: e.target.value })}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        - {query.page} of {total_pages || 1}
      </p>
      <div
        className='text-[#667085] p-2 px-3 rounded-lg cursor-pointer flex gap-2 items-center justify-center'
        onClick={() =>
          query.page < total_pages &&
          setQuery({ ...query, page: query.page + 1 })
        }
      >
        <FaArrowRight size={20} />
        <p>Next</p>
      </div>
    </div>
  );
};

export default Pagination;
