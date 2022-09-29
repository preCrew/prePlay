import UserButton from '@src/components/common/Button/UserButton';
import heart from '@src/assets/heartFlat.png';
import { useParams } from 'react-router-dom';
import CommentList from '@src/components/Comment/CommentList';

const ProfilePage = () => {
  const email = 'csa2***@naver.com';
  const { id } = useParams();
  const like = 30;
  const comment = 30;

  return (
    <>
      <div className="flex w-full h-full flex-col justify-center items-center">
        <UserButton className="w-[60px] m-[20px]" />
        <div className="text-18">{email}</div>
        {/* like, comment count*/}
        <div className="mt-6 mb-6 text-center">
          <div className="text-18 flex justify-center items-center">
            like
            <img
              src={heart}
              className="w-20 h-20 m-1"
            />
            +{like}
          </div>
          <div className="text-18">comment + {comment}</div>
        </div>
        {/* comment list */}
        <div className="w-327 h-324 flex flex-col border rounded-md border-black overflow-y-auto">
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
