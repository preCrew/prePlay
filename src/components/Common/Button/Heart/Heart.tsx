import { useCallback, useEffect } from 'react';
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import useAddLike from '@src/hooks/useAddLike';
import useDeleteLike from '@src/hooks/useDeleteLike';
import useGetLike from '@src/hooks/useGetLike';
import useIsLogin from '@src/hooks/user/useIsLogin';

const heartIconStyle = {
  color: '#ff0000',
  fontSize: '30px',
};
interface HeartProps {
  onClickHeart?: boolean;
  styleProperty?: string;
  postId: string;
}

const Heart = ({ onClickHeart, styleProperty, postId }: HeartProps) => {
  const me = useIsLogin();
  const { data: meLike, refetch: refetchGetLike } = useGetLike(postId, me);
  const { mutate: mustateAddLike } = useAddLike({ postId, me });
  const { mutate: mustateDeletLike } = useDeleteLike();

  const heartOnIcon = <RiHeart3Fill {...heartIconStyle} />;
  const heartOffIcon = <RiHeart3Line {...heartIconStyle} />;

  useEffect(() => {
    if (me) refetchGetLike();
  });

  const onClick = useCallback(() => {
    if (meLike?.length) {
      mustateDeletLike(meLike?.[0].id as string);
      return;
    }
    mustateAddLike();
  }, [meLike]);

  return (
    <>
      <div className="flex items-center">
        <button
          type="button"
          className={styleProperty}
          onClick={onClick}
        >
          {meLike?.length ? heartOnIcon : heartOffIcon}
        </button>
      </div>
    </>
  );
};

export default Heart;
