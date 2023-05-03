import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import Layout from '@src/components/Common/Layout/Layout';

const Search = () => {
  const navigate = useNavigate();
  const [search_KW, setSearch] = useState<string>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handelonKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      SearchonClick();
    }
  };

  const SearchonClick = () => {
    navigate(`/searchresult?=${search_KW}`, {
      state: { search_KW: search_KW },
    });
  };

  return (
    <Layout>
      <div className="relative">
        <input
          className="block w-11/12 pb-2 m-auto border-0 border-b-[1px] border-b-stone-500 pl-10"
          type="text"
          placeholder="키워드로 검색해보세요."
          onChange={onChange}
          onKeyPress={handelonKeyPress}
        />
        <button
          onClick={SearchonClick}
          className="absolute top-0 left-4"
        >
          <AiOutlineSearch className="text-2xl text-gray-600" />
        </button>
      </div>
    </Layout>
  );
};

export default Search;
