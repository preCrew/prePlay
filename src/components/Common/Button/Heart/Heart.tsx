import { useCallback, useEffect, useState } from 'react';
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import useAddLike from '@src/hooks/useAddLike';
import useDeleteLike from '@src/hooks/useDeleteLike';
import useGetLike from '@src/hooks/useGetLike';
import useIsLogin from '@src/hooks/user/useIsLogin';
import { TSongLists } from '@src/hooks/useGetSongListsQuery';

const heartIconStyle = {
  color: '#ff0000',
  fontSize: '30px',
};
interface HeartProps {
  onClickHeart?: boolean;
  styleProperty?: string;
  post: TSongLists;
}

const Heart = ({ onClickHeart, styleProperty, post }: HeartProps) => {
  const me = useIsLogin();
  const { data: meLike, refetch: refetchGetLike } = useGetLike(post.id, me);
  const { mutate: mustateAddLike } = useAddLike({ post, me });
  const { mutate: mustateDeletLike } = useDeleteLike(post.id);

  const heartOnIcon = <RiHeart3Fill {...heartIconStyle} />;
  const heartOffIcon = <RiHeart3Line {...heartIconStyle} />;

  const [heartToggle, setHeratToggle] = useState(false);

  useEffect(() => {
    if (me) {
      refetchGetLike();
    }
  }, [me]);

  const onClick = () => {
    if (meLike?.length) {
      mustateDeletLike(meLike?.[0].data.id as string);
      return;
    }
    mustateAddLike();
    console.log(meLike);
  };

  return (
    <>
      <div className="flex items-center">
        <button
          type="button"
          className={styleProperty}
          onClick={onClick}
        >
          {me ? (meLike?.length ? heartOnIcon : heartOffIcon) : heartOffIcon}
          {}
        </button>
      </div>
    </>
  );
};

export default Heart;
