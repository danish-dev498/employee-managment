import React from 'react';
import EmployeeDataTable from './EmployeeDataTable';
import Button from '../../../components/ui/Button';
import { useDispatch } from 'react-redux';
import { handleOpenModal, setEmployeeDetails } from '../employeeSlice';

const EmployeesDetails = ({ employeeDetails }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(handleOpenModal({ title: 'Edit employee', type: 'Edit' }));
    dispatch(setEmployeeDetails(employeeDetails))
  };

  return (
    <>
      <div className='flex justify-center '>
        <div className='w-2/5 p-4 mt-10 rounded-md shadow-2xl bg-gray-50 shadow-gray-300'>
          <div className='flex items-end justify-end'>
         { employeeDetails &&  <Button type='secondary' onClick={handleEditClick}>
              Edit Employee
            </Button>}
          </div>

          {employeeDetails ? (
            <div className='flex flex-col items-center justify-center'>
              <img
                src={employeeDetails.imageUrl}
                alt='employee_image'
                className='w-28 h-28'
              />
              <h1 className='flex justify-center w-full text-4xl'>{`${employeeDetails.firstName} ${employeeDetails.lastName} (${employeeDetails.age}) `}</h1>

              <EmployeeDataTable {...employeeDetails} />
            </div>
          ) : (
            <h1 className='flex justify-center font-bold uppercase '>
              Please Select the Employee
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeesDetails;
