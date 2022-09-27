import usePost from '@src/store/hooks/usePost';
import { TPost, TPosts } from '@src/store/reducers/post-Slice';
import { TUser } from '@src/store/reducers/user-Slice';

import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';

const heartIconStyle = {
  color: '#ff0000',
  fontSize: '30px',
};

interface HeartProps {
  onClickHeart?: boolean;
  styleProperty?: string;
  postId: string | number;
  posts: TPost[];
  me: TUser;
}

const Heart = ({
  onClickHeart,
  styleProperty,
  postId,
  posts,
  me,
}: HeartProps) => {
  const { addLike, deleteLike } = usePost();
  const heartOnIcon = <RiHeart3Fill {...heartIconStyle} />;
  const heartOffIcon = <RiHeart3Line {...heartIconStyle} />;
  //포스트 아이디를 찾아서 그 포스트 좋아요에 내 아이디를 추가!
  const currentPost = posts?.find(post => post.id === postId);
  const myLike = currentPost?.Likers.find(like => like.id === me?.id);
  const onClick = () => {
    if (myLike) {
      deleteLike(currentPost?.id!, me?.id!);
      return;
    }
    addLike(currentPost?.id!, me?.id!);
  };

  return (
    <>
      <div className="flex items-center">
        {onClickHeart ? (
          <button
            type="button"
            className={styleProperty}
            onClick={onClick}
          >
            {myLike ? heartOnIcon : heartOffIcon}
          </button>
        ) : (
          <>
            {heartOnIcon}
            <span className="ml-2">{currentPost?.Likers.length}</span>
          </>
        )}
      </div>
    </>
  );
};

export default Heart;
