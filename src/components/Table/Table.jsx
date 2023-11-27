import React from 'react';
// import { SkeletonTheme } from 'react-loading-skeleton';
// import SkeletonBox from '../SkeletonBox/SkeletonBox';

const Table = ({ header, column, loader, url }) => {
  return (
    <div className='p-4 lg:p-8'>
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full'>
            <div className='overflow-hidden'>
              <table className=' min-w-full text-left text-sm font-light'>
                <thead className='font-semibold text-sm bg-[#e0e0e0] text-[#161616]'>
                  <tr className=''>
                    {header?.map(({ title, key }) => (
                      <th
                        scope='col'
                        className='pt-6 pb-3 font-semibold whitespace-nowrap px-4'
                        key={key}
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {column?.map((row, i) => (
                    <tr
                      className='transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-100 border-b border-[#E0E0E0] bg-[#FCFCFD] text-[#525252]'
                      key={i}
                    >
                      {row?.map((item, index) => (
                        <td className='whitespace-nowrap py-3 px-4' key={index}>
                          {item}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
