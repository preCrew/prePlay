import React, { useState } from 'react';

import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../../../pages/SearchPage';
import { SearchProps } from '@src/components/SearchPage/Search/SearchM';

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [search_KW, setSearch] = useState<string>();
  const [toggle, setToggle] = useState(0);
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onKeyPress = () => {
    SearchonClick();
  };
  const SearchonClick = () => {
    navigate(`/search`, { state: { search_KW: search_KW } });
  };
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white ">
      <div className="flex items-center m-3 3 space-between ">
        {/* LOGO */}
        <div className="flex flex-row flex-wrap items-center justify-center w-full px-6 space-x-6 ">
          <div className="flex flex-row justify-center ">
            <div className="font-[Monoton] text-[#787bc5] text-[15px] ">
              PREPLAYER
            </div>
          </div>
        </div>

        <div className="w-full absolute top-[33px] left-[3%]">
          {/* <button
              onClick={SearchonClick}
              className="ml-[34px] border-0 py-3 leading-none text-xl bg-transparent mr-2  w-[15px]"
            ></button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
