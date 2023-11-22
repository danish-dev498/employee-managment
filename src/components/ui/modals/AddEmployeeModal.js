import React, { useEffect, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import formValidation from '../../../utils/formValidation.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleCloseModal,
  handleUpdateData,
} from '../../../features/employees/employeeSlice';
import calculateAge from '../../../utils/calculateAge';

const AddEmployeeModal = () => {
  const dispatch = useDispatch();

  const { employeeDetails, modalDetails, error } = useSelector(
    (state) => state.employeesData
  );

  const { title, type } = modalDetails;

  const [employeeData, setEmployeeData] = useState(
    type === 'Edit'
      ? employeeDetails
      : {
          firstName: '',
          lastName: '',
          imageUrl: '',
          email: '',
          contactNumber: '',
          age: '',
          salary: '',
          address: '',
          dob: '',
          designation: '',
        }
  );

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    imageUrl: '',
    email: '',
    contactNumber: '',
    age: '',
    salary: null,
    address: '',
    dob: '',
  });

  const closeModalClick = () => {
    dispatch(handleCloseModal());
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEmployeeData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const ageValue = calculateAge(employeeData.dob);
    setEmployeeData((preState) => ({
      ...preState,
      age: ageValue,
    }));
  }, [employeeData.dob]);

  const today = new Date();
  let minDate = new Date(today);
  minDate.setFullYear(today.getFullYear() - 18);

  const handleFromSubmit = (event) => {
    event.preventDefault();
    const formErrors = formValidation({ ...employeeData });
    const { email } = formErrors;

    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      dispatch(handleUpdateData(employeeData));

      if (error.length !== 0) {
        setErrors((preState) => ({
          ...preState,
          email: error,
        }));
        // dispatch(handleUpdateData(employeeData));
      }
    }
  };

  const handleKeyUp = (evt) => {
    const inputChar = evt.key;
    const ASCIICode = inputChar.charCodeAt(0);
    if (
      (ASCIICode < 65 || ASCIICode > 90) &&
      (ASCIICode < 97 || ASCIICode > 122)
    ) {
      evt.preventDefault();
    }
    return true;
  };

  const onlyNumberKey = (evt) => {
    const inputChar = evt.key;
    const ASCIICode =
      inputChar === 'Backspace' ? '08' : inputChar.charCodeAt(0);
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
      evt.preventDefault();
    }
    return true;
  };

  const addressKey = (evt) => {
    const inputChar = evt.key;
    const ASCIICode =
      inputChar === 'Backspace' ? '08' : inputChar.charCodeAt(0);

    if (ASCIICode == 32) {
      if (employeeData.address.length > 0) {
        return true;
      } else {
        evt.preventDefault();
      }
    }
  };

  return (
    <div
      className='fixed top-0 z-50 flex items-center justify-center w-full h-full p-4 transition bg-transparent bg-gray-600 bg-opacity-50'
      onClick={closeModalClick}
    >
      <form onSubmit={handleFromSubmit}>
        <div
          className='relative bg-gray-50 rounded-lg w-[600px] shadow-md p-3 pb-5'
          onClick={handleModalClick}
        >
          <h1 className='mb-5 text-2xl font-semibold text-center uppercase'>
            {type === 'Add' ? title : title}
          </h1>

          <div className='flex gap-1 mb-2'>
            <Input
              id='firstName'
              label='First name'
              type='text'
              name='firstName'
              value={employeeData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              handleKeyUp={handleKeyUp}
            />

            <Input
              id='lastName'
              label='Last name'
              type='text'
              name='lastName'
              value={employeeData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              handleKeyUp={handleKeyUp}
            />
          </div>
          <div className='flex gap-1 mb-2'>
            <Input
              id='salary'
              label='Salary'
              type='text'
              name='salary'
              value={employeeData.salary}
              onChange={handleChange}
              handleKeyUp={onlyNumberKey}
              error={errors.salary}
            />
            <Input
              id='designation'
              label='Designation'
              type='text'
              name='designation'
              value={employeeData.designation}
              onChange={handleChange}
              error={errors.designation}
            />
          </div>

          <div className='flex gap-1 mb-2'>
            <Input
              id='email'
              label='Email'
              type='text'
              name='email'
              value={employeeData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <Input
              id='contactNumber'
              label='Contact'
              type='text'
              name='contactNumber'
              value={employeeData.contactNumber}
              onChange={handleChange}
              error={errors.contactNumber}
              handleKeyUp={onlyNumberKey}
            />
          </div>

          <div className='flex gap-1 mb-2'>
            <Input
              id='imageUrl'
              label='Image (Optional)'
              type='text'
              name='imageUrl'
              value={employeeData.imageUrl}
              onChange={handleChange}
              error={errors.imageUrl}
            />

            <Input
              id='address'
              label='Address'
              type='text'
              name='address'
              value={employeeData.address}
              onChange={handleChange}
              error={errors.address}
              handleKeyUp={addressKey}
            />
          </div>

          <div className='flex gap-1 mb-2'>
            <Input
              id='dob'
              // type='date'
              type={type === 'Edit' ? 'text' : 'date'}
              label='Date of Birth'
              name='dob'
              value={employeeData.dob}
              onChange={handleChange}
              error={errors.dob}
              max={minDate}
            />
            <Input
              id='age'
              label='Age'
              type='text'
              name='age'
              value={employeeData.age}
              onChange={handleChange}
              error={errors.age}
              readOnly={true}
              disabled={true}
            />
          </div>

          <button
            type='button'
            className='absolute top-0 right-0 w-8 h-8 -mt-2 -mr-2 font-bold text-white rounded-full shadow-md outline-none bg-teal-blue-600 hover:bg-teal-blue-400'
            onClick={closeModalClick}
          >
            X
          </button>
          <Button type='primary'>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeModal;
