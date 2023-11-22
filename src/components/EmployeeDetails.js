import React from 'react';

const EmployeeDetails = ({ employeeDetails }) => {
  console.log(employeeDetails);
  return (
    <>
      <div className='flex justify-center'>
        {employeeDetails ? (
          <div className='flex flex-col justify-center items-center'>
            <img
              src={employeeDetails.imageUrl}
              alt='employee_image'
              className='w-48 h-48'
            />
            <h1 className='text-4xl'>{`${employeeDetails.firstName} ${employeeDetails.lastName} (${employeeDetails.age}) `}</h1>
            <h1>Address: {employeeDetails.address}</h1>
            <h1>{employeeDetails.email}</h1>
            <h1> Mobile: {employeeDetails.contactNumber}</h1>
            <h1> DOB: {employeeDetails.dob}</h1>
          </div>
        ) : (
          <h1>Please Select the Employee</h1>
        )}
      </div>
    </>
  );
};

export default EmployeeDetails;
