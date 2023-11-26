import React from 'react';

interface Props {
  heading: string;
  subheading: string;
}
function Header({ heading, subheading }: Props) {
  return (
    <section>
      <h1 className='text-2xl text-black'>{heading}</h1>
      <h2 className='text-lg text-gray-600'>{subheading}</h2>
    </section>
  );
}

export default Header;
