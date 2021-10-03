export const ErrorIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='5.5' fill='#FF0000' stroke='#FF0000' />
      <path d='M12 13V9' stroke='white' />
      <path d='M12 15V14' stroke='white' />
    </svg>
  );
};

export const ChevronIcon = ({ rotate = 0 }) => {
  return (
    <svg
      width='8'
      height='4'
      viewBox='0 0 8 4'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform={`rotate(${rotate})`}
    >
      <path d='M8 0H0L4 4L8 0Z' fill='#111111' />
    </svg>
  );
};

export const CloseIcon = (props) => {
  return (
    <svg
      {...props}
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M2 2L20 20' stroke='black' strokeWidth='4' />
      <path d='M2 20L20 2' stroke='black' strokeWidth='4' />
    </svg>
  );
};
