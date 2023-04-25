import Layout from '@src/components/Common/Layout/Layout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <input
        className="ml-[8px] text-[15px] font-[Inter] "
        type="text"
        placeholder="SEARCH FOR MUSIC TAG"
        onChange={onChange}
        onKeyPress={handelonKeyPress}
      />
      <button onClick={SearchonClick}>dddddd</button>
    </Layout>
  );
};

export default Search;
