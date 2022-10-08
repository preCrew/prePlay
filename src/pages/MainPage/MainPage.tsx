import { useEffect, useMemo } from 'react';
import useGetSongCountQuery from '@src/hooks/useGetSongCountQuery';
import useGetSongListsQuery, {
  TSongLists,
} from '@src/hooks/useGetSongListsQuery';
import useInfinityScroll from '@src/hooks/useInfitityScroll';
import SkeletonMainPage from '@src/components/MainPage/SkeletonMainPage';
import MainBox from '@src/components/MainPage/MainBox';
import { useRef } from 'react';
import { getPostAction, TypefinalPosts } from '@src/store/reducers/post-Slice';
import { useAppDispatch } from '@src/store/store';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    if (musicLists) {
      dispatch(getPostAction({ getPosts: musicLists.pages[0].pageLists }));
    }

    //console'TypefinalPosts.log();
  }, [dispatch, musicLists]);

  return (
    <>
      <div className="grid justify-center w-[100%] pt-[19px]  bg-gray-600 gap-x-[27px] gap-y-[30px] grid-cols-auto-fit justify-items-center min-w-fit">
        {musicLists &&
          musicLists.pages.map(page =>
            page.pageLists.map(item => <MainBox item={item} />),
          )}
      </div>
      {isFetchingNextPage && <SkeletonMainPage />}
    </>
  );
};

export default MainPage;
