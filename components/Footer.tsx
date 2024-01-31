import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-8 flex w-full items-center justify-center border-t px-4 py-4 sm:px-6'>
      <p>&copy; Copyright - QuickCommerce {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
