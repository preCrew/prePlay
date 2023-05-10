import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { TSongLists } from '@src/hooks/useGetSongListsQuery';
import SearchM from '@src/components/SearchPage/Search/SearchM';
import Layout from '@src/components/Common/Layout/Layout';

export interface SearchProps {
  item?: TSongLists;
  search_KW?: string;
}

const SearchResultPage = () => {
  const { state } = useLocation();
  const search_KW: SearchProps = state as SearchProps;

  return (
    <Suspense>
      <Layout>
        <SearchM {...search_KW} />
      </Layout>
    </Suspense>
  );
};

export default SearchResultPage;
