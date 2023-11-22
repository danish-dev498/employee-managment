import React from 'react';
import { useDispatch } from 'react-redux';
import { handleSearch } from '../features/employees/employeeSlice';

const SearchInput = () => {
  const dispatch = useDispatch();
  const handSearchEmployee = (event) => {
    dispatch(handleSearch(event.target.value));
  };

  return (
    <div className='p-2'>
      <div className='relative'>
        <div className='absolute  inset-y-0 left-0 pl-3 flex items-center'>
          <svg
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_302_1499)'>
              <path
                d='M12.5322 19.0332C13.9297 19.0332 15.2393 18.6113 16.3291 17.8906L20.1787 21.749C20.4336 21.9951 20.7588 22.1182 21.1104 22.1182C21.8398 22.1182 22.376 21.5469 22.376 20.8262C22.376 20.4922 22.2617 20.167 22.0156 19.9209L18.1924 16.0801C18.9834 14.9551 19.4492 13.5928 19.4492 12.1162C19.4492 8.31055 16.3379 5.19922 12.5322 5.19922C8.73535 5.19922 5.61523 8.31055 5.61523 12.1162C5.61523 15.9219 8.72656 19.0332 12.5322 19.0332ZM12.5322 17.1875C9.74609 17.1875 7.46094 14.9023 7.46094 12.1162C7.46094 9.33008 9.74609 7.04492 12.5322 7.04492C15.3184 7.04492 17.6035 9.33008 17.6035 12.1162C17.6035 14.9023 15.3184 17.1875 12.5322 17.1875Z'
                fill='#3C3C43'
                fill-opacity='0.6'
              />
            </g>
            <defs>
              <clipPath id='clip0_302_1499'>
                <rect width='28' height='28' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <input
          placeholder='Search...'
          className='block w-full p-2 pl-10 border outline-none focus:border-teal-600 rounded-lg'
          onChange={handSearchEmployee}
        />
      </div>
    </div>
  );
};

export default SearchInput;
