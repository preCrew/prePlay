import { Suspense, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { useAppSelector } from '@src/store/store';
import CommentList from '@src/components/Comment';
import CommentForm from '@src/components/Comment/CommentForm';
import Heart from '@src/components/Common/Button/Heart/Heart';
import { TSongLists } from '@src/hooks/useGetSongListsQuery';
import useLoginWithGoogleQuery from '@src/hooks/useLoginWithGoogleQuery';

const Post = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const data = location.state as TSongLists;
  const [cookies, setCookie] = useCookies(['uid']);
  const { refetch } = useLoginWithGoogleQuery();

  const { id } = useParams();
  const { posts } = useAppSelector(state => state.post);
  const me = cookies.uid;

  useEffect(() => {
    // 로그인한적 없으면 로그인
    console.log(cookies.uid);
    if (!cookies.uid) {
      alert('로그인후 이용해주세요.');
      navigator('/login');
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between py-8 m-auto px-7 md:w-4/5 ">
        <h2>{data.title}</h2>
        <Heart
          postId={id!}
          posts={posts}
          me={me}
        />
      </div>
      <div className="max-w-[644px] m-auto px-7">
        <section className="mb-7">
          <article className="bg-black rounded-b-xl">
            <div className="">
              <img
                className="object-cover w-full h-[unset]"
                src={data.thumnail}
              />
            </div>
            <div className="relative pb-6 mx-4 mt-6 text-white ">
              <h3 className="w-11/12 mb-5 text-xl">{data.title}</h3>
              {/* <p className="mb-8 text-sm">트와이스</p> */}
              {/* <ul>
                <li>
                  <a href="">#해시태그</a>
                </li>
              </ul> */}
              <Heart
                onClickHeart={true}
                styleProperty="absolute right-3 top-0"
                postId={id!}
                posts={posts}
                me={me}
              />
            </div>
          </article>
        </section>
        <section>
          <article>
            <Suspense fallback={'댓글창 로딩중...'}>
              <CommentForm
                postId={id}
                me={me}
              />
              <CommentList
                postId={id!}
                me={me}
              />
            </Suspense>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Post;
