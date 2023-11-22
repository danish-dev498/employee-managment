function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-teal-blue-300 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-teal-blue-600 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-2 py-1 md:px-4 md:py-2 submit',
    small: 'w-full px-2 py-2 text-lg rounded-lg bg-teal-blue-300  tracking-wide text-white transition-colors duration-300 hover:bg-teal-blue-600 disabled:cursor-not-allowed',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    
    secondary:
      'inline-block text-sm rounded-full bg-teal-blue-600 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-teal-blue-300 disabled:cursor-not-allowed md:px-4 md:py-2 submit ',
  };

  // if (to)
  //   return (
  //     <Link to={to} className={styles[type]}>
  //       {children}
  //     </Link>
  //   );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
