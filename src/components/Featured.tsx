import Image from 'next/image';
import React from 'react';

const Featured = () => {
  return (
    <div className='container-fluid m-auto'>
      <Image 
      alt='Picture'
      className='w-full object-contain p-6'
      width={900}
      height={900}
      src="https://cdn.shopify.com/s/files/1/0115/7385/4270/files/homepage-hero_cb1270b1-d9ab-4388-96da-5d6021a1ff8a_2400x2400.jpg?v=1674602851" 
      />
    </div>
  );
};

export default Featured;
