import React, { useCallback } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();

  const onClickBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className="fixed w-full p-3 bg-white">
      <MdKeyboardArrowLeft
        fontSize="30px"
        color="black"
        onClick={onClickBack}
      />
    </div>
  );
};

export default TopBar;
