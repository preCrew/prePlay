import { TSongLists } from '@src/hooks/useGetSongListsQuery';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainBox from '@src/components/MainPage/MainBox';
import search from '@src/assets/search.png';
import Header from '@src/components/Common/Layout/Header';
import SearchM from '@src/components/SearchPage/Search/SearchM';
import { useLocation, useNavigate } from 'react-router-dom';

export interface SearchProps {
  item?: TSongLists;
  search_KW?: string;
}

const Search = () => {
  const { state } = useLocation();
  const search_KW: SearchProps = state as SearchProps;

  return (
    <>
      <Header />
      <SearchM {...search_KW} />
    </>
  );
};

export default Search;
