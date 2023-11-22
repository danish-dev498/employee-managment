import React from 'react';

const EmployeeDataTable = ({ address, salary, email, contactNumber, dob , designation}) => {
  const tableData = [
    { label: 'Designation', value: designation },
    { label: 'Address', value: address },
    { label: 'Salary', value: salary },
    { label: 'Email', value: email },
    { label: 'Contact', value: contactNumber },
    { label: 'Date of Birth', value: dob },
  ];

  return (
    <div className='w-full p-5'>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-500 border-none dark:text-gray-400'>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } dark:bg-gray-800 dark:border-gray-700`}
              >
                <th
                  scope='row'
                  className='border-none px-3 py-2.5 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  {data.label}
                </th>
                <td className='border-none px-3 py-2.5'>{data.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDataTable;
