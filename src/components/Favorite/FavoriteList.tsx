import useInfinityScroll from '@src/hooks/useInfitityScroll';
import useGetUserFavorite from '@src/hooks/user/useGetUserFavorite';
import useIsLogin from '@src/hooks/user/useIsLogin';
import VideoItem from '../VideoList/VideoItem/VideoItem';

const Favorite = () => {
  const me = useIsLogin();

  const {
    data: favoriteList,
    isLoading,
    fetchNextPage,
  } = useGetUserFavorite(me);

  useInfinityScroll(() => {
    fetchNextPage();
  });

  return (
    <>
      {favoriteList?.pages.map(page =>
        page.map(item => <VideoItem item={item.data} />),
      )}
    </>
  );
};

export default Favorite;
