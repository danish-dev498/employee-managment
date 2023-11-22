import React from 'react';
import formatDate from '../../utils/fortmatDate';

const Input = ({
  id,
  label,
  type,
  onChange,
  value,
  name,
  error,
  max,
  handleKeyUp,
  readOnly,
  disabled
}) => {

  console.log('checkdkckckckckck', value)
  return (
    <div className='w-full'>
      <div className='relative '>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          className='block border px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none outline-none focus:border-teal-blue-400 peer'
          placeholder=' '
          max={formatDate(max)}
          onChange={onChange}
          onKeyDown={handleKeyUp}
          readOnly ={ readOnly}
          disabled = {disabled}
        />

        <label
          htmlFor={id}
          className='absolute z-10 px-2 text-sm text-gray-500 duration-300 transform scale-75 -translate-y-4 bg-gray-50 dark:text-gray-400 top-1 origin-0 dark:bg-gray-900 peer-focus:px-2 peer-focus:text-teal-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
        >
          {label}
        </label>
      </div>
      <span className='ml-1 text-sm leading-none text-red-500 whitespace-normal'>
        {error}
      </span>
    </div>
  );
};

export default Input;
