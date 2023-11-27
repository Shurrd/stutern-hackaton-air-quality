import { ErrorMessage, Field } from 'formik';
import React from 'react';

const InputBox = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  setFieldTouched,
  handleSubmit,
}) => {
  return (
    <div className='inline-flex flex-col'>
      <label
        htmlFor={id}
        className='text-[#344054] mb-[3px] inline-block font-medium'
      >
        {label || ''}
      </label>
      <Field
        className='border border-input rounded-md px-[14px] py-2.5 outline-0 text-[#101828]'
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value || ''}
        onKeyUp={(e) => {
          setFieldTouched(name, true);
          e.key === 'Enter' && handleSubmit();
        }}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className='text-[12px] text-red-600 text-left flex gap-1 mt-2 font-normal'>
            {msg}
          </div>
        )}
      />
    </div>
  );
};

export default InputBox;
