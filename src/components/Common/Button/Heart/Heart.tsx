import React from 'react';
import { RiHeart3Fill } from 'react-icons/ri';

const Heart = () => {
  return (
    <div className="flex items-center">
      <RiHeart3Fill
        color="#ff0000"
        fontSize="30px"
      />
      <span className="ml-2">+30</span>
    </div>
  );
};

export default Heart;
