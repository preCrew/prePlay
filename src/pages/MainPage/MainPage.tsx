import { useMemo } from 'react';
import useGetSongCountQuery from '@src/hooks/useGetSongCountQuery';
import useGetSongListsQuery from '@src/hooks/useGetSongListsQuery';
import useInfinityScroll from '@src/hooks/useInfitityScroll';
import SkeletonMainPage from '@src/components/MainPage/SkeletonMainPage';
import MainBox from '@src/components/MainPage/MainBox';
import { useRef } from 'react';

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
      <div className="grid justify-center w-[100%] pt-[19px]  bg-gray-600 gap-x-[27px] gap-y-[30px] grid-cols-auto-fit justify-items-center pr-[48px] pl-[39px] min-w-fit">
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
