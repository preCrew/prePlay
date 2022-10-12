import { useParams } from 'react-router-dom';
import { useAppSelector } from '@src/store/store';
import CommentList from '@src/components/Comment';
import CommentForm from '@src/components/Comment/CommentForm';
import Heart from '@src/components/Common/Button/Heart';

const Post = () => {
  const { id } = useParams();
  const { posts } = useAppSelector(state => state.post);
  const me = useAppSelector(state => state.user);

  return (
    <div>
      <div className="flex justify-between py-8 m-auto px-7 md:w-4/5 ">
        <h2>playlist1/talk that talk-트와이스</h2>
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
                src="https://image.ytn.co.kr/general/jpg/2022/0805/202208050913233246_d.jpg"
              />
            </div>
            <div className="relative pb-6 mx-4 mt-6 text-white ">
              <h3 className="w-11/12 mb-5 text-xl">
                talk that talktalk that talktalk that talktalk that talktalk
                that talktalk that talktalk that talktalk that talktalk that
                talktalk that talk
              </h3>
              <p className="mb-8 text-sm">트와이스</p>
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
            <CommentForm postId={id} />
            <CommentList
              postId={id!}
              me={me}
            />
          </article>
        </section>
      </div>
    </div>
  );
};

export default Post;
