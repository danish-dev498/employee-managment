const calculateAge = (dob) => {
  if (!dob) return;

  const today = new Date();
  const birthDate = new Date(dob);

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  //   if (isNaN(birthDate)) return (age = '0');

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    return --age;
  } else {
    return age;
  }
};

export default calculateAge;
