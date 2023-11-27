import React, { useEffect, useState, useCallback } from 'react';

import { useField } from 'formik';
import { useGetCustomersQuery } from '../../redux/services';

export const initialQuery = {
  paginate: 1,
  page: 1,
  search: '',
};

const SearchSelectOptions = ({
  value,
  setValue,
  setFieldValue,
  options,
  title,
  isChecked,
  label,
  placeholder,
  formik,
  setEmail,
  extractUserId,
  ...props
}) => {
  const [searchData, setSearchData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState(initialQuery);
  const { data: customers, isFetching: isLoading } =
    useGetCustomersQuery(query);
  const [field] = useField(props);

  const handleSearch = useCallback(() => {
    setQuery({ search: searchWord, paginate: 1, page: 1 });
    let customersInfo, filteredByName;

    if (!isLoading && searchWord?.length !== 0 && searchWord) {
      customersInfo = customers?.data.map(
        (element) => element.personal_details
      );
      filteredByName = customersInfo?.filter(
        (arr) =>
          arr?.last_name?.toLowerCase().includes(searchWord) ||
          arr?.first_name?.toLowerCase().includes(searchWord)
      );
      setSearchData(filteredByName);
    } else {
      setSearchData([]);
    }
  }, [isLoading, customers?.data, searchWord]);

  useEffect(() => {
    handleSearch();
  }, [searchWord, handleSearch]);

  const handleSearchInput = (value) => {
    setOpen(true);
    setSearchWord(value);
  };

  const handleClick = (e) => {
    setFieldValue('search', e.value);
    let userId = e.userId;

    let filteredInfo = customers?.data.filter(
      (element) => element.personal_details.user_id === userId
    );
    let email = filteredInfo[0]?.verified_data.email.email;

    setFieldValue('email', email);
    extractUserId(userId);
    setOpen(false);
  };

  return (
    <div>
      <div>
        <div className='flex flex-col mt-7'>
          <label
            htmlFor='searchWord'
            className='text-[14px] leading-[22.4px] text-grey-label'
          >
            {label}
          </label>
          <div className='flex mt-1 items-center justify-center relative md:justify-start w-full md:w-auto'>
            <div className={`text-grey-input absolute left-[19px]`}>
              <Icon id='search-icon' width='16' height='16'></Icon>
            </div>
            <input
              name='search'
              type='text'
              placeholder={placeholder}
              {...field}
              {...props}
              onBlur={(e) => handleSearchInput(e.target.value)}
              className={`focus:outline-none text-[16px] w-full md:w-[400px] pl-12 py-[14px] border border-grey-input rounded-[8px] placeholder:text-grey-input text-grey-label `}
            />
          </div>
        </div>
      </div>
      <div className='text-grey-text gap-[13px] bg-white '>
        {searchData?.length !== 0 && open && (
          <div className='max-h-52 overflow-y-scroll no-scrollbar '>
            {searchData?.map(
              ({ user_id, first_name, last_name, ...option }) => (
                <div
                  key={user_id}
                  {...field}
                  {...props}
                  className={`border-t border-t-grey-input py-[14px] px-[21px] gap-4 justify-between  cursor-pointer flex items-center w-full ${
                    value?.key === user_id && 'bg-[#F8F9FF]'
                  }`}
                  onClick={() =>
                    handleClick({
                      userId: user_id,
                      value: `${first_name} ${last_name}`,
                    })
                  }
                >
                  {first_name + ' ' + last_name}
                  {isChecked && (
                    <p
                      className={`h-5 w-5 border rounded-full ${
                        value.key === user_id &&
                        'bg-primary bg-no-repeat bg-center'
                      }`}
                    ></p>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSelectOptions;
