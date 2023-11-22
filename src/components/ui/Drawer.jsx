import React from 'react';

const Drawer = ({ children }) => {
  return (
    <div class='flex items-center justify-center py-4 '>
      <div class='h-[1px] flex-grow bg-gray-400'></div>
      <span class='flex-shrink justify-items-center px-3  font-light text-gray-500'>
       OR
      </span>
      <div class='h-px flex-grow bg-gray-400'></div>
    </div>
  );
};

export default Drawer;


