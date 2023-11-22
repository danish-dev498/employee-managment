// const formatDate = (dateString) => {
//   const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//   const formattedDate = new Date(dateString).toLocaleDateString(
//     undefined,
//     options
//   );
//   return formattedDate;
// };

// export default formatDate;

// function formatDate(date) {
//   // You can use JavaScript's built-in Date object to format the date as per your requirements.
//   const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//   return new Date(date).toLocaleDateString(undefined, options);
// }

// export default formatDate;

function formatDate(date) {
  // console.log('check dob date', date);
  const year = date?.getFullYear();
  const month = String(date?.getMonth() + 1).padStart(2, '0');
  const day = String(date?.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default formatDate;
