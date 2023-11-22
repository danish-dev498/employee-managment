import React, { useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';
import AddEmployeeModal from '../components/ui/modals/AddEmployeeModal';
import { EmployeesDetails, EmployeesList } from '../features/employees';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleOpenModal,
  modalOpen,
} from '../features/employees/employeeSlice';

const Home = () => {
  const [employeeDetails, setEmployeeDetails] = useState('');
  const dispatch = useDispatch();

  const { data, modalOpen } = useSelector((state) => state.employeesData);

  console.log(data);

  const onClickHandler = (data) => {
    setEmployeeDetails(data);
  };

  const openModalClick = () => {
    dispatch(handleOpenModal({ title: 'Add a new Employee', type: 'Add' }));
  };

  return (
    <>
      <div className='mt-16'>
        <h1 className=' flex justify-center  uppercase text-2xl font-bold'>
          Employee Management Systems
        </h1>
        <div className='flex justify-end mr-60 mt-5'>
          <button
            className=' bg-teal-blue-400 p-3 rounded-md hover:bg-teal-blue-600 text-white'
            onClick={openModalClick}
          >
            Add employee
          </button>
        </div>
        <div className='flex divide-x'>
          <div className='w-96'>
            <h1 className='text-2xl text-center'>Employee Lists</h1>
            <hr class='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
            <div className='ml-5'>
              <SearchInput />
              <div className='overflow-y-scroll h-screen max-h-[60vh] p-2'>
                {data.map((employee) => (
                  <EmployeesList
                    employee={employee}
                    key={employee.id}
                    setEmployeeDetails={setEmployeeDetails}
                    onClickHandler={onClickHandler}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div>
              <h2 className='text-2xl text-center'>Employee Details</h2>
              <hr class='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
            </div>

            <EmployeesDetails employeeDetails={employeeDetails} />
          </div>
        </div>
      </div>

      {modalOpen && <AddEmployeeModal />}
    </>
  );
};

export default Home;
