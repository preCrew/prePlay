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
      <div className="flex flex-col items-center justify-center w-full h-full">
        <UserButton className="w-[60px] m-[20px]" />
        <div className="text-18">{email}</div>
        {/* like, comment count*/}
        <div className="mt-6 mb-6 text-center">
          <div className="flex items-center justify-center text-18">
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
        <div className="flex flex-col overflow-y-auto border border-black rounded-md w-327 h-324">
          {/* <CommentList />
          <CommentList />
          <CommentList />
          <CommentList />
          <CommentList /> */}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

// // songs 컬렉션
// songs: [
//   // 그 안의 문서
//   {
//     song_id: '',
//     title: '',
//     thumnail_url: '',
//     music_url: '',
//     // songs.comments 컬렉션
//     comments: [
//       {
//         comment_id: '',
//         uid: '',
//         writter: '',
//         comment: '',
//         date: '2020-09-29',
//       },
//     ],
//   },
// ];
// // users 컬렉션
// users: [
//   {
//     uid: '',
//     commentCnt: '',
//     likeCnt: '',
//     comments: [
//       {
//         comment_id: '',
//         uid: '',
//         writter: '',
//         comment: '',
//         date: '2020-09-29',
//       },
//     ],
//   },
// ];
