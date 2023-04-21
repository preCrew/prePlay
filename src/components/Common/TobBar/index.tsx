import React, { useCallback } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const navigate = useNavigate();

  const onClickBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className="p-3">
      <MdKeyboardArrowLeft
        fontSize="30px"
        onClick={onClickBack}
      />
    </div>
  );
};

export default TopBar;
