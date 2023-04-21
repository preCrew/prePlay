import React, { useState } from 'react';
import user from '@src/assets/user.png';
import search from '@src/assets/search.png';
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
    <header>
      <nav className="relative mx-7 min-w-fit">
        <div className="flex items-center pt-3 m-3 space-between ">
          {/* mobile hamburger S*/}
          <div className="absolute items-center space-x-4 lg:hidden">
            <button
              className="inline-flex ml-auto rounded outline-none lg:hidden"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* mobile hamburger E*/}

          {/* LOGO */}
          <div className="flex flex-row flex-wrap items-center justify-center w-full px-6 space-x-6 ">
            <div className="flex flex-row justify-center ">
              <div className="font-[Monoton] text-[#787bc5] text-[28px] ">
                PREPLAYER
              </div>
            </div>
          </div>

          {/* PC Menu items */}
          <div className="w-full absolute top-[33px] left-[3%]">
            <Link to="/login">
              <button className=" border-0 py-3 invisible lg:visible leading-none text-xl bg-transparent mr-2  w-[15px]">
                <img
                  src={user}
                  alt="user"
                ></img>
              </button>
            </Link>

            <button
              onClick={SearchonClick}
              className="ml-[34px] border-0 py-3 invisible lg:visible leading-none text-xl bg-transparent mr-2  w-[15px]"
            >
              <img
                src={search}
                alt="search"
              ></img>
            </button>

            <input
              className="ml-[8px] text-[15px] font-[Inter] invisible lg:visible "
              type="text"
              placeholder="SEARCH FOR MUSIC TAG"
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </div>
        </div>
      </nav>

      {/* mobile menu items */}
      <div className={classNames({ hidden: !menuToggle })}>
        <>
          <Link
            to="/Login"
            className="block px-4 py-2 hover:bg-gray-200"
          >
            User
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm hover:bg-gray-200"
          >
            Search
          </Link>
        </>
      </div>
    </header>
  );
};

export default Header;
