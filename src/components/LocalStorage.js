import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
  });

  const [formValues, setFormValues] = useState([]);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  };
  const isValidPassword = (password) => {
    // Password must be at least 8 characters long, contain at least one uppercase letter, and one lowercase letter
    return /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  };

  const validateForm = (inputname) => {
    const newErrors = {};

    if (!inputname.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(inputname.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!inputname.password.trim()) {
      newErrors.password = 'password is required';
    } else if (!isValidPassword(inputname.password)) {
      newErrors.password =
        'Password must be at least 8 characters long, contain at least one uppercase letter, and one lowercase letter';
    }

    return newErrors;
  };

  const btnsignup = (e) => {
    e.preventDefault();

    const formError = validateForm(initialValues);
    console.log(formError);
    setErrors(formError);
    if (!validateForm(initialValues)) {
      const newUser = {
        email: initialValues.email,
        password: initialValues.password,
      };
      setFormValues([...formValues, newUser]);
      localStorage.setItem('users', JSON.stringify([...formValues, newUser]));
    }
  };

  console.log('outside error', errors);

  return (
    <>
      <div className='signupform'>
        <h1>Sign up</h1>
        <div className='input-form'>
          <label>Email : </label>
          <input
            className='border'
            type='email'
            value={initialValues.email}
            onChange={(e) =>
              setInitialValues({ ...initialValues, email: e.target.value })
            }
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='input-form'>
          <label>Password : </label>
          <input
            className='border'
            type='password'
            value={initialValues.password}
            onChange={(e) =>
              setInitialValues({ ...initialValues, password: e.target.value })
            }
          />
          {errors.password && <p className='error'>{errors.password}</p>}
        </div>

        <div className='input-form'>
          <button onClick={btnsignup}>Signup</button>
        </div>
      </div>
    </>
  );
};

export default LocalStorage;
