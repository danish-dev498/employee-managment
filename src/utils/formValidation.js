import React from 'react';
export const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const numberRegex = /^[+]?[0-9]+(?:[ -][0-9]+)*$/;
const ageRegex = /^\d+$/;
const stringRegex = /^[A-Za-z]+$/;

const formValidation = ({
  firstName,
  lastName,
  imageUrl,
  email,
  contactNumber,
  age,
  salary,
  address,
  dob,
}) => {
  const error = {};

  console.log('from validation', typeof age, age);

  if (!firstName.length) {
    error.firstName = `First Name can't be empty!`;
  } else if (!stringRegex.test(firstName)) {
    error.firstName = `Invalid user name`;
  }

  if (!lastName.length) {
    error.lastName = `last Name can't be empty!`;
  } else if (!stringRegex.test(lastName)) {
    error.lastName = `Invalid last name`;
  }

  if (!emailRegex.test(email)) {
    error.email = `Invalid email address `;
  }

  if (!numberRegex.test(contactNumber)) {
    error.contactNumber = `Invalid phone number`;
  }

  if (!ageRegex.test(age)) {
    error.age = `Age must be a valid integer!`;
  } else {
    const number = parseInt(age, 10);
    if (number < 1 || number > 100) {
      error.age = `Invalid age!`;
    }
  }

  if (!numberRegex.test(salary)) {
    error.salary = `Invalid Amount!`;
  }
  if (!address.length) {
    error.address = `Address can't be empty!`;
  }

  const date = new Date(dob);

  if (isNaN(date.getTime())) {
    error.dob = 'Invalid date format';
  }

  // if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
  //   currentAge--;
  //   if (currentAge < 18) {
  //     error.dob = `Invalid date of birth, must be 18 or above!`;
  //   }
  // }

  // if (currentAge < 18) {
  //   error.dob = `Invalid date of birth, must be 18 or above!`;
  // }

  return error;
};

export default formValidation;
