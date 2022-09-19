import React from 'react';
import user from '@src/assets/user.png';
import search from '@src/assets/search.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between ">
        <button
          className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2 absolute left-10"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>

        <div className=" px-6 w-full flex flex-wrap items-center flex-row justify-center">
          <div className="flex flex-row justify-center ">
            <div className="font-[Monoton] text-[#787bc5] text-[28px] ">
              PREPLAYER
            </div>
          </div>
        </div>
        <div className="w-full absolute top-[15px] left-[3%] ">
          <button className=" border-0 py-3 sm:invisible lg:visible leading-none text-xl bg-transparent mr-2  w-[15px]">
            <img
              src={user}
              alt="user"
            ></img>
          </button>
          <button className="ml-[34px] border-0 py-3 sm:invisible lg:visible leading-none text-xl bg-transparent mr-2  w-[15px]">
            <img
              src={search}
              alt="search"
            ></img>
          </button>
          <input
            className="ml-[8px] text-[15px] font-[Inter] sm:invisible lg:visible "
            type="text"
            placeholder="SEARCH FOR MUSIC TAG"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
