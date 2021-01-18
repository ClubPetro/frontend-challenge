import { useEffect } from 'react';

const useOutsideClick = (
  ref: { current: { contains: (arg0: any) => any } },
  callback: () => void,
) => {
  const handleClick = (e: { target: any }) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
