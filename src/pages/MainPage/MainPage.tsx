import { useEffect, useMemo } from 'react';
import { useRef } from 'react';

import useGetSongCountQuery from '@src/hooks/useGetSongCountQuery';
import useGetSongListsQuery, {
  TSongLists,
} from '@src/hooks/useGetSongListsQuery';
import useInfinityScroll from '@src/hooks/useInfitityScroll';
import MainBox from '@src/components/MainPage/MainBox';
import { useAppDispatch } from '@src/store/store';
import Layout from '@src/components/Common/Layout/Layout';
import SkeletonMainList from './Skeleton/SkeletonMainList';
import VideoItem from '@src/components/VideoList/VideoItem/VideoItem';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const { data: musicCnt } = useGetSongCountQuery();
  const next = useRef(0);
  const musicsOrder = useMemo(() => {
    if (musicCnt) {
      const arr = Array.from({ length: musicCnt as number }, (_, i) => i + 1);
      for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    return [];
  }, [musicCnt]);
  const {
    data: musicLists,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetSongListsQuery(next.current, musicsOrder);

  useInfinityScroll(() => {
    next.current += 12;
    fetchNextPage();
  });

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {musicLists &&
            musicLists.pages.map(page =>
              page.pageLists.map((item, idx: any) => <VideoItem item={item} />),
            )}
        </div>
        {isFetchingNextPage && <SkeletonMainList />}
      </Layout>
    </>
  );
};

export default MainPage;
