import React, { useState } from 'react';
import user from '@src/assets/user.png';
import search from '@src/assets/search.png';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header>
      <nav className="mxs-7 relative">
        <div className="flex items-center m-3 pt-3 space-between ">
          {/* mobile menu */}
          <div className="lg:hidden items-center absolute space-x-4">
            <button
              className=" inline-flex rounded lg:hidden ml-auto outline-none"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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

          <div className=" px-6 w-full flex space-x-6 flex-wrap items-center flex-row justify-center">
            <div className="flex flex-row justify-center ">
              <div className="font-[Monoton] text-[#787bc5] text-[28px] ">
                PREPLAYER
              </div>
            </div>
          </div>

          <div className="w-full absolute top-[33px] left-[3%]">
            <Link to="/login">
              <button className=" border-0 py-3 invisible lg:visible leading-none text-xl bg-transparent mr-2  w-[15px]">
                <img
                  src={user}
                  alt="user"
                ></img>
              </button>
            </Link>
            <button className="ml-[34px] border-0 py-3 invisible lg:visible leading-none text-xl bg-transparent mr-2  w-[15px]">
              <img
                src={search}
                alt="search"
              ></img>
            </button>
            <input
              className="ml-[8px] text-[15px] font-[Inter] invisible lg:visible "
              type="text"
              placeholder="SEARCH FOR MUSIC TAG"
            />
          </div>
        </div>
      </nav>
      {/* mobile menu items */}
      <div className={classNames({ hidden: !menuToggle })}>
        <>
          {console.log(menuToggle)}
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            User
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Search
          </a>
        </>
      </div>
    </header>
  );
};

export default Header;
